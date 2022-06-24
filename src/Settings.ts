import {Reader} from "@makechtec/tezcatl-cli";
import {CONFIG_FILE} from "@makechtec/tezcatl-constants";
import {cwd} from "node:process";

export const Settings = {
    get: () => {
        const text = Reader.read(cwd() + "/" +CONFIG_FILE);
        return JSON.parse(text);
    }
};