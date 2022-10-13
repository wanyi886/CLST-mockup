const button = document.getElementsByTagName('button')[0]; 
// button would be a collection of element, so we need to add index to access the element


async function handleSubmit(e) {
    e.preventDefault();

    console.log("clicked")
    const formdata = document.getElementsByTagName('input');
    console.log("email", formdata[0].value)
    console.log("pwd", formdata[1].value)

    
    const response = await fetch('/session', {
        method: 'POST',
        body: JSON.stringify({
            email: formdata[0].value,
            password: formdata[1].value
        })
    })
    
    const data = await response.json();

    if (data.user) {
        console.log("Login succeed")
    } else {
        console.log("Login failed")
    }


}

button.addEventListener('submit', handleSubmit);