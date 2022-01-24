
    var count = document.querySelectorAll(".id1");
    var img_ref = document.querySelectorAll('.img1')
    var heart = document.querySelectorAll('.like');
    for(let i = 0; i < img_ref.length; i++){
        img_ref[i].addEventListener('dblclick',function(){
            heart[i].innerText="❤️";
            count[i].value = parseInt(count.value)+1;
        });
    }
    for(let i = 0; i < heart.length; i++){
        heart[i].addEventListener('click',function(){
            heart[i].innerText= "🤍";
        });
    }
    var like_btn = document.querySelector('.img1');
var counter = document.querySelector('.like_btns');
like_btn.addEventListener('dblclick',function(){
    totallikes++;
    if(totallikes >= 0){
        counter.value = totallikes + "Likes";
    }
   // counter.value = parseInt(counter.value) + 1 + "Likes";
   else{
    counter.value = String(totallikes +" Dislikes").slice(1);
   }
})
var dislike = document.querySelector('.like');
var totallikes = 0;
dislike.addEventListener('click', function(){
    if(totallikes <= 0){
        totallikes--;
       counter.value = String(totallikes +" Dislikes").slice(1);
    }
    else{
        totallikes--;
        counter.value = totallikes + "Likes" ;
    }
    console.log(parseInt(counter.value));
   // counter.value = parseInt(counter.value) -1 +"Likes" ;
})