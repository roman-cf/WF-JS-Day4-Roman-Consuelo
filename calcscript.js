
for (var i=1; i < keysJson.length; i++){

	let key = document.createElement("div");
		key.id = keysJson[i].id;
		key.className = keysJson[i].class;
		key.textContent = keysJson[i].txt;
		
		document.getElementById("tastencontainer").appendChild(key);

}

//--------------------------------------------------Advanced---ENDE---------------------------------------------------------
