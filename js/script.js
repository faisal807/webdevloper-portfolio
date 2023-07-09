function sendEmail(){
    sendEmail.send({
        Host: "smtp.gmail.com",
        Username :"webobd5@gmail.com",
        Password: "@Iamcute",
        To: 'fa78658@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry",
        Body: "Name:" + document.getElementById("name").value
        +"<br> Email: " + document.getElementById("email").value
        +"<br> Message: " + document.getElementById("message").value

    }).then(function (message) {
        alert("Message sent successfully")
    });
}