var row = 0;
function addText(){
    var input = document.getElementById('inputTask').value;
    if(input != "")
    {
    var node=document.createElement("p");
    var textnode=document.createTextNode(input);
    node.appendChild(textnode);
        node.setAttribute("id","shamika"+row);
    document.getElementById('mytodoList').appendChild(node);

    var removeTask = document.createElement('input');
    removeTask.setAttribute('type', 'button');
    removeTask.setAttribute("value", "Remove");
    removeTask.setAttribute("id", "removeButton");
    removeTask.setAttribute("onClick", "deleterow("+ row +");");

    node.appendChild(removeTask);
        row++;
    }
}
function deleterow(ID)
{
    document.getElementById('shamika'+ID).remove();
}

