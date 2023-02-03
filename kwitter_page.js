//YOUR FIREBASE LINKS
room_name = localStorage.getItem("Room");
user_name = localStorage.getItem("Username");
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

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
            document.getElementById("output").innerHTML = ""; 
            snapshot.forEach(function(childSnapshot) { 
                  childKey  = childSnapshot.key; 
                  childData = childSnapshot.val(); 
                  if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = `<h4> ${name1} <img class='user_tick' src='tick.png'></h4>`;
message_with_tag = `<h4 class='message'> ${message} </h4>`;
like_button=`<button class='btn btn-warning' id=${firebase_message_id} value=${like} onclick='updateLike(this.id)'>`;
span_with_tag = "<span class = 'glyphyicon glyphyicon-thumbs-up'>Like: "+ like + "</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
      
//End code
      } 
});  
}); 
}
getData();

function updateLike(message_id){
      console.log("clicked on like button - "+ message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes)+ 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}
function logout() {
      localStorage.removeItem("Username") ;
      localStorage.removeItem("Room") ;
      window.location = "index.html";
}