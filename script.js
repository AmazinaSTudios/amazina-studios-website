// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Newsletter form — placeholder handling.
// Replace this with a real endpoint (ConvertKit, Mailchimp, Formspree, etc.)
// per the site README before launch.
const joinForm = document.getElementById('joinForm');
const joinNote = document.getElementById('joinNote');

joinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('emailInput').value.trim();
  if (!email) return;

  // TODO: wire this up to your email provider's API or form endpoint.
  console.log('Newsletter signup (not yet connected):', email);

  joinNote.textContent = "You're on the list — thank you! (Connect this form to your email provider — see README.)";
  joinForm.reset();
});
