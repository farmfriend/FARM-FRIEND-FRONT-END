
const database = firebase.database();
function test(){

  var name = document.getElementById("password_field").value;
  var email = document.getElementById("email_field").value;
  firebase.database().ref('users/' + email).set({
      username: name
    });
    
  window.alert("jai shankar");
}
