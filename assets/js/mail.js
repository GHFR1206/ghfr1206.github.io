function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    emailjs
        .send("service_xmwibja", "template_y5fquvp", params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("your message sent successfully")
            })
        .catch((err) => console.log(err));
}