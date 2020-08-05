

const amodVortManufactory = extendContent(GenericCrafter, "vort-manufactory", {

	draw(tile){
		Draw.rect(Core.atlas.find(this.name + "-bottom"), tile.drawx(), tile.drawy());
	
		Draw.rect(Core.atlas.find(this.name + "-spinner"), tile.drawx(), tile.drawy(), tile.entity.totalProgress * 7.3);
		
	},
	generateIcons: function(){
		return [
			Core.atlas.find(this.name),
		];
	},
	
}
)