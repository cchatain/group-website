
	document.getElementById("bank").innerHTML=localStorage.getItem("key");


if (localStorage.getItem("saveName")) {
    document.getElementById("bank").style.display = "block";
} else {
    document.getElementById("bank").style.display = "none";
}	
	

function save(){
	var saveName=document.getElementById("text").value;
	console.log(saveName);
	localStorage.setItem("key", saveName);
	document.getElementById("text").value = "";
	document.getElementById("bank").style.display = "block";
	document.getElementById("bank").innerHTML=localStorage.getItem("key");
}


function deleteKey(){
	document.getElementById("text").value = "";
	localStorage.removeItem("key");
}


