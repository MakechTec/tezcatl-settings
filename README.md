# tezcatl settings #

### Installation ###

    $ npm install @makechtec/tezcatl-settings

### Settings Object ###

    get(): any

reads the ./tezcatl.config.json file and returns the object

    read: (filename: string) : any

Same as get but reads a custom file

    item(key: string): string 

get the value of a key in the settings object or empty string ""