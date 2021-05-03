module.exports = {
	name: 'join',
	description: 'Join a game!',
	args: false,
	execute(message, args) {
		message.channel.send(`${message.author} has joined the game!`);
	},
};