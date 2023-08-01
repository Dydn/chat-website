
const firebaseConfig = {
      apiKey: "AIzaSyCfGQDKw-wuiv6OnaZT4ke3CT1XHgE1Bd4",
      authDomain: "shrek-chat.firebaseapp.com",
      databaseURL: "https://shrek-chat-default-rtdb.firebaseio.com",
      projectId: "shrek-chat",
      storageBucket: "shrek-chat.appspot.com",
      messagingSenderId: "202660716363",
      appId: "1:202660716363:web:9c68c8e04424d1d18b92ce",
      measurementId: "G-0KLC3BV8HB"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function addroom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "chat_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}