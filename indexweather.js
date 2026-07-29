const box2 = document.querySelector("#box2");
const celcius1 = document.querySelector("#celcius1");
const select2 = document.querySelector("#select2");
const button1 = document.querySelector("#button1");
const temp12 = document.querySelector("#temp12");



box2.addEventListener("input", function () {
    console.log(box2.value);
})

celcius1.addEventListener("change", function () {
    console.log(celcius1.value);
})

select2.addEventListener("change", function () {
    console.log(select2.value);
})

button1.addEventListener("click", function () {
    if (celcius1.value === "celcius" && select2.value === "celcius") {
        temp12.textContent = box2.value + "°C";
    } else if (celcius1.value === "celcius" && select2.value === "fahrenheit") {
        temp12.textContent = (box2.value * 1.8) + 32 + "°F";
    } else if (celcius1.value === "fahrenheit" && select2.value === "celcius") {
        temp12.textContent = (box2.value - 32) * 0.5 + "°C";
    } else if (celcius1.value === "fahrenheit" && select2.value === "fahrenheit") {
        temp12.textContent = box2.value + "°F";
    }
})

