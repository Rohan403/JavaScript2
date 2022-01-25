// https://dev.to/kritika27/list-of-apis-to-use-for-creating-javascript-react-app-8m4
 var URL = "http://universities.hipolabs.com/search?country=india";
var table = document.getElementById("table");
var orderred_list = document.getElementById("ul");
fetch(URL)
.then((res) => res.json())
.then((data) => {
        td1.innerText = data[0].country;
        td4.innerText = data[0].name;
        td2.innerText = data[0].domains;
        td3.innerText = data[0]["state-province"]; 
    console.log(data); 
})
.catch((error) => (console.log("You mistyped url kindly type it corretly")));
var tr = document.createElement("tr");
var tr1 = document.createElement("tr");
var tr2 = document.createElement("tr");
var tr3 = document.createElement("tr");
var td1 = document.createElement("td");
var td2 = document.createElement("td");
var td3 = document.createElement("td");
var td4 = document.createElement("td");  
    tr.appendChild(td1);
    tr1.appendChild(td2);
    tr2.appendChild(td3);
    tr3.appendChild(td4);
    table.appendChild(tr); 
    table.appendChild(tr1); 
    table.appendChild(tr2); 
    table.appendChild(tr3); 
    
    