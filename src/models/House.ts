import { Character } from './Character';

export class House {
  private members: Character[] = [];

  constructor(private houseName: string) {}

  addMember(member: Character) {
    this.members.push(member);
  }

  getMembers(): Character[] {
    return [...this.members];
  }

  getName(): string {
    return this.houseName;
  }
}
