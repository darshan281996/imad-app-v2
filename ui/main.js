console.log('Loaded!');
var button=document.getElementById("page1_button");
button.addEventListener("click",function(){
    window.location.href="page1";
});
var save = document.getElementById("save_button");
save.addEventListener('click',function(){
    var comment=document.getElementById('comment_textbox');
   var enter= comment.getInnerHTML;
   alert(enter);
});