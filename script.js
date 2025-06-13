function checker() {
    let word = document.getElementById("inputText").value.toLowerCase();
    let reversedWord = word.split("").reverse().join("");
    let show = document.getElementById("show");

    if (word == "") {
        alert("Please enter a word to check.");
    } else {
        if (word === reversedWord) {
            show.innerHTML = "The word is a palindrome.";
        } else {
            show.innerHTML = "The word is not a palindrome.";
        }
    }
}