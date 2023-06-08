let posts =[];
let btnAddPost=document.querySelector('#addPost');

btnAddPost.addEventListener('click', function () {

    let postTitle = document.querySelector('#title').value;
    let postImage = document.querySelector('#image').value;
    let postDescription = document.querySelector('#description').value;
    let postContent=document.querySelector('#content').value;
    let postAuthor=document.querySelector('#author').value;
    
    let post = {
        id:posts.length+1,
        title:postTitle,
        author:postAuthor,
        image:postImage,
        description:postDescription,
        content:postContent,
        date:new Date(),   
    }
    posts.push(post)
//Add objects in array posts to table
let displayPosts=document.querySelector('#display');

posts.forEach((posts)=>{
displayPosts.innerHTML +=
`
<tr>
<td>${posts.title}}</td>
<td>${posts.image}</td>
<td>${posts.author}</td>
<td>${posts.description}</td>
<td></td>
<td>${posts.date}</td>
<td><div id="buttons"><button id="edtBtn">Edit</button><button id="dltBtn">Delete</button></div></td>
</tr>
`
});
});

let editBtn=document.querySelector('#edtBtn');
let deleteBtn=document.querySelector('#dltBtn');

editBtn.addEventListener('click',function(){

})
deleteBtn.addEventListener('click',function(){
    
})
