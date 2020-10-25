// TODO: add code here
window.addEventListener("load",function(){
   fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then( function(json) {
          //console.log(json);
          let container=document.getElementById("container");
         let count=document.getElementById("count");
            json.sort(function(a, b){return a.hoursInSpace-b.hoursInSpace});
            
                for(let i=0;i<json.length;i++){
                 count.innerHTML= `Total astronauts=${json.length}`;
                 container.innerHTML+=
                   `<div class="astronaut">
                   <div class="bio">
                   <h3>${json[i].firstName} ${json[i].lastName}</h3>
                   <ul>
                       <li id=hours>Hours in space: ${json[i].hoursInSpace}</li>
                       <li class="${json[i].active ? `green` : `` }">Active: ${json[i].active}</li>                        
                       <li>Skills: ${json[i].skills}</li>
                   </ul>
                }  
                 
                          
     });
    });
  });