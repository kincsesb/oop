export abstract class Character {
    constructor(
      protected name: string,
      protected health: number,
      protected attackPower: number
    ) {}
  
    abstract attack(target: Character): void;
  
    receiveDamage(amount: number) {}
  
    getName() {
      return this.name;
    }
  
    isAlive(): boolean {
      return this.health > 0;
    }
  }
  