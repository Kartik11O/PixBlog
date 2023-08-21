var Nav = document.getElementById("Nav")
var Nav_Content = document.getElementById("ul")
var Nav_BTN = document.getElementById("Nav_BTN")
var Nav_BTN2 = document.getElementById("Nav_BTN-2")

function Nav_in(){
    Nav.classList.add("Nav_Open")
    Nav_Content.style.display = "flex"
    Nav_BTN.style.display = "none"
    Nav_BTN2.style.display = "block"
}
function Nav_out(){
    Nav.classList.remove("Nav_Open")
     Nav_Content.style.display = "none"
     Nav_BTN.style.display = "block"
     Nav_BTN2.style.display = "none"
}

function Nav_Phone_close(){
    Nav.classList.remove("Nav_Open")
    Nav_Content.style.display = "none"
    Nav_BTN.style.display = "block"
    Nav_BTN2.style.display = "none"
}

