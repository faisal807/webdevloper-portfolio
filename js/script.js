function sendEmail() {
    Email.send({
      SecureToken:" a9f591dd-948e-4b9c-91a3-5fe9c8539bc1",
      To: 'webobd5@gmail.com',
      From: document.getElementById("email").value,
      Subject: "Sending Email using javascript",
      Body: "Name:" + document.getElementById("name").value
      +"<br> Email: " + document.getElementById("email").value
      +"<br> Message: " + document.getElementById("message").value
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }