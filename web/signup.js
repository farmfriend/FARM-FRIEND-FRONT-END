firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("signup_div").style.display = "block";

    var user = firebase.auth().currentUser;

    if(user != null){
        var userName = document.getElementById("nam").value;
        user.updateProfile({
  displayName: userName
}).then(function() {
  window.alert("Signup Succesful. Now redirecting");
  firebase.auth().signOut();
  window.location.replace("index.html");

}).catch(function(error) {
  window.alert("Error:- "+error.message);
});
      
      

    }

  } else {
    // No user is signed in.
    document.getElementById("signup_div").style.display = "block";
  }
});
function signup() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  // [START auth_signup_password]
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error:- "+ errorCode +"    " + errorMessage);
      // ..
    });
  // [END auth_signup_password]
}
