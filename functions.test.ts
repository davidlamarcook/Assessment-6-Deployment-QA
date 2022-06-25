const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    let arr = ['Jimmy', 'Timmy', 'Bill']
    test('Is an array', () => {
        expect(shuffleArray.isArray)
    })

    test('Contains Bill', () => {
        expect(shuffleArray(arr)).toContain('Bill')
    })

    test('Test Arrays lengths is same as shuffleArray', () => {
        expect(shuffleArray.length === Array.length)
    })
})