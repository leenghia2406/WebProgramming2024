function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function () {
        const color = this.getAttribute("data-color");
        changeBackgroundColor(color);
    })
})