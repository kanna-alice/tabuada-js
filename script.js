function tabuada(){
    let num = document.getElementById("num").value
    let res = document.getElementById("res")
    res.innerHTML = ""
    if (num == ""){
        alert("Digite um número!")
    return
    }
    else {
for (let i = 1; i <= 10; i++){
    let item = document.createElement("option")
    item.text = `${num} x ${i} = ${num*i}`
    res.appendChild(item)
}}}
