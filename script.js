//getting the password id from the html
const password = document.getElementById('password')

// function to generate raqndom password
function randomPasswordGenerator() {
    //password characters
    let characters = 'ABCDEFJHIJKLMNOPQRSTUVWXYZabcdefjhijklmnopqrstuvwxyz0123456789!@#$%&'
    // creating an empty array to store the characters
    let id = '';
    //looping through all the characters and making sure there are less than 6 or equal to
    for(i = 0; i <= 6; i++){
        id += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    //displaying it in the input 
    password.value = id
}

//fuction for copying text
function copyPassword() {
    password.select();
    document.execCommand("copy")
}
