//creates new account and validates if user already exists in database
function signup() {
  //ajax call used
  $.ajax({
    url: '/signup',
    type: 'post',
    data: {
      FirstName: document.getElementById('fname').value,
      LastName: document.getElementById('lname').value,
      UserName: document.getElementById('uname').value,
      Password: document.getElementById('password').value,
      Country: document.getElementById('country').value,
      Gender: document.getElementById('gender').value,
      Phone: document.getElementById('phone').value
    },
    error: function(err) {
      alert("Error");
    },
    success: function(data) {
      if (data.code == 11000) {
        alert("User Already Exists!!!!");
        window.location.replace('/signup.html');
      } else if (data == "Form Fields are Empty") {
        alert("Please fill out all the fields!!");
      } else {
        alert("Successfully Registered!!");
        window.location.replace('/index.html');
      }
    }
  });
}
