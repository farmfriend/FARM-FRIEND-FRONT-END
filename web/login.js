firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      window.close();

    }

  } else {
    // No user is signed in.
    document.getElementById("login_div").style.display = "block";

  }
});
function forgot(){
  var userEmail = document.getElementById("email_field").value;
  if(userEmail != "")
  {

    firebase.auth().sendPasswordResetEmail(userEmail)
    .then(() => {
     window.alert("Password Reset Email Sent.");
      // ..
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(errorMessage);
      // ..
    });
  }
  else{
    window.alert("Email is Empty");

  }
}
function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
