var user = firebase.auth().currentUser;
var email_id = user.displayName;
document.getElementById("user_para").innerHTML = email_id;
function update(){
  window.alert("Ho gaya Bhai");
}
