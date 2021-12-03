import $ from "jquery";
import "jquery-validation/dist/jquery.validate";
import "jquery-validation/dist/additional-methods";

$.validator.addMethod("lettersonlyWithSpace",function(a,b){
    return this.optional(b)||/^[a-zA-Z ]*$/i.test(a)
},"Letters only please");

$.validator.addMethod("strongPassword",function(value,element){
    return this.optional(element)
    || value.length >=6
    && /\d/.test(value)
    && /[a-z]/i.test(value);
},"Your password must be atleast 6 characters long and contain atleast one number and one character");

$.validator.addMethod("mobile",function(value,element){
  return this.optional(element)
  || value.length == 10
  && /^\d*$/.test(value);
},"Please enter a valid mobile number")

let signupValidator = $(".signup-form").validate({
    errorClass:"invalid-feedback",
    validClass:"valid-feedback",
    ignore:"#dob",
    rules:{
        name:{
          required:true,
          lettersonlyWithSpace:true
        },
        email:{
          required:true,
          email:true,
        //   remote:{
        //     url:`${basePath}/scripts/php/isEmailAvailable.php`,
        //     type: "get",
        //     data:{
        //       email:function(){
        //         return $("#email").val();
        //       },
        //       for:"signup"
        //     }
        //   }
        },
        password:{
          required:true,
          strongPassword:true
        },
        mob:{
          required:true,
          mobile:true,
          digits:true
        }
    },
    messages:{
      name:{
        required:"Pleae enter your name",
      },
      email:{
        required:"Please enter your email",
        email:"Please enter a valid email",
        remote:"This email is already associated with a account.Would like to <a href='/dist/html/signin.html'>login</a>"
      },
      password:{
        required:"Please enter a password"
      },
      mob:{
        required:"Please enter your mobile number",
        digits:"Digits only please"
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
