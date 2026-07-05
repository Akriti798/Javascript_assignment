const box1 = document.getElementById("box-1");
box1.addEventListener("click",() => {
    box1.style.backgroundColor = "red";
})
const box2 = document.getElementById("box-2");
box2.addEventListener("click",() => {
    box2.style.backgroundColor = "blue";
})
const box3 = document.getElementById("box-3");
box3.addEventListener("click",() => {
    box3.classList.add("green");
})
const box4 = document.getElementById("box-4");
box4.addEventListener("click",() => {
    box4.classList.add("yellow");
})

function greetfunc(){
    let username = document.getElementById("name").value;

    document.getElementById("heading").innerText="Hello "+ ", " + username;
}