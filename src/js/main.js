import { loadHeaderFooter } from "./utils.mjs";
import { openLibraryFetch, gitApiFetch  } from "./api.mjs"; // for testing purposes
import { searchInput } from "./search.mjs";


await loadHeaderFooter();
await searchInput();
//await gitApiFetch("loops"); // (used for testing only)
//await openLibraryFetch("python loop"); //testing code