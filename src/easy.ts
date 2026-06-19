import { delay, randomVal } from "./utils/index";

interface User {
  id: number;
  name: string;
  email?: string;
}

// 自定义类型错误
class ApiError extends Error {
	public message!: string;
	public statusCode!: number;
	constructor(
		message: string,
		statusCode: number
	) {
		super(message)
		this.message = message;
		this.statusCode = statusCode;
		this.name = "ApiError"
	}
}



async function fetchUser(id: number): Promise<User> {
	const delayMs = randomVal(500, 2000);
	await delay(delayMs);

	if(id <= 0) {
		throw new ApiError(`无效的用户 ID:${id}`, 400);
	}

	// 模拟数据库查询
  const mockDatabase: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ];

	const user = mockDatabase.find((u) => u.id === id);
  if (!user) {
    throw new ApiError("用户不存在", 404);
  }

  return user;
}

function greet(user: User): string {
  const emailInfo = user.email ? `邮箱: ${user.email}` : "未提供邮箱";
  return `你好，我是 ${user.name}（ID: ${user.id}），${emailInfo}`;
}

(async function() {
  try {
		const id = randomVal([0, 1, 2, 3, 4, 6]);
    const user1 = await fetchUser(id);
    console.log("获取用户成功:", greet(user1));
  } catch (error) {
    if (error instanceof ApiError) {
      console.error(`API 错误 [${error.statusCode}]: ${error.message}`);
    } else {
      console.error("未知错误:", error);
    }
  }
})()
