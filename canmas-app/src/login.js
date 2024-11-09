   
   document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // set values for check error msg (Temporary)
    const validEmail = 'naveen@gmail.com';
    const validPassword = '1234';

    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

       
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';

        
        const enteredEmail = emailInput.value.trim();
        const enteredPassword = passwordInput.value.trim();

        
        if (enteredEmail === validEmail && enteredPassword === validPassword) {
            window.location.href='https://www.google.com'; // Open dashboard (Temporary used this link )
        } else {
            
            errorMessage.textContent = 'Invalid email or password.';
            errorMessage.style.display = 'block';
        }
    });
});

   