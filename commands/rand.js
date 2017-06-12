const Command = require('./command.js');

module.exports = class Rand extends Command{
    static match(message) {
        return message.content.startsWith('!rand');
    };
    
    static action (message) {
        let args = message.content.split(' ');
        args.shift();
        message.delete();
        message.reply('tu as obtenu un ' + Math.floor(Math.random() * (100 - 0) + 0));
    };
}