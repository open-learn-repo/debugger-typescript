
function self_args<T>(args: T[]): string {
	return args.toString()
}

let info1 = 'hello'
let info2 = 'world'
console.log(self_args([info1, info2]))