document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || email === "" || message === "") {
    alert("All fields are required.");
    e.preventDefault();
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    e.preventDefault();
    return;
  }

  if (message.length < 20) {
    alert("Message must be at least 20 characters long.");
    e.preventDefault();
    return;
  }

  alert("Message sent successfully!");
});
