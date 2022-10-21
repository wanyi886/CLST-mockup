
const button = document.getElementsByTagName('button')[0]; 
// console.log("button", button)


// button would be a collection of element, so we need to add index to access the element
// const testbtn = document.getElementById('testbtn');

const form_input = document.getElementsByTagName('input');
const email_input = form_input[0];
const pwd_input = form_input[1];
// const eMessage_ptag = document.getElementById('eMessage');
// const pwdMessage_ptag = document.getElementById('pwdMessage');

async function fetchUser() {
    const response = await fetch('/api/session', {
        method: 'POST',
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({
            
            email: email_input.value,
            password: pwd_input.value
        }),
    })

    const data = await response.json();

    if (response.ok) {
        location.href = "./loggedIn";
        return data
    } 

    // if (!response.ok) {
    //     // alert(data.message)
    // } else {
    //     location.href = "./loggedIn";
    //     return data
    // }
   
    
}

async function handleClick(e) {
    // e.preventDefault();
    
    fetchUser()

    // const eMessage_ptag = document.getElementById('eMessage');
    // const pwdMessage_ptag = document.getElementById('pwdMessage');
    

    // eMessage_ptag.className = email_input.value === "" ? 'show' : 'noshow';
    // pwdMessage_ptag.className = pwd_input.value === "" ? 'show' : 'noshow';
    

    // if (eMessage_ptag.className !== 'show' && pwdMessage_ptag.className !== 'show') {
    //     fetchUser();
    // } else {
    //     button.disabled = true;
        
    // }

    

    //  if (email_input.value !== "" && pwd_input.value !== "") {
    //     fetchUser();
    //     return
    // } else {
    //     button.disabled = true;
    //     return
    // }
    
    // fetch() doesn't throw an error when the server returns a bad HTTP status, e.g. client (400–499) or server errors (500–599).
    // It only reject with a TypeError when a network error occurs.
    // so the code below is not working
    // fetchUser().catch(error => {
    //     // console.log(error.message)
    //     // console.error(error.message);
    //     alert(error.message)
    // })

}

// const handleEmailChange = () => {
//     const eMessage_ptag = document.getElementById('eMessage');
    
//     eMessage_ptag.className = eMessage.className = email_input.value === "" ? 'show' : 'noshow';
// }

// const handlePWDChange = () => {
//     const pwdMessage_ptag = document.getElementById('pwdMessage');
//     pwdMessage_ptag.className = eMessage.className = pwd_input.value === "" ? 'show' : 'noshow';

// }

// button.addEventListener('submit', handleClick);
button.addEventListener('click', handleClick);


// email_input.addEventListener('input', handleEmailChange)
// pwd_input.addEventListener('input', handlePWDChange)

