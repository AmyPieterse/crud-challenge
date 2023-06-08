// let cards = document.getElementById("blogCards")



let blogsFeatured = [
    {
     id: 1,
     Image:"https://i.postimg.cc/3JmvW7SL/pexels-joshua-abner-3605015.jpg",
     Title: "Vans-Title",
     Author:"xxc T name",
     Description:"dummy text about item",
     Date:"DATE ELEMENT HERE",
     link:"https://www.marieclaire.co.uk/fashion/the-best-fashion-blogs-ever-69888"
     
    },
    {
     id: 2,
     Image:"https://i.postimg.cc/1zPcy4yc/outbean-fashion-blog.webp",
     Title: "Vans-Title",
     Author:"xxc T name",
     Description:"dummy text about item",
     Date:"DATE ELEMENT HERE",
     link:"https://www.fashionbeans.com/article/outdoor-clothing-trend-men/"
     
    },
    {
     id: 3,
     Image:"https://i.postimg.cc/26g18X4R/pexels-cottonbro-studio-5119201.jpg",
     Title: "Vans-Title",
     Author:"xxc T name",
     Description:"dummy text about item",
     Date:"DATE ELEMENT HERE",
     link:"https://grin.co/blog/outdoor-influencers-for-your-brand/"
     
    },


]

let cards = document.getElementById("blogCards")
blogsFeatured.forEach((post)=> {
  blogCards.innerHTML += `
  
        <div class="card">
          <img src="${post.Image}">
          <div class="card-body">
              <h5 class="card-title">${post.Title}</h5>
              <p class="card-text">${post.Description}</p>
              <p>${post.Author}</p>
              <p>${post.Date}</p>
              <button id="read-btn"onlcick="${post.link}">Read More</button>
          </div>
          </div>
  `
})

