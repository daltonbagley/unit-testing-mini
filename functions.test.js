const functions = require('./functions')

test("returnTwo should return 2", ()=>{
    expect(functions.returnTwo()).toEqual(2)
})

test("greeting", () => {
    expect(functions.greeting("James")).toEqual("Hello, James.")
    expect(functions.greeting("Jill")).toEqual("Hello, Jill.")
})


describe("Math functions: ", () => {
    test("add", () => {
        expect(functions.add(1,2)).toEqual(3)
        expect(functions.add(5,9)).toEqual(14)
    })

    test("subtract: ", () => {
        expect(functions.subtract(5,3)).toEqual(2)
        expect(functions.subtract(9,4)).toEqual(5)
    })

    test("multiply: ", () => {
        expect(functions.multiply(5,3)).toEqual(15)
        expect(functions.multiply(9,4)).toEqual(36)
    })

    test("divide: ", () => {
        expect(functions.divide(15,3)).toEqual(5)
        expect(functions.divide(16,4)).toEqual(4)
    })
    
})



