
const helicopter = new JavaAdapter(UnitType, {
	load() {
		this.super$load();
	
		this.region = Core.atlas.find(this.name);
		this.rotor = Core.atlas.find(this.name + "-rotator");
	}
}, "helicopter", prov(() => extend(FlyingUnit, {
	drawOver() {
		const r = this.rotation;
		var x, y;
		
			Draw.rect(helicopter.rotor,
			    this.x,
			    this.y,
				r + Time.time() * 20)
				
	}
})));

module.exports = helicopter;
