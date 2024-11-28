const fs = require('fs');
const KaitaiStream = require('kaitai-struct/KaitaiStream');
const GODOT_RESOURCE = require('./godotResourceParser.js');
const godotResourcePath = './rise_ost/talent_show_loop.oggvorbisstr';

const fileContent = fs.readFileSync(godotResourcePath);
const parsedGodotResource = new GODOT_RESOURCE(new KaitaiStream(fileContent));
console.log({parsedGodotResource});