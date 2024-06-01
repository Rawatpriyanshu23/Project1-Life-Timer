// script.js
function startTimer() {
  const dob = document.getElementById('dob').value;
  if (!dob) {
      alert('Please enter your date of birth');
      return;
  }

  document.querySelector('.input-container').classList.add('hide');
  document.querySelector('.time-container').classList.add('show');

  function updateTimer() {
      const now = new Date();
      const birthDate = new Date(dob);

      const diff = now - birthDate;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById('years').textContent = years;
      document.getElementById('months').textContent = months;
      document.getElementById('days').textContent = days;
      document.getElementById('hours').textContent = hours;
      document.getElementById('minutes').textContent = minutes;
      document.getElementById('seconds').textContent = seconds;
  }

  setInterval(updateTimer, 1000);
}
