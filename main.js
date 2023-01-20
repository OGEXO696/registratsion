const section1 = document.querySelectorAll('.section1')
const next_2 = document.querySelectorAll('.next_2')
const next =document.querySelectorAll('.next')
const input = document.querySelector('.input')
const body = document.querySelectorAll('body')

function randColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

for (let i = 0; i < section1.length; i++) {

    next[i].addEventListener('click', () =>  {
        section1[i].style.background = randColor()
    })

    next_2[i].addEventListener('click', () => {
        title[i].style.color = randColor()
    })
  
}


input.addEventListener('mouseout', () => {
    if (input.type == 'text') {
        input.type = 'password'
    }else {
        input.type = 'text'
    }
})


function randDeg() {
    return Math.floor(Math.random() * 361)
}

for (let i = 0; i < body.length; i++) {

    body[i].addEventListener('dblclick', () => {
        body[i].style.background = `linear-gradient(${randDeg()}deg, ${randColor()}, ${randColor()}, ${randColor()})`
    })

}

console.log(randDeg() );