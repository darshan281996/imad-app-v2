console.log('Loaded!');
var button=document.getElementById("page1_button");
button.addEventListener("click",function(){
    window.location.href="page1";
});
var response;
var comment=document.getElementById('lastcomment');
var request=new XMLHttpRequest();
request.onreadystatechange=function(){
  if(request.readyState===XMLHttpRequest.Done){
      if(request.status===200){
          response=request.responseText;
          comment.innerHTML=response;
      }
      
  }  
   request.open('GET',"http://darshan281996.cloud.imad.hasura-app.io/comment/hello",true);
   request.send(null);
};