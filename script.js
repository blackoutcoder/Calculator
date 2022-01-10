const resultTag = document.querySelector(".result");
const numberButtons = document.querySelectorAll(".row button");
console.log(numberButtons);
let result = 0;

for (let i = 0; i < numberButtons.length; i++) {
    const button = numberButtons[i];
    button.addEventListener("click", () => {
        resultTag.innerText += value;
    });
}