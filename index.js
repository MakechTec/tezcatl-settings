"use strict";exports.__esModule=true;exports.Settings=void 0;var tezcatl_cli_1=require("@makechtec/tezcatl-cli");var tezcatl_constants_1=require("@makechtec/tezcatl-constants");var node_process_1=require("node:process");exports.Settings={get:function(){var text=tezcatl_cli_1.Reader.read((0,node_process_1.cwd)()+"/"+tezcatl_constants_1.CONFIG_FILE);return JSON.parse(text)}};