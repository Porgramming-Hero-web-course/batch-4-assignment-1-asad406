{
    const countWordOccurrences = (sentence: string, newWord: string) => {
        const words: string[] = sentence.toLocaleLowerCase().split(/\s+/) //make word array from sentence 
        let count: number = 0;
        for (const word of words) {
            if (word === newWord) {
                count += 1;
            }
        }
        console.log(count)
    }
    countWordOccurrences("I love typescript", "typescript")
}