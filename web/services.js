var OrderNo = new Date().getTime();
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var user = firebase.auth().currentUser.uid;

    if(user != null){
     
    }
  }
}); 
var loadFile = function(event) {
  var i;
  var fi = document.getElementById('files');
  window.alert(fi.files.length);
  var element = document.getElementById("new");
for (i = 0; i < fi.files.length; i++) {
  var tag = document.createElement("img");
  tag.src = URL.createObjectURL(event.target.files[i]);
  tag.classList.add("img_att");
  var storageRef = firebase.storage().ref(OrderNo+'/'+i+'.jpeg');
  var task = storageRef.put(event.target.files[i]);
  
  task.on('state_changed',
		 function progress(snapshot){
      var tag1 = document.createElement("img");
      tag1.src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fexplore%2Floading&psig=AOvVaw2KLmLQufOH1bryeZWZ4yCY&ust=1617765710351000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPj9gobV6O8CFQAAAAAdAAAAABAJ";
      tag1.classList.add("img_att2");

      element.appendChild(tag1);
			 var percentage = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
			 if(percentage==100){
				tag1.remove();
      }
			 
		 },
		 function complete(){
			 
		 }
		 );
  
  element.appendChild(tag);
}

  
};
function post_order(){
  var user = firebase.auth().currentUser.uid;
  var Crops = document.getElementById("crops").value;
  var Quantity = document.getElementById("quantity").value;
  var Price = document.getElementById("price").value;
  firebase.database().ref('Orders/' + OrderNo).set({
		Crops: Crops,
		Quantity : Quantity,
		Price: Price
	  });
  var starCountRef = firebase.database().ref('users/' + user+'/District');
   starCountRef.on('value', (snapshot) => {
   const data = snapshot.val();
   firebase.database().ref('Orders_City/' + data).set({
		OrderID: OrderNo,
		User: user
	  });
      });
  firebase.database().ref('Orders_uid/'+user).set({
    Order_Id: OrderNo
  }

  );
 window.alert("Your Order Is Succesfully Placed WIth Order No:- "+OrderNo);    
 location.reload();
}

