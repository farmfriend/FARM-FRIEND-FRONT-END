firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.displayName;
      document.getElementById("user_para").innerHTML = "Name : " + email_id;
    }

  } else {
  window.alert("Galat Baat login Karo");
  window.location.replace("index.html");
  }
});


function update(){
  window.alert("Ho gaya Bhai");
}
