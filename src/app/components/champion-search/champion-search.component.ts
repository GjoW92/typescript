import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { Champion } from 'src/app/model/champion';
import { ChampionService } from 'src/app/services/champion.service';

@Component({
  selector: 'app-champion-search',
  templateUrl: './champion-search.component.html',
  styleUrls: ['./champion-search.component.css']
})

export class ChampionSearchComponent implements OnInit {

  champions$!: Observable<Champion[]>;
  private searchTerms = new Subject<string>();

  constructor(private championService: ChampionService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.champions$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(term => term.length >= 2),
      switchMap((term: string) => this.championService.searchChampions(term))
    )
  }

}
