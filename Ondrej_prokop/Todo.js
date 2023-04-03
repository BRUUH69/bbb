let myToDos = [{
    text: "Vynest kos",
    done: false
},{
    text: "Nakoupit",
    done: false
},{
    text: "Uklidit",
    done: true
},{
    text: "Nakrmit psa",
    done: true
},{
    text: "Umyt nadobi",
    done: false
}]


bodyElement.onload = function() { 
   for(let i = 0; i < myToDos.length; i++){
   document.getElementById("listik").innerHTML += "<p>" + myToDos[i].text + "</p>";
    }
}

button1.onclick = function(){
    for(let i = 0; i < myToDos.length; i++){
        document.getElementById("checkbox").innerHTML += "<input type=checkbox><label>" + myToDos[i].text + "</label>";
    }
}



