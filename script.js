var element = document.getElementById("foo");
element.style.backgroundImage = "url(zawor.png)";


window.addEventListener("resize", () => {
    console.log(element)
    var width = document.getElementById('foo').offsetWidth;
    console.log(width)
    element.style.backgroundSize = width / 2;
}, true);