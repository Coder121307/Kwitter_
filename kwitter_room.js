var firebaseConfig = {
  apiKey: "AIzaSyD_Myt_xMCkoYg4qxPHgJ1Clhggs5c8658",
  authDomain: "kwitter-3328f.firebaseapp.com",
  databaseURL: "https://kwitter-3328f-default-rtdb.firebaseio.com",
  projectId: "kwitter-3328f",
  storageBucket: "kwitter-3328f.appspot.com",
  messagingSenderId: "81311935271",
  appId: "1:81311935271:web:0a1657be954182312ad702"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + username + "!!!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name -" + Room_names);

      row = "<div id='+ Room_names' class='room_name' onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      
      document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();

function addRoom() {
 room_name = document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({
   purpose: "adding user"
 });

 localStorage.setItem("room_name", room_name );

 window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
  console.log(name);

  localStorage.setItem("room_name", name);

  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");

  localStorage.removeItem("room_name");

  window.location = "index.html";
}