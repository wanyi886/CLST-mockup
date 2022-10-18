const button = document.getElementsByTagName('button')[0]; 
// console.log("button", button)


// button would be a collection of element, so we need to add index to access the element
// const testbtn = document.getElementById('testbtn');

async function handleSubmit(e) {
    e.preventDefault();

    const forminput = document.getElementsByTagName('input');

    if (forminput[0].value === "") {
        // create a p element with message
        const emailVali = document.createElement("p");
        const eMessage = document.createTextNode('Email is required for login !');
        emailVali.appendChild(eMessage);
        forminput[0].parentNode.parentNode.appendChild(emailVali)
        

    } 
    
    if (forminput[1].value === ""){
        // create a div element with message
        const pwdVali = document.createElement("p");
        const pwdMessage = document.createTextNode('Password is required for login !');
        pwdVali.appendChild(pwdMessage);
        forminput[1].parentNode.parentNode.appendChild(pwdVali)
    }

    console.log("forminput[0]", forminput[0]);
    console.log("forminput[1]", forminput[1])

    const response = await fetch('/api/session', {
        method: 'POST',
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({
            
            email: forminput[0].value,
            password: forminput[1].value
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