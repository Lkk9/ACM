const amodFurewIngotFactory = extendContent(GenericCrafter, "furew-ingot-factory", {
	draw(tile){
		Draw.rect(Core.atlas.find(this.name + "-bottom"), tile.drawx(), tile.drawy());
	
		Draw.rect(Core.atlas.find(this.name + "-spinner-0"), tile.drawx(), tile.drawy(), tile.entity.totalProgress * 2.5);
		
		Draw.rect(Core.atlas.find(this.name + "-spinner-1"), tile.drawx(), tile.drawy(), tile.entity.totalProgress * -1.5);
		
		Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
	},
	generateIcons: function(){
		return [
			Core.atlas.find(this.name),
		];
	},
});