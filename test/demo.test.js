/**
 * 
 * @param {num} a 
 * @param {num} b 
 */


function sum(a, b) {
    return a + b
}

test('10 + 20 应该等于 30', () => {
    const res = sum(10, 20)
    expect(res).toBe(30)
})

test('1 + 2 应该等于 3', () => {
    const res = sum(1, 2)
    expect(res).toBe(3)
})