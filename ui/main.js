console.log('Loaded!');
var button=document.getElementById("page1_button");
button.addEventListener("click",function(){
    window.location.href="page1";
});
var response;
var list;
var comment=document.getElementById('namelist');
var request=new XMLHttpRequest();
request.onreadystatechange=function(){
  if(request.readyState === XMLHttpRequest.DONE){
       response=request.responseText;
          var arrayof=JSON.parse(response);
          for(var i=0 ; i<arrayof.length(); i++)
          {
              list=list+"<li>"+arrayof[i]+"</li>";
          }
          
          comment.innerHTML=list;
          console.log('request successful!');
      if(request.status === 200){
         console.log('request successful!');
      }
      
  }};  
   request.open('GET',"http://darshan281996.imad.hasura-app.io/comment/hello",true);
   request.send(null);
   console.log('making request');