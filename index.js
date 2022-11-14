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