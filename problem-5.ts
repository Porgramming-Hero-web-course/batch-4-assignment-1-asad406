{
    const getProperty = <T, K extends keyof T>(Obj: T, Key: K) => {
        return Obj[Key]
    }
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));

}