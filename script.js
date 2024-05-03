function checkVowels() {
    var text = document.getElementById("input_text").value;
    var vowelCount = 0;

// chagne the text to lowercase so that isvowel char matches it
    text = text.toLowerCase()

    for( var i = 0 ; i < text.length; i++){

        var char = text.charAt(i);
        if(isvowel(char)){
            vowelCount++
        }
    }

    var result = document.getElementById("Result")
    //result.textContent = "Total vowels: " + vowelCount;
    result.textContent = `Total Count: ${vowelCount}`
}


function isvowel(char){
    var vowels = ["a","e","i","o","u"]
    return vowels.includes(char)
}