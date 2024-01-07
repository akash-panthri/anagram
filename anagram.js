//First input 
const firs = $("#first");


//Second input 
const secon = $("#second");
//Result area
const resultcontainer = $("#resultcontainer");
//Attaching click function to button
$("button#buut").click(function () {
    //Value of first input area
    var first = firs.val();
    //Value of second input area
  var second = secon.val();
//Spliting characters from value and maing them Array
  var f1 = first.split("");
  var s1 = second.split("");

  //Sorting value
  var f2 = f1.sort();
  var s2 = s1.sort();

  //Converting Array back to string
  var f3 = f2.toString();
  var s3 = s2.toString();

  if (f3 == s3) {
   //To place text within element
    resultcontainer.text("Yes, the words are Anagram");

    // Removing the class
    resultcontainer.removeClass("warning");
    // Setting the class
    resultcontainer.addClass("success");
  } else {
   
    resultcontainer.text("No, the words are not Anagram");

    
    resultcontainer.removeClass("success");
    resultcontainer.addClass("warning");
  }
  

});

function checkInputs() {
    var allInputsFilled = true;

    // Iterate through each input with the class 'check-empty'
    $(".inputarea").each(function () {
      if ($(this).val().trim() === "") {
        allInputsFilled = false;
        return false; // exit the loop if any input is empty
      }
    });

    // Enable or disable the button based on the result
    $("button#buut").prop("disabled", !allInputsFilled);
  }

  // Call the function on input change
  $(".inputarea").on("input", checkInputs);

  // Call the function on page load to initialize the button state
  checkInputs();
