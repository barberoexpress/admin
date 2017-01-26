// funcion de login
(function() {


  const textEmaile = document.getElementById('inputEmail');
  const textPassword = document.getElementById('inputPassword');
  const btnLogIn = document.getElementById('btnLogIn');
  const btnLogUp = document.getElementById('botnLogUp');
  const btnLogout = document.getElementById('botnLogOut');

  btnLogIn.addEventListener('click', e => {
    const email = textEmaile.value;
    const password = textPassword.value;

    console.log("entro");
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email,password);
    //window.location.href("indexA.html");
    console.log(promise);
    promise.catch(e => console.log(e.message));
  });


  /*
  btnLogUp.addEventListener('click',e => {
    //email y password
    const email = textEmaile.value;
    const password = textpassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email,password);

    promise.catch(e => console.log(e.message));
  })
  */
}());
