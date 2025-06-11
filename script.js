function handleSubmit(e) {
  e.preventDefault();
  const emailInput = document.querySelector("input[type='email']");
  const email = emailInput ? emailInput.value : "justinh@wcspropertygroup.com";
  const status = mode === "subscribe" ? "Subscribed" : "Unsubscribed";

  fetch("YOUR_WEB_APP_URL", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `email=${encodeURIComponent(email)}&status=${status}`,
  })
    .then((res) => res.text())
    .then((resText) => {
      alert(`${status} successfully!`);
      if (emailInput) emailInput.value = "";
    })
    .catch((err) => alert("There was an error. Try again."));
}
