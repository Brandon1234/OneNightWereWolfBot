module.exports = {
	name: 'repeat',
	description: 'repeats whataver you pass it',
	args: true,
    usage: '<text to repeat>',
	execute(message, args) {
		message.channel.send(args[0]);
	},
};