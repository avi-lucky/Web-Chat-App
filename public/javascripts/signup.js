// SignUp User
function signUp() {
    const name = document.getElementById("name").value  
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirmPassword").value
    axios.post("/users", {
     name: name,
     email: email,
	 password: password,
	 confirmPassword: confirmPassword
  })
  .then(function (response) {
    console.log(response);
    console.log(response.data)
    location.replace('http://localhost:3000/')
  })
  .catch(function (error) {
    console.log(error);
  })
}