document.getElementById('emailInput').addEventListener('input', function() {
    validateEmail(this.value);
  });

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validationResult = document.getElementById('validationResult');

    if (emailRegex.test(email)) {
      validationResult.textContent = 'Valid email address';
      validationResult.style.color = 'green';
    } else {
      validationResult.textContent = 'Invalid email address';
      validationResult.style.color = 'red';
    }
  }

//   <label for="emailInput">Enter Email:</label>
//   <input type="text" id="emailInput" placeholder="example@example.com">
//   <p id="validationResult"></p>