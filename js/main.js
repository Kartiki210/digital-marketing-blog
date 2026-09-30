document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (menu) menu.addEventListener("click", () => nav.classList.toggle("open"));

  const themeBtn = document.querySelector("#themeBtn");
  if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark");
  if (themeBtn) themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });

  document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      document.querySelectorAll("#allPosts .post-card").forEach(card => {
        card.style.display = filter === "all" || card.dataset.category === filter ? "" : "none";
      });
    });
  });

  const newsletter = document.querySelector("#newsletterForm");
  if (newsletter) newsletter.addEventListener("submit", e => {
    e.preventDefault();
    const msg = document.querySelector("#formMsg");
    msg.textContent = "You're subscribed! Thanks for joining Digital Daily.";
    newsletter.reset();
  });

  const contact = document.querySelector("#contactForm");
  if (contact) contact.addEventListener("submit", e => {
    e.preventDefault();
    document.querySelector("#contactMsg").textContent = "Thanks! Your message has been received (demo form).";
    contact.reset();
  });
});
