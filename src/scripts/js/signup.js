import $ from "jquery";

import "./validations";
import "./showPassword";

let signupForm = $('.signup-form');

signupForm.submit((e)=>{
    if(!signupForm.valid()) return;
    
    e.preventDefault(); 

    console.log(signupValidator);
})