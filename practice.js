var firebaseConfig = {
    apiKey: "AIzaSyD_Myt_xMCkoYg4qxPHgJ1Clhggs5c8658",
    authDomain: "kwitter-3328f.firebaseapp.com",
    databaseURL:"https://kwitter-3328f-default-rtdb.firebaseio.com/",
    projectId: "kwitter-3328f",
    storageBucket: "kwitter-3328f.appspot.com",
    messagingSenderId: "81311935271",
    appId: "1:81311935271:web:0a1657be954182312ad702"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    User_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(User_name).update({
        purpose:"adding user"
    });

}