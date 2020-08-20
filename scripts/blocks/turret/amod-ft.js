const amodFurewTurret = extendContent(PowerTurret, "furew-turret",{
	load(){
		this.super$load();
		
		this.region = Core.atlas.find(this.name);
		this.baseRegion = Core.atlas.find("amod-block-6");
	},
	
	generateIcons: function(){
	return [
		Core.atlas.find("amod-block-6"),
		Core.atlas.find(this.name)
	];},
});