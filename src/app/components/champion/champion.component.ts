import { Component, OnInit } from '@angular/core';
import { Champion } from 'src/app/model/champion';
import { ChampionService } from 'src/app/services/champion.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css'],
})
export class ChampionComponent implements OnInit {
  champions: Champion[] = [];

  constructor(private championService: ChampionService) {}

  ngOnInit(): void {
    this.getChampions();
  }

  getChampions(): void {
    this.championService
      .getChampions()
      .subscribe((champions) => (this.champions = champions));
  }

  add(name: string): void {
    name = name.trim();
    
    if (!name) {
      return;
    }

    this.championService
      .addChampion({ name } as Champion)
      .subscribe((champion) => {
        this.champions.push(champion);
      });
  }

  delete(champion: Champion): void {
    this.champions = this.champions.filter(c => c !== champion);
    this.championService.deleteChampion(champion.id).subscribe();
  }
}
