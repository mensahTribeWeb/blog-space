// fetch post from the scrimba api blog

fetch("//apis.scrimba.com/jsonplaceholder/posts")
.then(res => res.json())
.then(data => {
  const postsArr=data.slice(0, 5)
  let html =""
  for(let post of postsArr) {
    html +=
     `
     <h3>${post.title}</h3>
    <p>${post.body}</p>
    <hr/>

    `
  }
    document.getElementById("blog-list").innerHTML = html
    console.log(postsArr)
})

//button event listener

document.getElementById("form").addEventListener("submit", f)

const f = () => {
  f.preventDefault()
  const postTitle = document.getElementById("post-title").value
  const postBody = document.getElementById("post-body").value
  const data = {
    title: postTitle,
    body: postBody
  }
  console.log(data)
}

//add an option object via fetch api, POST

fetch("url", {
  method: "POST",
  body: JSON.stringify(
    {
      title: "Buy Milk",
      completed: false
  
    }),
    headers: {
      "Content-Type": "application/json"
    }
    .then(res =>res.json())
    .then(data => console.log(data))
})