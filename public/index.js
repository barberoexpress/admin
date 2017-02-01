const app = require('./app');
const config = require('./config')
var firebase = require("firebase");

firebase.initializeApp({
  serviceAccount: "json/adminBarberoExpress-bd7661c38f23.json",
  databaseURL: "https://adminbarberoexpress-33fb4.firebaseio.com"
});

var ref = firebase.database().ref('node-client');
var messagesRef = ref.child('messages');

messagesRef.push({
  name: 'jalapeño',
  admin:'true',
  count: 1,
  text: 'text perros'
});

app.listen(config.port , function (){
    console.log(`Aplicación corriendo en htpp://localhost:${config.port}`)
    console.log("Desarrollado por: Cristian Franco Bedoya, Santiago R. Alvarez Gomez");
    console.log("Franco Software 2016");
});
