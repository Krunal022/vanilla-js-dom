let btn = document.querySelector("button")
let h1 = document.querySelector("#card h1")

let arr = ["CSK","MI","RCB","SRH","DC","PBKS","LSG","RR","GT"]

btn.addEventListener("click",function(){
    let num = Math.floor(Math.random()*arr.length) 
    let winner = arr[num]

    h1.textContent = winner

    console.log(num)
})