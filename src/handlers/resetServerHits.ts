import { config } from "../config.js";

export function resetServerHits(){
    config.fileserverHits = 0;
}