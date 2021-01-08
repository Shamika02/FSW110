function mytodoList(){
    var item= document.getElementById("mytodoInput").value
    var text= document.createTextNode(item)
    var newItem= document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("mytodoList").appendChild(newItem)
}

