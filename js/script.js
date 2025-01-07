
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

  const Prenom = document.getElementById("Prenom").value;
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const telephone = document.getElementById("telephone").value;
    if (Prenom && nom && email && message && telephone) {
      document.getElementById("formResponse").textContent = "Merci pour votre message, " + nom + " !";
      this.reset();
    } else {
      document.getElementById("formResponse").textContent = "Veuillez remplir tous les champs.";
    }
  });