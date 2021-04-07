
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var user = firebase.auth().currentUser;

    if(user != null){
      const storageRef = firebase.storage().ref();
    var user = firebase.auth().currentUser;
    var user_id = user.uid;
    		// [START storage_download_via_url]
        const storageRef1 = firebase.storage().ref();

        		// [START storage_download_via_url]
        		storageRef1.child(user_id+'.jpeg').getDownloadURL()
        			.then((url) => {
						document.getElementById("uploader").style.display = "none";
        				// This can be downloaded directly:
        				var xhr = new XMLHttpRequest();
        				xhr.responseType = 'blob';
        				xhr.onload = (event) => {
        					var blob = xhr.response;
        				};
        				xhr.open('GET', url);
        				xhr.send();

        				// Or inserted into an <img> element
        				var img = document.getElementById('myImg');
        				img.setAttribute('src', url);
        			})
        			.catch((error) => {
						img.setAttribute('src','https://i.stack.imgur.com/l60Hf.png');
        				window.alert('Upload Photo');
        			});
					var database = firebase.database();

					var starCountRef = firebase.database().ref('users/' + user_id+'/State');
					starCountRef.on('value', (snapshot) => {
						const data = snapshot.val();
						document.getElementById("State").value = data;
						console.log(data);
					  });
					  var starCountRef = firebase.database().ref('users/' + user_id+'/District');
					starCountRef.on('value', (snapshot) => {
						const data = snapshot.val();
						document.getElementById("District").value = data;
						console.log(data);
					  });
					  var starCountRef = firebase.database().ref('users/' + user_id+'/CityVill');
					starCountRef.on('value', (snapshot) => {
						const data = snapshot.val();
						document.getElementById("CityVIll").value = data;
						console.log(data);
					  });
					  var starCountRef = firebase.database().ref('users/' + user_id+'/Address');
					starCountRef.on('value', (snapshot) => {
						const data = snapshot.val();
						document.getElementById("Addr").value = data;
						console.log(data);
					  });
					  var starCountRef = firebase.database().ref('users/' + user_id+'/Mobile');
					  starCountRef.on('value', (snapshot) => {
						  const data = snapshot.val();
						  document.getElementById("Phone").value = data;
						  console.log(data);
						});
          
				var fileButton = document.getElementById('photo');
    
		fileButton.addEventListener('change', function(e){
     	 var file = e.target.files[0];
     	 var storageRef = firebase.storage().ref(user_id+'.jpeg');
     	 var task = storageRef.put(file);
		  document.getElementById("uploader").style.display = "block";
		 task.on('state_changed',
		 function progress(snapshot){
			 var percentage = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
			 uploader.value = percentage;
			 if(percentage==100){
				storageRef1.child(user_id+'.jpeg').getDownloadURL()
				.then((url) => {
					document.getElementById("uploader").style.display = "none";
					// This can be downloaded directly:
					var xhr = new XMLHttpRequest();
					xhr.responseType = 'blob';
					xhr.onload = (event) => {
						var blob = xhr.response;
					};
					xhr.open('GET', url);
					xhr.send();

					// Or inserted into an <img> element
					var img = document.getElementById('myImg');
					img.setAttribute('src', url);
				})
			 }
		 },
		 function complete(){
			 
		 }
		 );
      });

    }

  } else {
  window.alert("Galat Baat login Karo");
  window.location.replace("index.html");
  }
});

function updateData() {
	var state = document.getElementById("State").value;
	var district = document.getElementById("District").value;
	var city = document.getElementById("CityVIll").value;
	var addr = document.getElementById("Addr").value;
	var mob = document.getElementById("Phone").value;


	var user = firebase.auth().currentUser;
    var userId = user.uid;
	firebase.database().ref('users/' + userId).set({
		State: state,
		District: district,
		CityVill : city,
		Address: addr,
		Mobile: mob
	  });
	  window.alert(state+district+city+addr+mob);
	}
function logout(){
		firebase.auth().signOut();
	}