
const logoutBTN = document.getElementById('logout-btn');

const handelClick = async () => {
    
    const response = await fetch('/api/logout', {
        method: "DELETE", 
        // customer uses POST with empty object to log out user. Need to comment in below to use it
        
        // headers: { "Content-Type": "application/json"},
        // body: JSON.stringify({})
    });

    if (response.ok) {
        alert("Logout successfully!")
    }
    
    location.href= "./"

}

logoutBTN.addEventListener('click', handelClick)