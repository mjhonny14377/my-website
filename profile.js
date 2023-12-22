 function sendEmail(){
      Email.send({
          SecureToken:"8f6ace82-8d7d-473c-8d08-1608a84373c7",
          To : 'mjhonny14377@gmail.com',
          From : "mjhonny14377@gmail.com",
          Subject : "New contact for enquiry",
          Body : "Name: "+ document.getElementById("name").value +
           "<br> Email: "+ document.getElementById("email").value +
           "<br> phone: "+ document.getElementById("phone").value +
           "<br> Message: "+ document.getElementById("message").value 
      }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Your message sent successfully!",
                icon: "success"
              });

        }
      }
    );

    

}

document.querySelector('button').addEventListener("submit",(e) => {
    e.preventDefault();

    sendEmail();



});