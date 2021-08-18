//YOUR FIREBASE LINKS
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

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref("room_name").push({
            Name:user_name,
            Message:msg,
            Like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
namewithtag = "<h4>" + Name + "<img class='user_tick' src='tick.png'></h4>";
messagewithtag = "<h4 class='message_h4'>" + message +"</h4>";
likebutton = "<button class='btn btn-warning' id="+ firebase_message_id +" value = "+like+"onclick = 'updateLike(this.id)'>";
var spanwithtag = "<span class='glyphicon glyphicon-thumbs-up'> like:"+like+"</span> </button> <hr>";
var row = namewithtag + messagewithtag + likebutton + spanwithtag;
document.getElementById("output").innerHTML = row; 
//End code
      } });  }); }
getData();


function updateLike(message_id){
      console.log("clicked on like button -" + message_id);
      var button_id = message_id;
      var likes =  document.getElementById(button_id).value;
      var updated_likes= Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            likes: updated_likes
      });
      
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");

      window.location = "index.html";   
}