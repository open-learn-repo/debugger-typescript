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

function randomVal(end: number): number;
function randomVal(start: number, end: number): number
function randomVal(start: number, end?: number) {
	const val = Math.random();
	const len = Array.from(arguments).length;
	if(len === 1) {
		return Math.floor(val * start) + 1
	} else if(len === 2) {
		return Math.floor(val * end!) + start + 1
	} else {
		throw new Error("randomVal 函数参数大于两个！")
	}
}

export {
	delay,
	randomVal
}