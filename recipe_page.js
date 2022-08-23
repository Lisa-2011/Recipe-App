const firebaseConfig = {
      apiKey: "AIzaSyChS7SSN7Oj3TnUFQ1wvG8k6TUBSQvaZxg",
      authDomain: "recipe-app-5f8f2.firebaseapp.com",
      databaseURL:"https://recipe-app-5f8f2-default-rtdb.firebaseio.com",
      projectId: "recipe-app-5f8f2",
      storageBucket: "recipe-app-5f8f2.appspot.com",
      messagingSenderId: "304005821680",
      appId: "1:304005821680:web:928e52824bb499a536fe35",
      measurementId: "G-PM577RB0K3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send(){

      message = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:message,
            like:0
      })

      document.getElementById("message").value = "";

    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "login.html";

}
