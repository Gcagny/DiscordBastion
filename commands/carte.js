const Command = require('./command.js');

module.exports = class Carte extends Command{
    static match(message) {
        return message.content.startsWith('!carte');
    };
    
    static action (message) {
        let args = message.content.split(' ');
        args.shift();
        message.delete();
        switch (Math.floor(Math.random() * (23 - 0) + 0)) {
            case 0:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/ana.jpg" //
                });
                break;
            case 1:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/bastion.jpg"
                });
                break;
            case 2:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/dva.jpg" //
                });
                break;
            case 3:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/genji.jpg" //
                });
                break;
            case 4:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/hanzo.jpg" //
                });
                break;
            case 5:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/junkrat.jpg" //
                });
                break;
            case 6:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/lucio.jpg" //
                });
                break;
            case 7:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/mccree.jpg" //
                });
                break;
            case 8:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/mei.jpg" //
                });
                break;
            case 9:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/mercy.jpg" //
                });
                break;
            case 10:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/orisa.jpg" //
                });
                break;
            case 11:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/pharah.jpg" //
                });
                break;
            case 12:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/reaper.jpg" //
                });
                break;
            case 13:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/reinhardt.jpg" //
                });
                break;
            case 14:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/roadhog.jpg" //
                });
                break;
            case 15:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/soldier.jpg" //
                });
                break;
            case 16:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/sombra.jpg" //
                });
                break;
            case 17:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/symmetra.jpg" //
                });
                break;
            case 18:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/torbjorn.jpg" //
                });
                break;
            case 19:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/tracer.jpg" //
                });
                break;
            case 20:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/widowmaker.jpg" //
                });
                break;
            case 21:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/winston.jpg" //
                });
                break;
            case 22:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/zarya.jpg" //
                });
                break;
            case 23:
                message.reply('tu as obtenu la carte suivante :', {
                    file: "./assets/img/zenyatta.jpg" //
                });
                break;
        }
        
    };
}