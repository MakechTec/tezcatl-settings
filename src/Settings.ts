import {Reader} from "@makechtec/tezcatl-cli";
import {CONFIG_FILE} from "@makechtec/tezcatl-constants";
import {cwd} from "node:process";

export const Settings = {

    get: () => {
        const text = Reader.read(cwd() + "/" +CONFIG_FILE);
        return JSON.parse(text);
    },

    read: (filename: string) : any => {
        const text = Reader.read(filename);
        return JSON.parse(text);
    },

    item(key: string): string {
        try{
            const item = Settings.get()[key];
            if(item === undefined || item === null){
                throw new Error("Item not found");
            }

            return item;
        }
        catch(e){
            console.info("INFO: la propiedad " + key + " no existe en el archivo de configuración");
            return "";
        }

    }

};