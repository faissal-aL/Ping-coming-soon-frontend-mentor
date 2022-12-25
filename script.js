const email = document.getElementById('email');
const button = document.getElementById('notify_button');
const error = document.getElementById('error_message');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ;

button.addEventListener("click", function(){
    if(!emailRegex.test(email.value)){
        error.style.display ='block';
        email.style.border ='1px solid var(--LightRed)'
    }
    else { error.style.display ='none';
         email.style.border = '1px solid var(--PaleBlue)' }
})