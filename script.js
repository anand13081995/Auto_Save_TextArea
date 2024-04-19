
let dataTyped = document.querySelector(".notes");
let clearBtn = document.getElementById("clearBtn");

dataTyped.addEventListener('input', ()=> {

    localStorage.setItem("savedText" , dataTyped.value);

});

dataTyped.value = localStorage.getItem("savedText");




clearBtn.addEventListener('click', () => {
    dataTyped.value = '';
});