//console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
//Challange 1

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

let doglist = document.querySelector('#dog-image-container')
fetch(imgUrl)
.then(resp => resp.json())
.then((json) => {
    let dogArray = []
    // console.log(json.message.length)
    for (let i = 0; i < json.message.length; i++) {
        const img = document.createElement('img')
        // console.log(json.message[i])
        img.src = json.message[i]
        doglist.append(img)
    }
})
//Challenge 2

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
.then(resp => resp.json())
.then((json)=> {
    let dogBreed = document.querySelector('#dog-breeds')
    // console.log(json.message)
    let dogBreedArray = Object.keys(json.message)
    for (let i = 0; i < dogBreedArray.length; i++) {
        const li = document.createElement('li')
        li.textContent = dogBreedArray[i]
        dogBreed.append(li)
    }
    //Challenge 3
    let lis = document.querySelectorAll('li')
    // console.log(lis)
    lis.forEach(li => {
        li.addEventListener('click', function() {
            li.style.color = 'blue'
        })
    })
    //Challenge 4
    let option = document.querySelector('select')
    option.addEventListener('input', (event) => {
        // console.log(event.target.value)
        lis.forEach(li => {
            if (li.textContent.charAt(0) !== event.target.value) {
                li.style.display = 'none'
            } else {
                li.style.display = 'list-item'
            }
        })
    })
})
})