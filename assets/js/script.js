var headerContent = document.getElementById('header-content');

let passwordGenerated = false;

if (passwordGenerated == false) {
    headerContent.innerHTML = "Generate a password!";
    console.log("working");
}

let output = "";

function generatePassword() {
    //Declaring Variables

    //This will be the output string.
    
    //This is the character set used.
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    //This is the length of the password. (Between 8-12).
    var pwLength = Math.ceil(7 + (Math.random() * 5));
    console.log(pwLength);

    for (var i = 0; i < pwLength; i++) {
        if (i == 0) {
            output = "";
        }
        var ranCharset = Math.floor(Math.random() * charset.length); 
        output = output + charset.charAt(ranCharset);
        console.log(output);
    }

    if (i == pwLength) {
        document.getElementById("password").innerHTML = output;
    }
}




