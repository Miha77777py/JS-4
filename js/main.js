// 1
const btn1 = document.querySelector("#button_1");
const inp1 = document.querySelector("#input_1");
const inp2 = document.querySelector("#input_2");

btn1.addEventListener("click", () => {
    if (inp1.value && inp2.value) {
        alert("Обидва поля заповнені");
    } else {
        alert("Не всі поля заповнені");
    }
});

// 2
const btn2 = document.querySelector("#button_2");
const inp3 = document.querySelector("#input_3");
const inp4 = document.querySelector("#input_4");

btn2.addEventListener("click", () => {
    if (Number(inp3.value) + Number(inp4.value)<= 10) {
        alert("Сума менша або дорівнює 10");
    } else {
        alert("Сума більша за 10");
    }
});

// 3
const btn3 = document.querySelector("#button_3");
const inp5 = document.querySelector("#input_5");

btn3.addEventListener("click", () => {
    if (inp5.value.toLowerCase().includes("javascript")) {
        alert("Текст містить слово JavaScript");
    } else {
        alert("Текст не містить слово JavaScript");
    }
});

// 4
const btn4 = document.querySelector("#button_4");
const inp6 = document.querySelector("#input_6");

btn4.addEventListener("click", () => {
    if (Number(inp6.value) >= 10 && Number(inp6.value) <= 20) {
        alert("Число входить в діапазон від 10 до 20");
    } else {
        alert("Число не входить в діапазон від 10 до 20");
    }
});

// 5
const form = document.querySelector(".form");
const nameInp = document.querySelector("#input_7");
const emailInp = document.querySelector("#input_8");
const passwordInp = document.querySelector("#input_9");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const symbIndex = emailInp.value.indexOf("@");
    if (nameInp.value.length >= 3 && emailInp.value.includes(".", symbIndex) && passwordInp.value.length >= 6) {
        location.href = "./connect.html";
    } else {
        alert("Error while logging in!");
    }
});