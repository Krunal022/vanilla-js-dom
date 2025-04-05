let box = document.querySelector("#box");
let btn = document.querySelector("button")

btn.addEventListener("click", function () {
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);

    // console.log(c1, c2, c3)
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
})