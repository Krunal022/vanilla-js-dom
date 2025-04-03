let btn = document.querySelector("button")
let h5 = document.querySelector("h5")
let flag = 0;
btn.addEventListener('click', function () {
    h5.innerHTML = "Request sending..";
    h5.style.fontSize = "1rem"
    h5.style.color = "gray"

    if (flag === 0) {
        setTimeout(() => {
            h5.style.fontSize = "1.5rem"
            h5.innerHTML = "Friends ✅";
            h5.style.color = "green"
            btn.innerHTML = "Remove Friend"
            flag = 1
        }, 2000);

    }
    else {
        h5.style.fontSize = "1.5rem"
        h5.innerHTML = "Stranger";
        h5.style.color = "red"
        btn.innerHTML = "Add Friend"
        flag = 0
    }
})