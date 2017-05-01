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
      alert('starting request');
       response=getdata.responseText;
           arrayof=JSON.parse(response);
          for(var i=0 ; i<arrayof.length(); i++)
          {
              list=list+"<li>"+arrayof[i]+"</li>";
          }
          
          comment.innerHTML=list;
          alert(' request successfully done');
          console.log('request successful!');
      if(request.status === 200){
          alert('request successful');
         console.log('request successful!');
      }
      
  }};  
   getdata.open('GET',"http://darshan281996.imad.hasura-app.io/comment/hello",true);
   getdata.send(null);
   console.log('making request');