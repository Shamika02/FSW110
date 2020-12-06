var h2 = document.createElement("h2");
h2.innerHTML = "Where are you going"
document.body.append(h2);
    h2.style.fontStyle = "italic";
    h2.style.fontWeight = "bold";
    h2.style.color = "pink";
    h2.style.fontSize = "20px";

    var div= document.createElement("div")
    div.className ="border"
    document.body.append(div)

for (var i = 0; i < 4; i++){
    var h2= document.createElement("h2");
    h2.innerHTML= "Where are you going";
    div.append(h2);
    h2.style.fontStyle = "italic";
    h2.style.fontWeight = "bold";
    h2.style.color = "pink";
    h2.style.fontSize = "20px";
}

     document.querySelector("h2").classList.add("border"); 