const listOne = process.argv
let sum = 0

for(let i = 2; i < listOne.length; i++){
	sum += Number(listOne[i])
}

console.log(sum)
