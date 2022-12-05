var password;
var pass1 = "Canada!004";
password = prompt("Enter Password", " ");
if (password == pass1) alert("Correct Password! Click OK to Enter!");
else {
  alert(
    "The password you've entered does not match. Please refresh the page to try again."
  );
}

var password;
var pass2 = "Canada!004";
password = prompt("Enter Password", " ");
if (password == pass2) alert("Correct Password! Click OK to Enter!");
else {
  alert(
    "The password you've entered does not match. Please refresh the page to try again. (attempt 2)"
  );
}

var password;
var pass3 = "Canada!004";
password = prompt("Enter Password", " ");
if (password == pass3) alert("Correct Password! Click OK to Enter!");
else {
  alert(
    "The password you've entered does not match. Please refresh the page to try again. (attempt 3)"
  );
}

var password;
var pass4 = "Canada!004";
password = prompt("Enter Password", " ");
if (password == pass4) alert("Correct Password! Click OK to Enter!");
else {
  alert(
    "You've reached the number of attempts that you can try.<br/>You will be redirected to the main page."
  );
  window.location = "https://jscolbe.github.io/portfolio/index.html";
}
