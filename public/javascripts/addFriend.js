// Add Friends
function addFriend() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value  
    axios.post("/friends", {
     name: name,
     email: email
    },{
    headers: {
      Authorization : ('Bearer ', localStorage.getItem("token"))
    }})
    .then(function (response) {
      console.log(response)
      console.log(response.data)
      location.replace("http://localhost:3000/index")
    })
    .catch(function (error) {
      console.log(error);
    });
  }