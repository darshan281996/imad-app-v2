console.log('Loaded!');
var button=document.getElementById("page1_button");
button.addEventListener("click",function(){
    window.location.href="page1";
});
var response;
var list;
var arrayof=[];
var comment=document.getElementById('namelist');
var getdata=new XMLHttpRequest();
getdata.onreadystatechange=function(){
  if(getdata.readyState === XMLHttpRequest.DONE){
       response=getdata.responseText;
           arrayof=JSON.parse(response);
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