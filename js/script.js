const faqBox = document.querySelectorAll(".f-box__show")
const moveBox = document.querySelectorAll(".f-box__text")
const iconMinus = document.querySelectorAll(".svg__minus")
const iconPlus = document.querySelectorAll(".svg__plus")

faqBox.forEach((oneItems, index) => {

    oneItems.addEventListener("click", () => {

        let contain = moveBox[index].classList.contains("active")

        if (contain == false) {
            moveBox[index].classList.add("active")
            moveBox[index].style.maxHeight = moveBox[index].scrollHeight + "px"
            animation(index)

        } else {
            moveBox[index].classList.remove("active")
            moveBox[index].style.maxHeight = "0px"
            animation(index)
        }
    })
})

function animation(i) {

    const activeIcon = iconPlus[i].classList.contains("svg__active")

    if (activeIcon == false) {
        iconPlus[i].classList.add("svg__active")

        setTimeout(() => {
            iconActive(i)
        }, 350)
        
    } else {
        iconPlus[i].classList.remove("svg__active")
        iconDeactive(i)
    }
}

function iconActive(i) {
    iconMinus[i].style.display = "block"
    iconPlus[i].style.display = "none"
}

function iconDeactive(i) {
    iconMinus[i].style.display = "none"
    iconPlus[i].style.display = "block"
}