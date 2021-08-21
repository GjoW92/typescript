import { Component, OnInit } from '@angular/core';
import { championClass } from 'src/app/model/champion';
import { Champion } from 'src/app/model/champion';
import { ChampionService } from 'src/app/services/champion.service';

@Component({
  selector: 'app-champion-form',
  templateUrl: './champion-form.component.html',
  styleUrls: ['./champion-form.component.css']
})
export class ChampionFormComponent {

  champions: Champion[] = [];

  types = ['Controller', 'Fighter', 'Mage', 'Marksman', 'Slayer', 'Tank'];

  roles = ['Toplane', 'Jungle', 'Midlane', 'Botlane', 'Support'];

  model = new championClass(18, 'Senna', this.types[3], this.roles[3]);

  submitted = false;

  constructor(private championService: ChampionService){}
  onSubmit() {
    this.submitted = true;
  }  

  add(name: string, type: string, role: string): void {
    name = name.trim();
    
    if (!name) {
      return;
    }

    this.championService
      .addChampion({ name, type, role } as Champion)
      .subscribe((champion) => {
        this.champions.push(champion);
      });
  }

}
