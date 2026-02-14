import { gitApiFetch } from "./api.mjs";
import { openLibraryFetch } from "./api.mjs";

export async function searchInput() {
const searchUserInput = document.getElementById("search");

searchUserInput.addEventListener("input", async (e)=> {

  const searchTerm = e.target.value;  

  const data = await gitApiFetch(searchTerm);

  console.log(data); // for testing 

  displaySearchResults(data);
  
});

} ; 


function displaySearchResults(data){
//Here comes the html that will be inserted into the DOM
 const resultsContainer = document.getElementById("search-bar-results");
 resultsContainer.innerHTML = "" ; //cleaning search before looking for another term
 data.items.forEach(singleResult=> {
    const singleResultWrapper = document.createElement("div");
    const searchDescription = document.createElement("p");
    const userName = document.createElement("p");
    const repoUrl = document.createElement("p");

    searchDescription.innerHTML = singleResult.description;
    userName.innerHTML = singleResult.owner.login;
    repoUrl.innerHTML = singleResult.html_url;

    

    singleResultWrapper.appendChild(searchDescription);
    singleResultWrapper.appendChild(userName);
    singleResultWrapper.appendChild(repoUrl);

    resultsContainer.appendChild(singleResultWrapper);

    //adding styles to this results
    resultsContainer.className("bg-blue-200");

 }); 
 console.log(data)   //for testing
}



