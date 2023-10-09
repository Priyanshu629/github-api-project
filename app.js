
let search = document.getElementById("search");
let username=document.getElementById('username')



search.addEventListener("click", () => {

  let p = fetch(`https://api.github.com/users/${username.value}`, {
    method: "GET",
  });

 

  p.then((response) =>  response.json())
    .then((data) => {
      console.log(data);

      
   
      if(! data.name  ){
            data.name=''
           
      }
      if(!data.bio){
        data.bio=''
      }
      if(!data.location){
        data.location=''
      }
      let card=document.querySelector('.card')
      let url=`https://github.com/${username.value}`
      let details=` <img src="${data.avatar_url}" alt="" id="img"> 
     
      <h1 id="name">${data.name}</h1>

      <p id="bio">${data.bio}</p>

      <span id="location">${data.location}</span>

      <div id="info">
        <span id="followers">${data.followers} followers</span>
        <span id="following">${data.following} following</span>
        <span id="repos">${data.public_repos} repos</span>
      </div>

     <a href="${url}">Show More</a>
`
           card.style.display='block'
           card.innerHTML=details
    })
    .catch((err) =>{
      
        alert('not found')
      
      
      console.log(err)});
   
});