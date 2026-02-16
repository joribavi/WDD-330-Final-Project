import { Octokit } from "octokit"; //import Octokit in order to fetch data from Github API

export async function gitApiFetch(seachTopic){

    const octokit = new Octokit({}); //creating octokit Instance without Auth 


  try {

     const response =  await octokit.request("GET /search/repositories", {
      q: `topic:${seachTopic} in:description`, //search after user input in the description
      per_page: 10,    
      headers: {
        "x-github-api-version": "2022-11-28",
      },
    
     });
  
   console.log(response.data); // for testing purposes
   return response.data;
     
  } catch (error) {
    if (error.status === 404) {
    console.log(`something is wrong`);
    } else {
      console.error(`An error occurred: ${error?.response?.data?.message}`);
   }
  }


}

export async function openLibraryFetch(searchTopic){

   try {
      const apiUrl = `https://openlibrary.org/search.json?q=${searchTopic}&limit=10`;   
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data) //for testing
      return data;
   

   } catch (error) {

          console.error("An error occurred");
     
   }

} 



