var headerContent = document.getElementById('header-content');

let passwordGenerated = false;

if (passwordGenerated == false) {
    headerContent.innerHTML = "Generate a password!";
    console.log("working");
}

function generatePassword() {
    //Declaring Variables

    //This will be the output string.
    let output = "";
    //This is the character set used.
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    //This is the length of the password. (Between 8-12).
    var pwLength = Math.ceil(7 + (Math.random() * 5));

    for (var i = 0; i < pwLength.length; i++) {
        //Random Charset Character
        var ranCharset = Math.floor(Math.random() * charset.length); 
        output = output + ranCharset;
        
    }
    
    console.log(pwLength);
    console.log(ranCharset);
    console.log(output);
    

}

