const button = document.getElementsByTagName('button')[1]; 
// console.log("button", button)

// button would be a collection of element, so we need to add index to access the element
// const testbtn = document.getElementById('testbtn');

async function handleSubmit(e) {
    e.preventDefault();

    const formdata = document.getElementsByTagName('input');

    
    const response = await fetch('/api/session', {
        method: 'POST',
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({
            
            email: formdata[0].value,
            password: formdata[1].value
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