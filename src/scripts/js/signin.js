import $ from "jquery";

import "./validations/signin-validation";
import "./showPassword";

let signinForm = $('.signin-form');

signinForm.submit((e)=>{
    if(!signinForm.valid()) return;
    
    e.preventDefault();
})