import {Reader} from "@makechtec/tezcatl-cli";
import {CONFIG_FILE} from "@makechtec/tezcatl-constants";
import {cwd} from "node:process";

export const Settings = {

    get: () => {
        const text = Reader.read(cwd() + "/" +CONFIG_FILE);
        return JSON.parse(text);
    }

};

export class SettingsReader{

    private filename: string;

    constructor(filename: string){
        this.filename = filename;
    }

    setFilename(filename: string){
        this.filename = filename;
    }

    read() : any{
        const text = Reader.read(this.filename);
        return JSON.parse(text);
    }

    item(key: string): string {
        try{
            const item = this.read()[key];
            if(item === undefined || item === null){
                throw new Error("Item not found");
            }

            return item;
        }
        catch(e){
            console.info("INFO: not found property " + key + " in settings file");
            return "";
        }

    }
}