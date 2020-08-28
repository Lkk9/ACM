


const Milhelicopter = new JavaAdapter(UnitType, {
	load() {
		this.super$load();
	
		this.region = Core.atlas.find(this.name);
		this.rotor1 = Core.atlas.find(this.name + "-rotator-1");
		this.rotor2 = Core.atlas.find(this.name + "-rotator-2");
	}
}, "military-helicopter", prov(() => extend(HoverUnit, {
	drawOver() {
		const r = this.rotation;
		var x, y;
		
			Draw.rect(Milhelicopter.rotor2,
			    this.x,
			    this.y,
				r + Time.time() * 11),
		
			Draw.rect(Milhelicopter.rotor1,
			    this.x,
			    this.y,
				r + Time.time() * 19)
				
	}
})));

module.exports = Milhelicopter;
