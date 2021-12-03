import $ from "jquery";
import "jquery-validation/dist/jquery.validate";

let signinValidator = $(".signin-form").validate({
    errorClass:"invalid-feedback",
    validClass:"valid-feedback",
    rules:{
        email:{
          required:true,
          email:true
        },
        password:{
          required:true,
        },
    },
    messages:{
      email:{
        required:"Please enter your email",
        email:"Please enter a valid email",
      },
      password:{
        required:"Please enter a password"
      }
    },
    highlight:function(element){
      $(element).removeClass("is-valid");
      $(element).addClass("is-invalid");
    },
    unhighlight:function(element){
      $(element).removeClass("is-invalid");
      $(element).addClass("is-valid");
    },
    errorPlacement:function(error, element) {
      if(element.attr('id') === 'password'){
        element.closest(".password-container").append(error);
      }else{
        element.closest('div').append(error);
      }
    }
  });