module.exports = {
	name: 'start',
	description: 'Start the game!',
	args: false,
	execute(message, args, playerList) {
        playerList[playerList.length] = message.author.id;
		message.channel.send(`${message.author} has Started the game!`);
        //message.author.send("this is a dm");
	},
};