import { gitApiFetch } from "./api.mjs";
import { openLibraryFetch } from "./api.mjs";

export async function searchInput() {
const searchUserInput = document.getElementById("search");

searchUserInput.addEventListener("input", (e)=> {

  const searchTerm = e.target.value;  

  const data =  gitApiFetch(searchTerm);

  console.log(data); // for testing 

  displaySearchResults(data);
  
});

} ; 


function displaySearchResults(data){
//Here comes the html that will be inserted into the DOM
/* const resultsContainer = document.getElementById("search-bar-results");
 data.forEach(singleResult=> {
    const singleResultWrapper = document.createElement("div");
    const 


 }); */ 
 console.log(data)   //for testing
}



