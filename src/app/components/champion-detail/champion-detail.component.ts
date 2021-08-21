import { Component, OnInit, Input } from '@angular/core';
import { Champion, championClass } from 'src/app/model/champion';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ChampionService } from 'src/app/services/champion.service';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.css'],
})
export class ChampionDetailComponent implements OnInit {
  @Input() champion?: Champion;

  types = ['Controller', 'Fighter', 'Mage', 'Marksman', 'Slayer', 'Tank'];

  roles = ['Toplane', 'Jungle', 'Midlane', 'Botlane', 'Support'];

  constructor(
    private route: ActivatedRoute,
    private championService: ChampionService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getChampion();
  }

  getChampion(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.championService
      .getChampion(id)
      .subscribe((champion) => (this.champion = champion));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.champion) {
      this.championService
        .updateChampion(this.champion)
        .subscribe(() => this.goBack());
    }
  }
}
