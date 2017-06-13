const Command = require('./command.js');

module.exports = class Help extends Command{
    static match(message) {
        return message.content.startsWith('!lore');
    };

    static action (message) {
        let args = message.content.split(' ');
        args.shift();
        message.delete();
        message.reply(' Si tu es interessé par le lore d\'Overwatch, visite : http://www.thekingsbell.news/accueil');
    };
}
