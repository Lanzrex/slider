const slider = document.querySelector('.image-slider')
const arrLeft = document.querySelector('.arrow-left')
const arrRight = document.querySelector('.arrow-right')

const heading = document.querySelector('.caption h1')
const description = document.querySelector('.caption p')

const images = ["bg1.jpg", "bg2.jpg", "bg3.jpg",]

const headings = ["New York, USA", "Tokyo, Japan", "Dubai, UAE",]

const descriptions = ["A city that never sleeps", "The city of lights", "Home to the tallest skyscrapper",]

let id = 0

function slide(id) {
    slider.style.backgroundImage = `url(images/${images[id]})`
    slider.classList.add('.image-fade')
    setTimeout(() => {
        slider.classList.remove('.image-fade')
    }, 550);
    heading.innerHTML = headings[id]
    description.innerHTML = descriptions[id]
}

arrLeft.addEventListener('click', () => {
    id--;
    if (id < 0) {
        id = images.length - 1
}
slide(id)
})

arrRight.addEventListener('click', () => {
    id++;
    if (id > images.length - 1) {
        id = 0
    }
    slide(id)
})

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("open").style.display ="none";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("open").style.display = "flex";
  }

