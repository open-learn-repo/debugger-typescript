function delay(ms: number): Promise<void>
function delay(ms: number, cb: () => void): Promise<void>
async function delay(ms: number, cb?: Function) {
	return new Promise((resolve, _) => {
			const timer = setTimeout(() => {
				cb && cb()
				clearTimeout(timer)
				resolve(undefined)
			}, ms);
	})
}

function randomVal(scope: any[]): number; // 从scope中随机取一个值
function randomVal(start: number, end: number): number; // 从start~end中随机取一个值，但取不到end
function randomVal(param: number | any[], end?: number) {
	if(Array.isArray(param)) {
		const len = param.length;
		const arrIdx = randomVal(0, len);
		return param[arrIdx];
	} else if(Number.isInteger(param)) {
		if(!end) {
			throw new Error("第二个参数必须存在");
		}
		const start = param;
		if(end < start) {
			throw new Error("第二个参数必须大于等于第一个参数");
		}
		const limit = end - start;
		return Math.floor(Math.random() * limit) + start
	}
}

export {
	delay,
	randomVal
}