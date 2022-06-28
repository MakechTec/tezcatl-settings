export namespace Settings {
    function get(): any;
}
export class SettingsReader {
    constructor(filename: string);
    private filename;
    setFilename(filename: string): void;
    read(): any;
    item(key: string): string;
}