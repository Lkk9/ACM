
const siliconBulS = extend(BasicBulletType, {
	hit(b, x, y){
		this.super$hit(b, x, y);
		
		b.velocity().x = b.velocity().x * ((this.speed - this.speedDamage) / this.speed);
		b.velocity().y = b.velocity().y * ((this.speed - this.speedDamage) / this.speed);
		b.scaleTime(this.speedDamage / 4);
		
		if(b.getData() == null){
			Damage.damage(b.getTeam(), x, y, 32, this.firstHitDamage * b.damageMultiplier());
			Effects.effect(railFirstHit, Pal.plastaniumBack, x, y, b.rot(), 36);
			b.setData(0);
		};
	},
	
	update(b){
		Effects.effect(railTrail, Pal.plastaniumBack, b.x + Mathf.range(2), b.y + Mathf.range(2));
		
		var tile = Vars.world.ltileWorld(b.x, b.y);
		
		if(tile != null){
			if(tile.entity != null && tile.getTeam() != b.getTeam()){
				tile.entity.damage(this.damage);
				this.hit(b, b.x, b.y);
			}
		}
	}
});

siliconBulS.firstHitDamage = 21;
siliconBulS.speedDamage = 2.3;
siliconBulS.speed = 12;
siliconBulS.damage = 19;
siliconBulS.lifetime = 36;
siliconBulS.hitSize = 6;
siliconBulS.bulletWidth = 11;
siliconBulS.bulletHeight = 17;
siliconBulS.bulletShrink = 0.25;
siliconBulS.backColor = Pal.plastaniumBack;
siliconBulS.frontColor = Pal.plastaniumFront;
siliconBulS.collidesTiles = false;
siliconBulS.pierce = true;

const amodWe = extendContent(ItemTurret, "we", {});

amodWe.ammo(Items.silicon, siliconBulS);