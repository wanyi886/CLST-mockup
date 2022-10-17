const button = document.getElementsByTagName('button')[0]; 

// button would be a collection of element, so we need to add index to access the element
const testbtn = document.getElementById('testbtn');

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
    
    const data = await response.json();
    
    console.log("data", data)

    if (data.user) {
        console.log("Successfully logged in!")
        // redirect to another page
        location.href = "./loggedIn"
    } 


}

// function hand

button.addEventListener('submit', handleSubmit);

testbtn.addEventListener('click', handleSubmit)