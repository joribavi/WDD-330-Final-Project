import { gitApiFetch } from "./api.mjs";
import { openLibraryFetch } from "./api.mjs";

export async function searchInput() {

const searchOptionChosen = document.getElementById("search-Bar-Options");

const searchUserInput = document.getElementById("search");

let currentSearch = searchOptionChosen.value; //default 


 searchOptionChosen.addEventListener("change", async (e)=> {

    currentSearch = e.target.value;
 });

searchUserInput.addEventListener("input", async (e) => {
 
 const searchTerm = e.target.value;

 if(!searchTerm) {
  return; //return if there is no user input
 }

 try {

  let data;

  if(currentSearch === "github"){

      console.log("user chose Github") //testing code
  
    
     data = await gitApiFetch(searchTerm);

     console.log(data); // for testing 

     displaySearchResults(data);


    
    }

    
    else if(currentSearch === "books") {

     console.log("user chose books"); //for testing  
      
     data = await openLibraryFetch(searchTerm);
      console.log(data); //for testing
    
      displayBookResults(data)

     
    } 
    else {
      return;
    }

   

  } catch (error) {
    console.log("There is a problem by displaying Data", error)
  }
 });


}



function displaySearchResults(data){
//Here comes the html that will be inserted into the DOM
 const resultsContainer = document.getElementById("search-bar-results");
 resultsContainer.innerHTML = "" ; //cleaning search before looking for another term
 data.items.forEach(singleResult=> {
    const singleResultWrapper = document.createElement("div");
    const searchDescription = document.createElement("p");
    const userName = document.createElement("p");
    const repoUrl = document.createElement("p");

    searchDescription.innerHTML = `<strong>Description:</strong> ${singleResult.description}`;
    userName.innerHTML = `<strong>Author:</strong> ${singleResult.owner.login}`;
    repoUrl.innerHTML = `<strong> Repository URL: </strong> <a> ${singleResult.html_url}</a>`;

    

    singleResultWrapper.appendChild(searchDescription);
    singleResultWrapper.appendChild(userName);
    singleResultWrapper.appendChild(repoUrl);

    resultsContainer.appendChild(singleResultWrapper);


    //adding styles to this results 
    resultsContainer.classList.add("bg-blue-200" , "border" , "rounded-lg" , "p-3" , "m-3");

    singleResultWrapper.className = "border-2 border-solid border-gray-500 p-1";


 }); 
 console.log(data)   //for testing
}


function displayBookResults(data) {
 const resultsContainer = document.getElementById("search-bar-results");
 resultsContainer.innerHTML = "" ; //cleaning search before looking for another term

 if(!data.docs) {
  resultsContainer.innerHTML = "No books founded. Please try another Search Criteria"
  return;
 }

 data.docs.forEach(singleBook=> {
 
    const singleResultWrapper = document.createElement("div");
    const bookTitle = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const bookLanguage =  document.createElement("p");

    const authors = singleBook.author_name ? singleBook.author_name.join(", ") : "Unknown Author";
    const languages = singleBook.language ? singleBook.language.join(", ") : "Unkown Language"; 

    bookTitle.innerHTML = `<strong>Title:</strong> ${singleBook.title}`;
    bookAuthor.innerHTML = `<strong>Author:</strong> ${authors}`;
    bookLanguage.innerHTML = `<strong>Language: </strong> <a> ${languages}</a>`;

    

    singleResultWrapper.appendChild(bookTitle);
    singleResultWrapper.appendChild(bookAuthor);
    singleResultWrapper.appendChild(bookLanguage);

    resultsContainer.appendChild(singleResultWrapper);


    //adding styles to this results 
    resultsContainer.classList.add("bg-blue-200" , "border" , "rounded-lg" , "p-3" , "m-3");

    singleResultWrapper.className = "border-2 border-solid border-gray-500 p-1";
 
 });

}