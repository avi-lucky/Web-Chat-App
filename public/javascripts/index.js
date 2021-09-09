// List All Friends
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
      friends += `<div class="row-8">
      <button id="${id}" class="card" onclick="openClick(event)" value="${response.data[i].name}"><h4>${response.data[i].name}</h4></button>
      </div><br>`
    }
    document.getElementById('friends').innerHTML = friends
    document.getElementById('chatTitle').innerHTML = response.data[0].name
  })
  .catch(function (error) {
    console.log(error)
  });

  // Button Active Function
  function openClick(e) {
    var cards = document.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
            cards[i].className = cards[i].className.replace(" active", "");
        }
    e.currentTarget.className += " active";
    document.getElementById('chatTitle').innerHTML = e.currentTarget.getAttribute('value')
    // console.log(e.currentTarget.getAttribute('value').split(" ").join(""))
}


















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