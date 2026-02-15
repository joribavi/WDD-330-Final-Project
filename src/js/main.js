import { loadHeaderFooter } from "./utils.mjs";
import { searchInput } from "./search.mjs";


await loadHeaderFooter();

await searchInput();

/*

async function handleSearch(){
   
    const searchOptionChosen = document.getElementById("search-Bar-Options").value; //getting value chosen by user

    // const optionGit = document.getElementById("github");
    //const optionBooks = document.getElementById("books");

      if(searchOptionChosen === "Github") {
        await searchInput();
      }
      else if(searchOptionChosen === "Books") {
        console.log("working on second function...")
      }


}


*/
//await searchInput();
//await gitApiFetch("loops"); // (used for testing only)
//await openLibraryFetch("python loop"); //testing code