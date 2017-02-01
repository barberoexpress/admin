const app = require('./app');
const config = require('./config')
var firebase = require("firebase");

firebase.initializeApp({
  serviceAccount: "path/to/serviceAccountCredentials.json",
  databaseURL: "https://databaseName.firebaseio.com"
});


app.listen(config.port , function (){
    console.log(`Aplicación corriendo en htpp://localhost:${config.port}`)
    console.log("Desarrollado por: Cristian Franco Bedoya, Santiago R. Alvarez Gomez");
    console.log("Franco Software 2016");
});
