let arr = ['bheem.png', 'chutki.png', 'dholu-bholu.png', 'kalia.png', 'kirmada.png', 'raju.png']

var btn = document.querySelector('button')
var body = document.querySelector('body')

btn.addEventListener("click", function () {
    var img = document.createElement('img')
    console.log(img)
    var x = Math.random() * 90
    var y = Math.random() * 90
    var rot = Math.random() * 360


    let rnImage = Math.floor(Math.random() * arr.length)

    img.setAttribute('src', `${arr[rnImage]}`)
    img.style.height = '150px'
    img.style.position = 'absolute'
    img.style.left = x + '%'
    img.style.top = y + '%'
    img.style.rotate = rot + 'deg'

    body.appendChild(img)
    // console.log('clicked')
})