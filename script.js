const rightPanel = document.getElementById("right-panel");

let mode = "subscribe";

function renderForm() {
  rightPanel.innerHTML = `
    <span class="close" onclick="alert('Closed')">&times;</span>
    ${
      mode === "subscribe"
        ? `<h2>Subscribe to our Newsletter</h2>
           <p>Stay updated with our latest news and offers.</p>
           <form onsubmit="handleSubmit(event)">
             <div class="email-field">
               <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="email icon" />
               <input type="email" placeholder="Your email" required />
             </div>
             <button type="submit">Subscribe</button>
           </form>
           <div class="help">
             Want to unsubscribe? <button onclick="switchMode()">Click here</button>
           </div>`
        : `<h2>Unsubscribe from Emails</h2>
           <p>You’ll stop receiving email updates from us.</p>
           <form onsubmit="handleSubmit(event)">
             <label>
               <input type="checkbox" required />
               I confirm I want to unsubscribe
             </label>
             <button type="submit">Unsubscribe</button>
           </form>
           <div class="help">
             Need help? <a href="#">Contact Support</a><br/>
             Want to resubscribe? <button onclick="switchMode()">Click here</button>
           </div>`
    }
  `;
}

function handleSubmit(e) {
  e.preventDefault();
  alert(`${mode === "subscribe" ? "Subscribed" : "Unsubscribed"} successfully!`);
}

function switchMode() {
  mode = mode === "subscribe" ? "unsubscribe" : "subscribe";
  renderForm();
}

renderForm();
