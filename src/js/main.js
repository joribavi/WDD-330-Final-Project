import { loadHeaderFooter } from "./utils.mjs";
import { gitApiFetch  } from "./api.mjs"; // for testing purposes


await loadHeaderFooter();

await gitApiFetch("loops");
