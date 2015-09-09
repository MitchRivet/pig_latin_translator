var pigLatin = function(string) {

  var lowerString = string.toLowerCase();
  var wordArray = lowerString.split(" ");

  var pigLatinString = "";
  var vowelArray = ["a", "e", "i", "o", "u"];
  var consonantArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w",
  "x", "y", "z"];

  wordArray.forEach(function(word) {


    var letterArray = word.split("");

    if (consonantArray.indexOf(word) !== -1 || vowelArray.indexOf(word) !== -1)
    {
      var newWord = word;
    }

    else if (vowelArray.indexOf(word.charAt(0)) != -1)
    {
      // console.log(word.charAt(0));
      var newWord = (word.concat("ay"));
    }

    else if (word.substr(0, 2) === "qu")
    {
      word += word.charAt(0) + word.charAt(1) + "ay";
      var newWord = word.replace((word.substr(0,2)), "");
    }

    else if (consonantArray.indexOf(letterArray[0]) != -1 && consonantArray.indexOf(letterArray[1]) != -1)
    {
      word += word.charAt(0) + word.charAt(1) + "ay";
      var newWord = word.replace((word.substr(0,2)), "");
    }

    else if (consonantArray.indexOf(word.charAt(0)) != -1)
    {
      // console.log(word.charAt(0));
      word += word.charAt(0) + "ay";
      var newWord = word.replace((word.charAt(0)), "");
    }

    pigLatinString += newWord + " ";

    });

  var finalString = pigLatinString.trim();

  return finalString;

};

$(document).ready(function() {
    $("form#translator").submit(function(event) {
        var string = $("input#string").val();
        var result = pigLatin(string);

        $(".result").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
