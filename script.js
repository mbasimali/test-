const user = [
    {name: "Sharukh", accountNumber: 1234, balance: 400, pinNumber: 0000}, 
    {name:"Ashir", accountNumber: 5678, balance: 200, pinNumber:1122}];

// login password
let currentUser;
let currentUserIndex;


function login(accountNumber, pinNumber){
    var accNo = document.getElementById("accno");
    var pin = document.getElementById("pin");
    for(let i = 0; i < user.length; i++)
    {
        if (user[i].accountNumber === accNo && user[i].pinNumber === pin) {
            window.location.replace("home.html");
            console.log("correct");
        } else {
            alert("Incorrect credentials");
        }
    }
}
// login password