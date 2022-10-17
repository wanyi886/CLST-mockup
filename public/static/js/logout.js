
const logoutBTN = document.getElementById('logout-btn');

const handelClick = async () => {
    console.log("lol")
    const response = await fetch('/api/logout', {
        method: "DELETE", // customer uses POST to log out user
        // headers: { "Content-Type": "application/json"},
        // body: JSON.stringify({
            
        // })
    });
    console.log("hi");


    if (response.ok) {
        console.log("in response if")
        // sessionStorage.removeItem("userId");
        alert("Logout successfully!")
    }
    
    location.href= "./"

}

logoutBTN.addEventListener('click', handelClick)