
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
        				window.alert('Upload Photo');
        			});
          var fileButton = document.getElementById('photo');
      fileButton.addEventListener('change', function(e){
     	 var file = e.target.files[0];
     	 var storageRef = firebase.storage().ref(user_id+'.jpeg');
     	 var task = storageRef.put(file);
       
      });

    }

  } else {
  window.alert("Galat Baat login Karo");
  window.location.replace("index.html");
  }
});
