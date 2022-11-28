//Gets the header.
var headerContent = document.getElementById('header-content');

//Displays the header.
headerContent.innerHTML = "Generate a password!";

function generatePassword() {
    //Declaring Variables

    //This will be the output string.
    let output = "";
    //This is the character set used.
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    //This is the length of the password. (Between 8-12).
    var pwLength = Math.ceil(7 + (Math.random() * 5));

    /*
        For loop for adding new characters to the output
        variable as long as the length is under pwLength's.
    */
    for (var i = 0; i < pwLength; i++) {
        //Resets output when loop starts over.
        if (i == 0) {
            output = "";
        }

        //Selects random character from charset.
        var ranCharset = Math.floor(Math.random() * charset.length); 

        //Adds ranCharset to the output.
        output = output + charset.charAt(ranCharset);
    }

    //This displays the finished password on screen, only when the for loop has finished.
    if (i == pwLength) {
        document.getElementById("password").innerHTML = output;
    }
}




