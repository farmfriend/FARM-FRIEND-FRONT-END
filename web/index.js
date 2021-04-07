firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("para_div").style.display = "block";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.displayName;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("para_div").style.display = "none";
  
  }
});
function log(){
  window.open("login.html","","toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,width=657");
}

function logout(){
    firebase.auth().signOut();
}
