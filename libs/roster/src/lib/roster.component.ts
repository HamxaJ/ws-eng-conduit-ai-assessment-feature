import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RosterService } from './data-access/roster.service';
import { RosterUser } from '@realworld/core/api-types';

@Component({
  selector: 'realworld-roster',
  templateUrl: './roster.component.html',
  styleUrls: [],
  providers: [],
  imports: [CommonModule, RouterModule],
  standalone: true,
})
export class RosterComponent implements OnInit {
  rosterUsers$: Observable<RosterUser[]> | undefined;

  constructor(private rosterService: RosterService) {}

  ngOnInit(): void {
    this.rosterUsers$ = this.rosterService.getRosterStats().pipe(
      map(response => response.roster)
    );
  }
}