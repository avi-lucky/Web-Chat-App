axios.get('/friends', {
    headers: {
      Authorization: ('Bearer ', localStorage.getItem("token"))
    },
  })
  .then(function (response) {
    var friends = ''
    for (i = 0; i < response.data.length; i++) 
    {
      id = response.data[i]._id
      console.log(id)
      friends += `<div class="row-8" id="${id}"><h4>${response.data[i].name}</h4></div>`
    }
    document.getElementById('friends').innerHTML = friends
  })
  .catch(function (error) {
    console.log(error)
  });

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