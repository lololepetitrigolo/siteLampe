window.addEventListener("load", function () {
  function sendData() {
    var XHR = new XMLHttpRequest();

    // Liez l'objet FormData et l'élément form
    var FD = new FormData(form);

    var api_key = document.getElementById("api_key").value;
    var field1 = document.getElementById("field1").value;
    var field2 = document.getElementById("field2").value;
    var field3 = document.getElementById("field3").value;
    var field4 = document.getElementById("field4").value;
    var field5 = document.getElementById("field5").value;
    var url =
      "https://api.thingspeak.com/update?api_key=" +
      api_key +
      "&field1=" +
      field1 +
      "&field2=" +
      field2 +
      "&field3=" +
      field3 +
      "&field4=" +
      field4 +
      "&field5=" +
      field5;

    // Définissez ce qui se passe si la soumission s'est opérée avec succès
    XHR.addEventListener("load", function (event) {
      console.log(event.target.responseText);
      if (event.target.responseText == 0) {
        const chargement = document.getElementById("chargement");
        const bouton = document.getElementById("bouton");
        chargement.id = "chargementAnimer";
        bouton.id = "boutonAnimer";
      } else {
        const chargement = document.getElementById("chargementAnimer");
        const bouton = document.getElementById("boutonAnimer");
        chargement.id = "chargement";
        bouton.id = "bouton";
      }
    });

    console.log(url);

    // Configurez la requête
    XHR.open("GET", url);

    // Les données envoyées sont ce que l'utilisateur a mis dans le formulaire
    XHR.send(FD);
  }

  // Accédez à l'élément form …
  var form = document.getElementById("myForm");

  // … et prenez en charge l'événement submit.
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    sendData();
  });
});
