function tabuada(){
    let num = document.getElementById("num").value
    let res = document.getElementById("res")
    res.innerHTML = ""
for (let i = 1; i <= 10; i++){
    let item = document.createElement("option")
    item.text = `${num} x ${i} = ${num*i}`
    res.appendChild(item)
}}
