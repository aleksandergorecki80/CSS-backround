var liczby = [4, 11, 55, 10, 15];
const result = liczby.map((x) => {
    return x * 2;
})
.sort()
.find((element) => {
    return `znaleziono ${element > 6}`
})

console.log(result)