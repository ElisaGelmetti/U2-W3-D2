// salvo il nome nel Local Storage
function names(){
    const name = document.getElementById("name").value;
    localStorage.setItem("names", name);
    alert("nome salvato!"); 
}

document.getElementById("nameForm").addEventListener ("submit",
function(event){
    event.preventDefault();
    names();
}
)

console.log("names", names)


// CANCELLO IL NOME SCRITTO
document.getElementById("nameForm"). addEventListener ("reset", 
function()
{localStorage.removeItem("names");
alert("nome cancellato ")

})


reset.addEventListener("click", function(){
    name.value ="";
   
})



