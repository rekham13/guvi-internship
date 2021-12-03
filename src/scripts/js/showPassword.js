import $ from "jquery";

const showPasswordBtn = $('.showPassword-btn');
const passwordField = $('#password');


showPasswordBtn.click((e)=>{
   if(passwordField[0].value.length === 0) return;

   if(passwordField[0].type === "password"){
    passwordField[0].type = "text";
    showPasswordBtn.children('.hide-password-icon').show();
    showPasswordBtn.children('.show-password-icon').hide();
   }else{
    passwordField[0].type = "password";
    showPasswordBtn.children('.hide-password-icon').hide();
    showPasswordBtn.children('.show-password-icon').show();
   }
});
