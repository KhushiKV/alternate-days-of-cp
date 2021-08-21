var firebaseConfig = {
    apiKey: "AIzaSyBRnVor3AVva1MCJrvKY6gMCeGX17c6nic",
    authDomain: "alternate-days-of-cp-eabcd.firebaseapp.com",
    projectId: "alternate-days-of-cp-eabcd",
    storageBucket: "alternate-days-of-cp-eabcd.appspot.com",
    messagingSenderId: "226869401306",
    appId: "1:226869401306:web:e7ef9730bdb168ef54b7e3",
    measurementId: "G-YSHBQDP19T"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  

  const ui = new firebaseui.auth.AuthUI(firebase.auth());

  const uiConfig = {
      callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl){
                    return false;
                }
      },
      signInFlow: 'popup',
      //signInSuccessUrl: '<url-to-redirect-to-on-success>',
      signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ]
  }

  document.addEventListener('DOMContentLoaded', function(){
      console.log("loaded")
      if(firebase.auth().currentUser){
          console.log(firebase.auth().currentUser)
      }
      ui.start('#signInDiv', uiConfig);
  document.getElementById('signOut').addEventListener('click', function(){
      firebase.auth().signOut()
  })
  })