import { config } from "../config.js";

export function serverHitsCount(){
    console.log(`Hits: ${config.fileserverHits}`);
}