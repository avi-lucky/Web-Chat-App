// List All Friends
axios.get('/friends', {
        headers: {
            Authorization: ('Bearer ', localStorage.getItem("token"))
        },
    })
    .then(function(response) {
        var friends = ''
        for (i = 0; i < response.data.length; i++) {
            id = response.data[i].email
            friends += `<div class="row-8">
      <button id="${id}" class="card" onclick="openClick(event)" value="${response.data[i].name}"><h3>${response.data[i].name}</h3></button>
      </div><br>`
        }
        document.getElementById('friends').innerHTML = friends
        document.getElementById('chatTitle').innerHTML = response.data[0].name
    })
    .catch(function(error) {
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

    // List All Chats
    axios.get('/chats', {
            headers: {
                Authorization: ('Bearer ', localStorage.getItem("token"))
            },
        })
        .then(function(response) {
            var chat = ''
            friendId = document.getElementsByClassName('active')[0].id
                // ownerId = document.getElementsByClassName('owner')[0].id
            for (i = 0; i < response.data.length; i++) {
                if (response.data[i].sender == "avikal@gmail.com" && response.data[i].receiver == friendId) {
                    chat += `<div class="chat-panel col-md-3 offset-md-9 chat-bubble chat-bubble--right" id=${i}><h4>${response.data[i].message}</h4></div>`
                } else if (response.data[i].sender == friendId && response.data[i].receiver == "avikal@gmail.com") {
                    chat += `<div class="chat-panel col-md-3 chat-bubble chat-bubble--left" id=${i}><h4>${response.data[i].message}</h4></div>`
                }
            }
            document.getElementById('messenger').innerHTML = chat
        })
        .catch(function(error) {
            console.log(error)
        });
}

// Create Chat
function chatUser() {
    const receiver = document.getElementsByClassName('active')[0].id
    console.log(receiver)
    const message = document.getElementById("message").value
    console.log(message)
    axios.post('/chats', {
            friend: receiver,
            message: message
        }, {
            headers: {
                Authorization: ('Bearer ', localStorage.getItem("token"))
            }
        })
        .then(function(response) {
            console.log(response)
            console.log(response.data)
        })
        .catch(function(error) {
            console.log(error);
        })
}



// Logout User
function logOut() {
    console.log(localStorage.getItem("token"))
    axios.post('/users/logout', {}, {
        headers: {
            Authorization: ('Bearer ', localStorage.getItem("token"))
        }
    }).then((response) => {
        console.log("Logged Out")
        localStorage.removeItem("token");
        location.replace('http://localhost:3000')
    }).catch((error) => {
        console.log(error)
        console.log(localStorage.getItem("token"))
    })
}