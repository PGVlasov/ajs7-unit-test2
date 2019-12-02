export default function heroHealthLevel(hero) {
   let healthLevel = ' ';
      if (hero.health > 50) {
        healthLevel = 'healthy';
      } else if (hero.health > 14 && hero.health < 51) {
        healthLevel = 'wounded';
      } else if (hero.health < 15) {
        healthLevel = 'critical';
      }
  
      return healthLevel;
}