function AN(button) {
    let input = document.getElementById("PN");
    let list = document.getElementById("LDN");
    let NN = document.createElement("li");
    NN.textContent = input.value;
    list.appendChild(NN);
    input.value = "";
}