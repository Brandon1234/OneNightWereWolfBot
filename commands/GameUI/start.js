module.exports = {
	name: 'start',
	description: 'Start the game!',
	args: false,
	execute(message, args, playerList) {
		message.channel.send(`${message.author} has Started the game!`);
        //message.author.send("this is a dm");
	},
};