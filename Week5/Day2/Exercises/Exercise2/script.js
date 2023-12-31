  // Task 1: Retrieve the form and console.log it.
  const form = document.getElementById('myForm');
  console.log(form);

  // Task 2: Retrieve the inputs by their id and console.log them.
  const firstNameInput = document.getElementById('fname');
  const lastNameInput = document.getElementById('lname');
  console.log(firstNameInput, lastNameInput);

  // Task 3: Retrieve the inputs by their name attribute and console.log them.
  const firstNameByName = document.getElementsByName('firstname')[0];
  const lastNameByName = document.getElementsByName('lastname')[0];
  console.log(firstNameByName, lastNameByName);

  // Task 4: Form submission event listener
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get the values of the input tags
    const firstNameValue = firstNameInput.value;
    const lastNameValue = lastNameInput.value;

    // Make sure that the input values are not empty
    if (firstNameValue.trim() !== '' && lastNameValue.trim() !== '') {
      // Create an li per input value
      const firstNameLi = document.createElement('li');
      firstNameLi.textContent = `First Name: ${firstNameValue}`;

      const lastNameLi = document.createElement('li');
      lastNameLi.textContent = `Last Name: ${lastNameValue}`;

      // Append them to the <ul class="usersAnswer"></ul> below the form
      const usersAnswerList = document.querySelector('.usersAnswer');
      usersAnswerList.innerHTML = ''; // Clear previous entries
      usersAnswerList.appendChild(firstNameLi);
      usersAnswerList.appendChild(lastNameLi);
    }
  });