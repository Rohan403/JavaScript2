var url = "https://api2.binance.com/api/v3/ticker/24hr";
fetch(url)
.then((res) => res.json())
.then((data) => {
    for(var i=0 ; i<99 ; i++){
        var body = document.getElementById("body");
        var div = document.createElement("div");
        var list = document.createElement("ul");
        var  li = document.createElement("li");
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        li.innerText = data[i].symbol;
        li1.innerText = data[i].priceChange;
        li2.innerText = data[i].priceChangePercent;
        list.append(li,li1,li2);
        div.appendChild(list);
        body.prepend(div);
    }
    console.log(data);
})
.catch((error) => (console.log("You got error")));
