module.exports = {
	name: 'join',
	description: 'Join a game!',
	args: false,
	execute(message, args, playerList) {
        playerList[playerList.length] = message.author.id;
		message.channel.send(`${message.author} has joined the game!`);
        //message.author.send("this is a dm");
	},
};