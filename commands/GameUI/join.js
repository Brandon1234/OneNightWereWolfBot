module.exports = {
	name: 'join',
	description: 'Join a game!',
	args: false,
	execute(message, args, playerList) {
		let newId = message.author.id;
		let exists = 0;
		for(player in playerList){
			if(playerList[player] == newId){ 
				exists = 1
			};
		}

		if(!exists){
			playerList[playerList.length] = message.author.id;
			message.channel.send(`${message.author} has joined the game!`);
		} else {
			message.channel.send(`You have already joined this game, ${message.author}!`);
		}
        //message.author.send("this is a dm");
	},
};