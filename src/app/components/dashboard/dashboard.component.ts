import { Component, OnInit } from '@angular/core';
import { Champion } from 'src/app/model/champion';
import { ChampionService } from 'src/app/services/champion.service';
import { ChampionComponent } from '../champion/champion.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  champions: Champion[] = [];

  constructor(private championService: ChampionService) { }

  ngOnInit(): void {
    this.getChampions();
  }

  getChampions(): void {
    this.championService.getChampions().subscribe(champions => this.champions = champions.slice(0,4));
  }

}
