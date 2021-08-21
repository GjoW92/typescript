import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Champion } from '../model/champion';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const types = ['Controller', 'Fighter', 'Mage', 'Marksman', 'Slayer', 'Tank'];

    const roles = ['Toplane', 'Jungle', 'Midlane', 'Botlane', 'Support'];

    const champions = [
      { id: 11, name: 'Caitlyn', type: types[3], role: roles[3] },
      { id: 12, name: 'Pyke', type: types[4], role: roles[4] },
      { id: 13, name: 'Irelia', type: types[1], role: roles[0] },
      { id: 14, name: 'Miss Fortune', type: types[3], role: roles[3] },
      { id: 15, name: 'Lucian', type: types[3], role: roles[2] },
      { id: 16, name: 'Lissandra', type: types[2], role: roles[2] },
      { id: 17, name: 'Jinx', type: types[3], role: roles[3] },
      { id: 18, name: 'Aphelios', type: types[3], role: roles[3] },
      { id: 19, name: 'Kindred', type: types[3], role: roles[2] },
      { id: 20, name: 'Ashe', type: types[3], role: roles[3] }
    ];

    return {champions};
  }

  genId(champions: Champion[]): number {
    return champions.length > 0 ? Math.max(...champions.map(champion => champion.id)) + 1 : 11;
  }
}
