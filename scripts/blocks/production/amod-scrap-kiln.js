const amodScrapKiln = extendContent(GenericCrafter, "scrap-kiln", {
	draw(tile){
		Draw.rect(Core.atlas.find(this.name + "-bottom"), tile.drawx(), tile.drawy());
		
		Draw.color(Color.valueOf("ffa666"))
		Draw.alpha(tile.entity.warmup)
		Draw.rect(Core.atlas.find(this.name + "-liquid"), tile.drawx(), tile.drawy());
		Draw.color();
		
		Draw.rect(Core.atlas.find(this.name + "-flare"), tile.drawx(), tile.drawy());
	},
	generateIcons: function(){
		return [
			Core.atlas.find(this.name),
		];
	},
});