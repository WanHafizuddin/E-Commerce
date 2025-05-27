
const quantityInput = document.getElementById("quantityInput");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

increaseBtn.addEventListener("click", () => {
    let current = parseInt(quantityInput.value, 10);
    quantityInput.value = current + 1;
});

decreaseBtn.addEventListener("click", () => {
    let current = parseInt(quantityInput.value, 10);
    if (current > 1) {
        quantityInput.value = current - 1;
    }
});

