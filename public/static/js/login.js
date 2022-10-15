const button = document.getElementsByTagName('button')[0]; 

// button would be a collection of element, so we need to add index to access the element
const testbtn = document.getElementById('testbtn');

async function handleSubmit(e) {
    e.preventDefault();

    const formdata = document.getElementsByTagName('input');
    console.log("email", formdata[0].value)
    console.log("pwd", formdata[1].value)

    const msg = "hihihi"
    
    const response = await fetch('/session', {
        method: 'POST',
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({
            msg,
            email: formdata[0].value,
            password: formdata[1].value
        }),
    })
    
    const data = await response.json();
    console.log("data", data)

    if (data.user) {
        console.log("Login succeed")
    } else {
        console.log("Login failed")
    }


}

// function hand

button.addEventListener('submit', handleSubmit);

testbtn.addEventListener('click', handleSubmit)