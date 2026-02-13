import { loadHeaderFooter } from "./utils.mjs";
import { bitBucketFetch, gitApiFetch  } from "./api.mjs"; // for testing purposes


await loadHeaderFooter();

// await gitApiFetch("loops"); (used for testing only)
await bitBucketFetch("python"); //testing code