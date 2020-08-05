const amodNoriumSetter = extendContent(GenericCrafter, "norium-setter", {
	draw(tile){
		Draw.rect(Core.atlas.find(this.name + "-bottom"), tile.drawx(), tile.drawy());
	
		Draw.rect(Core.atlas.find(this.name + "-spinner"), tile.drawx(), tile.drawy(), tile.entity.totalProgress * 1.5);
		
		Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
	},
	generateIcons: function(){
		return [
			Core.atlas.find(this.name),
		];
	},
});