const toggleButton = document.querySelector(".toggle")
const toggleSpan = document.querySelector(".toggle span")
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

toggleButton.addEventListener("click", () => {
    toggleSpan.classList.toggle("active");
    console.log(toggleSpan.classList.contains("active"))

    if(toggleSpan.classList.contains("active")){
        console.log(true)
        first.textContent="199";
        second.textContent="249";
        third.textContent="399";
    } else {
        first.textContent="19.9";
        second.textContent="24.9";
        third.textContent="39.9";
    }
})