 
 const form = document.getElementById("loginForm");
 const usernameInput = document.getElementById("username");
 const passwordInput = document.getElementById("password");

 form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === "" || password === "") {
      console.log("Заповніть поля");
      return;
    }

    console.log(`Username: ${username}, Password: ${password}`);
    form.reset();
  });

  usernameInput.addEventListener("input", (event) => {
    console.log(`Введені символи: ${event.target.value}`);
  });

  passwordInput.addEventListener("input", (event) => {
    console.log(`Введені символи: ${event.target.value}`);
  });
