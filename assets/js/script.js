var headerContent = document.getElementById('header-content');

let passwordGenerated = false;

if (passwordGenerated == false) {
    headerContent.innerHTML = "Generate a password!";
    console.log("working");
}

function generatePassword() {
    //Declaring Variables

    //This will be the output string.
    let output = '';
    //This is the character set used.
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    //This is the length of the password. (Between 8-12).
    var length = Math.ceil(8 + (Math.random() * 4));
    console.log(length);

}

