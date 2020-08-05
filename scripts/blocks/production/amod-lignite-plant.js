const len = 5.62

const amodLignitePlant = extendContent(GenericCrafter, "lignite-plant", {
	draw(tile){
		Draw.rect(Core.atlas.find(this.name + "-bottom"), tile.drawx(), tile.drawy());
	
		Draw.rect(Core.atlas.find(this.name + "-spinner-0"), tile.drawx() - len, tile.drawy() + len, tile.entity.totalProgress * 3.5);
		
		Draw.rect(Core.atlas.find(this.name + "-spinner-1"), tile.drawx() + len , tile.drawy() - len, tile.entity.totalProgress * -2.5);
	
	},
	generateIcons: function(){
		return [
			Core.atlas.find(this.name),
		];
	},
});