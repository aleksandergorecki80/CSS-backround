var liczby = [4, 11, 55, 10, 15];
const result = liczby.map((x) => {
    return x * 2;
})
.sort()
.find((element) => {
    return `znaleziono ${element > 6}`
})

console.log(result)

document.getElementById("back").addEventListener('click', (event) => {
    if(event.target.className === "outside"){
        console.log('DO YOUR JOB')
    }
});
// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    console.log(`Key pressed ${name} \r\n Key code value: ${code}`);
  }, false);