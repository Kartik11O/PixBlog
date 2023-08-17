var Nav = document.getElementById("Nav")
var Nav_Content = document.getElementById("ul")

function Nav_in(){
    Nav.classList.add("Nav_Open")
    Nav_Content.style.display = "flex"
}
function Nav_out(){
    Nav.classList.remove("Nav_Open")
     Nav_Content.style.display = "none"
}