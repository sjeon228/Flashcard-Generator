function ClozeCard(cloze, partial){
	this.cloze = cloze;
	this.partial = partial;
	this.fulltext = cloze + partial;
}

var clozeArr = [
	new clozeCard("Ray Allen", "has made the most 3 pointers in NBA history."),
	new clozeCard("Wilt Chamberlain", "has scored the most points in a game in NBA history."),
	new clozeCard("The Golden State Warriors", "won the 2017 NBA championship."),
	new clozeCard("Jerry West", "is the man portrayed in the NBA logo."),
	new clozeCard("Russel Westbrook", "won the 2017 NBA MVP award.")
];




module.exports = ClozeCard;