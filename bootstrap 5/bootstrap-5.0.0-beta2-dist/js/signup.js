let email = document.getElementById("email");
let email_error = document.getElementById("email_error");

//  function Validate(){
//      let regX = /^([A-Za-z0-9\.-]+)@([A-Za-a0-9\-]+).(a-z{2,3})(.[a-z]{2,3}?)$/

//      regX.addEventListener('keyup', function(event){

//         let isValid = regX.checkValidity();
//         if(isValid){
//             email_error.innerHTML = "valid";
//             email_error.style = "red";
//             }else{
//                 email_error.innerHTML = "invalid";
//                 email_error.style = "green";
//             }

//      } );

    
 
 function Validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-a0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    // email.addEventListener('keyup', function (event) {
     if(regexp.test(email.)){
          email_error.innerHTML = "valid";
         email_error.style.color = "green";
         return true;
     }
     else{
        email_error.innerHTML = "invalid";
        email_error.style.color = "red";
        return false;
         
     }
  // });
 }