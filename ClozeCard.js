function ClozeCard(cloze, partial){
	this.cloze = cloze;
	this.partial = partial;
	this.fulltext = cloze + partial;
}






module.exports = ClozeCard;