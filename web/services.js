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
function load_test(){
  var i;
  
  i=1;

  var table = document.getElementById("myTable");
  var user = firebase.auth().currentUser.uid;
  var starCountRef = firebase.database().ref('Orders_uid/'+user);
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = "Order No";
  cell2.innerHTML = "Crop";
  cell3.innerHTML = "Quantity(Quintol)";
  cell4.innerHTML = "Price";
  starCountRef.on('value', (snapshot) => {
    snapshot.forEach(function(data){
     
      data.forEach(function(newVal){
       
        var row = table.insertRow(i);
        i++;
        var j;
        j=0;
        var cell1 = row.insertCell(j);
            cell1.innerHTML = newVal.val();
        j++;
        var starCountRef = firebase.database().ref('Orders/' + newVal.val());
        starCountRef.on('value', (data3) => {
          data3.forEach(function(data2)
          { 
            var cell1 = row.insertCell(j);
            cell1.innerHTML = data2.val();
            j++;
          }
          );
          
             });
       } );
    }
    );
    
       });
}
function post_order(){
  firebase.database().ref('Chats/new').set({
		Phone: 'hi'
	  });
}
function pos_order(){
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
   firebase.database().ref('Orders_City/' + data+'/'+OrderNo).set({
		OrderID: OrderNo,
		User: user
	  });
      });
  firebase.database().ref('Orders_uid/'+user+'/'+OrderNo).set({
    Order_Id: OrderNo
  }

  );
 window.alert("Your Order is Succesfully Placed:- "+OrderNo);
}

