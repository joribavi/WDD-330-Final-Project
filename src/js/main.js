import { loadHeaderFooter } from "./utils.mjs";
import { searchInput } from "./search.mjs";


await loadHeaderFooter();
async function searchBar(query,type){
    if(type=== "Github") {
        await searchInput();
    }
    else if(type === "Books") {
        console.log("working on second function...")
    }
}

//await searchInput();
//await gitApiFetch("loops"); // (used for testing only)
//await openLibraryFetch("python loop"); //testing code