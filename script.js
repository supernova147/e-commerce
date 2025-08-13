// For Form (including validation)



const name = document.getElementById('name_input');
const email = document.getElementById('email_input');
const phone = document.getElementById('phone_input');

const button = document.getElementById('submit_button');

// const email_check = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|

button.addEventListener('click', validation())

// function validation() {
//     // conditional statements that compare value & ensure that input isnt empty or incorrect.
//     const name_val = name.innerHTML;
//     const email_val = email.innerHTML;
//     const phone_val = phone.innerHTML;

    // const error_text_name = document.getElementById('name_error').innerHTML;
    // const error_text_email = document.getElementById('email_error').innerHTML;
    // const error_text_phone = document.getElementById('phone_input').innerHTML;

    // if (! email_val.includes('@') || ! email_val.includes('.')){ 
        
    // }


    // if (name_val.includes(''))
    // {
    //     error_text_name = "Please enter a valid name.";
    // }
    // elseif (name_val.includes('1','2','3','4','5','6','7','8','9','0'))
    // {
    //     error_text_name = "Please enter a valid name.";
    // }
    // else (name_val.includes('Please enter valid name'))
    // {
    //     error_text_name = "Please enter ";
    // }

}