// SignIn User
function logIn() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    console.log(email)
    console.log(password)
    axios.post("/users/login", {
            email: email,
            password: password,
        })
        .then(function(response) {
            localStorage.setItem('token', response.data.token)
                // res.send( user, response.data.token )
            console.log(response);
            console.log(response.data.token)
            location.replace('http://localhost:3000/index')
        })
        .catch(function(error) {
            console.log(error);
        })
}

// Forgot Password
function submit() {
    const email = document.getElementById("email").value
    const newPassword = document.getElementById("newPassword").value
    const confirmPassword = document.getElementById("confirmPassword").value
    console.log(email)
    console.log(newPassword)
    console.log(confirmPassword)
    axios.patch("/users/forgot", {
            email: email,
            password: newPassword
        })
        .then(function(response) {
            console.log(response)
            console.log(response.data)
            location.replace('http://localhost:3000')
        })
        .catch(function(error) {
            console.log(error)
        })
}