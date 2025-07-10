// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// "Start Your Trial Now" button alert
const trialBtn = document.querySelector('.primary-btn');
if (trialBtn) {
  trialBtn.addEventListener('click', () => {
    alert('Your free trial has started! (Demo only)');
  });
}

// "Redeem" button alert
const redeemBtn = document.querySelector('.gift-section .secondary-btn');
if (redeemBtn) {
  redeemBtn.addEventListener('click', () => {
    alert('Redeem feature coming soon!');
  });
}

// Login form feedback (demo only)
const loginForm = document.querySelector('.login-section form');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = loginForm.username.value.trim();
    const password = loginForm.password.value.trim();
    if (username && password) {
      alert('Login successful! (Demo only)');
    } else {
      alert('Please enter both username and password.');
    }
  });
}