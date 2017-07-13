console.log('Loaded!');
var button=document.getElementById("page1_button");
button.addEventListener("click",function(){
    window.location.href="page1";
});
var response;
var list;
var arrayof=[];
var comment=document.getElementById('list');
var getdata=new XMLHttpRequest();
getdata.onreadystatechange=function(){
  if(getdata.readyState == 4 && getdata.status ==200){
      
       response=getdata.responseText;
           arrayof=JSON.parse(response);
          for(var i=0 ; i<arrayof.length(); i++)
          {
              alert('inside for');
              list=list+"<li>"+arrayof[i]+"</li>";
          }
          
          comment.innerHTML=list;
          alert(' request successfully done');
          console.log('request successful!');
      
  }};  
   getdata.open ("GET","darshan281996.imad.hasura-app.io/comment",true);
   getdata.send(null);
  // alert(getdata.status);
  alert('making request');