function uname() {
  var x = document.getElementById("name").value;
  if(x==""){
      document.getElementById("user").innerHTML="Please provide the username";
  }
  else{
    document.getElementById("user").innerHTML="";
  }
}
function passw() {
    var y=document.getElementById("pass").value;
    if(y==""){
        document.getElementById("user1").innerHTML="Please provide the password";
    }
    else if(y.length<6 || y.length>15){
        document.getElementById("user1").innerHTML="Please provide the appropriate password";
    }
    else{
      document.getElementById("user1").innerHTML="";
    }
   
}
function email(){
    var z=document.getElementById("num").value;
    const emailRegexp = new RegExp(
        /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
      )
      var abc=emailRegexp.test(z);
      if(abc==false)
      {
          document.getElementById("mail").innerHTML="Email not in proper format";
          
      }
      else{
        document.getElementById("mail").innerHTML="";

      }
    // if(z==""){
    //     document.getElementById("mail").innerHTML="Please provide the email";
    // }
    // else{
    //   document.getElementById("mail").innerHTML="";
    // }
//   for(var i=0;i<z.length;i++){
//     var member = document.forms.fmember.user[i].value;
//   }
}
function phone(){
    var b=document.getElementById("pho").value;
    const emailRegexp = new RegExp(
        /^[8-9]\d{9}$/gi
      )
      var abc=emailRegexp.test(b);

      if(abc==false)
      {
     document.getElementById("number").innerHTML="Phone number not in proper format";
      }
//     if(b.length!=10){
//         document.getElementById("number").innerHTML="Please provide a valid number";
//     }
//   else{
//     document.getElementById("number").innerHTML="";
//   }
//   if(isNaN(b)){
//     document.getElementById("number").innerHTML="alphabets not allowed in phone number";
//   }
  else{
    document.getElementById("number").innerHTML="";
}
}
function validate(){
    alert("Please check the details once more");
}