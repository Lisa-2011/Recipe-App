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

localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function addRoom(){

    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update
    ({
          purpose:"adding room name"
    })
    localStorage.setItem("room_name", room_name);

    window.location = "recipe_page.html"

}


function getData() {firebase.database().ref("/").on('value',

function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
//Start code


console.log("room_name - " + Room_names);
row = "<div class = 'room_name' id = "+ Room_names + "onclick = 'redirectToRoomName(this.id)'>#"+ Room_names + "</div> <hr>"
document.getElementById("output").innerHTML += row


//End code
});});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "recipe_page.html"
}

function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location = "login.html";

}