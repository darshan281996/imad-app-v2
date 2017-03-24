console.log('Loaded!');
var save = document.getElementById("save_button");
save.addEventListener('click',function(){
    var comment=document.getElementById('comment_textbox').value;
     window.location.href=comment;
});
