function thumbsup(){
    let like = document.getElementById('id');
    like.innerText = parseInt(like.innerText) + 1;
}
function thumbsdown(){
 let dislike = document.getElementById('id');
    dislike.innerText = parseInt(dislike.innerText) - 1;
}