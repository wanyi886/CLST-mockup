
const button = document.getElementsByTagName('button')[0]; 
// console.log("button", button)


// button would be a collection of element, so we need to add index to access the element
// const testbtn = document.getElementById('testbtn');

const form_input = document.getElementsByTagName('input');
const email_input = form_input[0];
const pwd_input = form_input[1];

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

    if (!response.ok) {
        alert(data.message)
    } else {
        location.href = "./loggedIn";
        return data
    }
}

async function handleSubmit(e) {
    e.preventDefault();

    document.getElementById('eMessage').className = email_input.value === "" ? 'show' : 'noshow';
    document.getElementById('pwdMessage').className = pwd_input.value === "" ? 'show' : 'noshow';

    fetchUser();
    // fetch() doesn't throw an error when the server returns a bad HTTP status, e.g. client (400–499) or server errors (500–599).
    // so the code below is not working
    // fetchUser().catch(error => {
    //     // console.log(error.message)
    //     // console.error(error.message);
    //     alert(error.message)
    // })

}

// function hand

// button.addEventListener('submit', handleSubmit);
button.addEventListener('click', handleSubmit);
