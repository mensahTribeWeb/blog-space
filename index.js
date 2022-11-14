//global variables
let postsArray = []

const titleInput = document.getElementById("post-title")
const bodyInput = document.getElementById("post-body")

//render function update the DOM
function renderPosts() {
  let html = "";

  for(let post of postsArray) {
    html += `
              <h3>${post.title}</h3>
              <p>${post.body}</p>
              <hr/>
             `
    }
    document.getElementById("blog-list").innerHTML = html
}

// fetch post from the scrimba api blog getting data and updating the DOM

fetch("//apis.scrimba.com/jsonplaceholder/posts")
  .then(res => res.json())
  .then(data => {
    postsArray = data.slice(0, 5)
    renderPosts()
  })

//button event listener

document.getElementById("blog-form").addEventListener("submit", function(f) {
  f.preventDefault()
  
  const postTitle = titleInput.value
  const postBody = bodyInput.value
  const data = {
    title: postTitle,
    body: postBody
  }


//add an option object via fetch api, POST
const options = {
  method: "POST",
  body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }
//adding new post
fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then(res => res.json())
    .then(post => {
     postsArray.unshift(post)
     renderPosts()
     titleInput.value = ""
     bodyInput.value = ""
    })
  })