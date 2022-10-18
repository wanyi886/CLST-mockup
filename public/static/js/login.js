
const button = document.getElementsByTagName('button')[0]; 
// console.log("button", button)


// button would be a collection of element, so we need to add index to access the element
// const testbtn = document.getElementById('testbtn');

const form_input = document.getElementsByTagName('input');
const email_input = form_input[0];
const pwd_input = form_input[1];

const emailmsg = 'Email is required for login !';
const pwdmsg = 'Password is required for login !';

const emailVali = document.createElement("p");
emailVali.setAttribute('id', 'eMessage');
emailVali.setAttribute('class', 'noshow')
const eMessage = document.createTextNode(emailmsg);
emailVali.appendChild(eMessage);
email_input.parentNode.parentNode.appendChild(emailVali)

const pwdVali = document.createElement("p");
pwdVali.setAttribute('id', 'pwdMessage');
pwdVali.setAttribute('class', 'noshow');
const pwdMessage = document.createTextNode(pwdmsg);
pwdVali.appendChild(pwdMessage);
pwd_input.parentNode.parentNode.appendChild(pwdVali)






async function handleSubmit(e) {
    e.preventDefault();

    document.getElementById('eMessage').className = email_input.value === "" ? 'show' : 'noshow';
    document.getElementById('pwdMessage').className = pwd_input.value === "" ? 'show' : 'noshow';


    const response = await fetch('/api/session', {
        method: 'POST',
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({
            
            email: email_input.value,
            password: pwd_input.value
        }),
    })
    
    try {
        const data = await response.json();
        console.log("data", data);
    
        if (data.userId) {
            console.log("Successfully logged in!");
            
            location.href = "./loggedIn"
        }
    } catch (e) {
        alert('Email/ Password did not match, please try again');

    }
    
}

// function hand

button.addEventListener('click', handleSubmit);

// testbtn.addEventListener('click', handleSubmit)