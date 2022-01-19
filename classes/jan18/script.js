//confirm("Do you want to delete everything?");
//var status =  confirm("Do you want to delete everything?");
//alert(status);
var button_reference = document.getElementById('initButton');
button_reference.addEventListener('click',function(){
alert("Button clicked");
});
//console.log(button_reference);
function abcd(){
    button_reference.innerText="Something...";
    button_reference.style.backgrondColor = "#FF0000";
}
button_reference.addEventListener('click',abcd());