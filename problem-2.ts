{
    const removeDuplicates = (numArray: number[]) => {
        const outPut = numArray.filter((num: number, i) => numArray.indexOf(num) === i)
        return console.log(outPut);
    }
    removeDuplicates([1, 2, 2, 3, 4, 4, 5])
}