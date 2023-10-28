const names = ["alice", "John", "Bob", "Ann"];

const isStartWithALetter = names.every((arr) =>  {
    return arr.toLowerCase().startsWith('a')  
})
console.log(isStartWithALetter)