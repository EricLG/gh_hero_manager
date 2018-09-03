import {Deserializable} from './deserializable';

export class Card implements Deserializable<Card> {

  roles: Object = {'BR': 'Brute', 'TI': 'Tinkerer', 'SW': 'Spellweaver', 'SC': 'Scoundrel', 'MT': 'Mindthief', 'CH': 'Cragheart'};

  constructor(
    public id?: string,
    public name?: string,
    public role?: string,
    public level?: string,
    public filename?: string,
    public cardnumber?: string,
  ) {}

  deserialize(input: any): Card {
    Object.assign(this, input);
    this.id = input._id;
    return this;
  }

  displayRole(): String {
    return this.roles[this.role];
  }
}
