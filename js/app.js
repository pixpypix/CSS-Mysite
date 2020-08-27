var firebaseConfig = {
    apiKey: "AIzaSyBVsR-CZGfBtRQKT0YMJhbWtfdv9Z34gyI",
    authDomain: "webtest-82f25.firebaseapp.com",
    databaseURL: "https://webtest-82f25.firebaseio.com",
    projectId: "webtest-82f25",
    storageBucket: "webtest-82f25.appspot.com",
    messagingSenderId: "962983465328",
    appId: "1:962983465328:web:16490160c08f0b3a85bfb5",
    measurementId: "G-HJ72VW4BE2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var firebase = firebase.firestore();

const docRef = firestore.doc("samples/sandWitchData");
const outputheader = document.querySelector("#oheader");
const textfield = document.querySelector("#data")
const button = document.querySelector("#datasave")


button.addEventListener("click", function(){
  const texttosave = data.value;
  console.log("I am going to save " + texttosave + " to Firestore");

  docRef.set({
    hotdogstatus: texttosave
  }).then( function ( ){
    console.log('Success')
  }).catch(function(error) {
    console.log(error);
  })

})
