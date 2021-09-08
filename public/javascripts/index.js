// axios.get('/tasks', {
//     headers: {
//       Authorization: ('Bearer ', localStorage.getItem("token"))
//     },
//   })
//   .then(function (response) {
//     console.log(response);
//     console.log(response.data)
//   })

// Logout User
function logOut() {
    console.log(localStorage.getItem("token"))
    axios.post('/users/logout', {
    },
      {
      headers: {
        Authorization : ('Bearer ', localStorage.getItem("token"))
      }
    }).then((response) => {
      console.log("Logged Out")
      localStorage.removeItem("token");
      location.replace('http://localhost:3000')
    }).catch ((error) => {
      console.log(error)
      console.log(localStorage.getItem("token"))
    })
  }