function tabuada(){
    // Obtendo o número digitado pelo usuário
    let num = document.getElementById("num").value
    let res = document.getElementById("res")
    res.innerHTML = ""
    if (num == ""){
        alert("Digite um número!")
    return}
// Gerar a tabuada do número digitado
    else {
for (let i = 1; i <= 10; i++){
    let item = document.createElement("option")
    item.text = `${num} x ${i} = ${num*i}`
    res.appendChild(item)
}}}
