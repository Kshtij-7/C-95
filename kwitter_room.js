/*var firebaseConfig = {
      apiKey: "AIzaSyCkvxA7TnTBO3Nkv_7JgOH_eRHGEkdU5o0",
      authDomain: "kwitter-e004f.firebaseapp.com",
      databaseURL: "https://kwitter-e004f-default-rtdb.firebaseio.com",
      projectId: "kwitter-e004f",
      storageBucket: "kwitter-e004f.appspot.com",
      messagingSenderId: "628047925960",
      appId: "1:628047925960:web:a5904b57e48cd8e5000bfd",
      measurementId: "G-6C5SFXBD0D"
};*/

firebase.initializeApp({
      apiKey: "AIzaSyBJQUK9h_HacqbDI4RIWmbV4q_pdnMjh_o",
      authDomain: "kwitter2-46e5f.firebaseapp.com",
      databaseURL: "https://kwitter2-46e5f-default-rtdb.firebaseio.com",
      projectId: "kwitter2-46e5f",
      storageBucket: "kwitter2-46e5f.appspot.com",
      messagingSenderId: "722447698421",
      appId: "1:722447698421:web:e7dd58ff68b149e39e38bc",
      measurementId: "G-8T6GL4V4QB"
});

var username = localStorage.getItem("Username")
document.getElementById("welcome").innerHTML = `Welcome ${username}!`

function createRoom() {
      roomname = document.getElementById("roomname").value;
    //  document.getElementById("roomname").innerHTML = ""
      firebase.database().ref("/").child(roomname).update({
            purpose: "adding room name"
      });
      localStorage.setItem("roomname", roomname);
      //window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) 
      {document.getElementById("roomlist").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
      {childKey  = childSnapshot.key;
       Room_names = childKey;
       room = `<div class='roomname' id=${Room_names} onclick='redirect(this.id)'>${Room_names}</div> <hr>`;
       document.getElementById("roomlist").innerHTML += room;
      });
      });
      }
getData();


function logout() {
      localStorage.removeItem("Username") ;
      localStorage.removeItem("Room") ;
      window.location = "index.html";
}
function redirect(roomName){
      window.location = "kwitter_page.html"
      localStorage.setItem("Room", roomName);
}