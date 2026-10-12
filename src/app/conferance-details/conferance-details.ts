import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conferance-details',
  imports: [],
  templateUrl: './conferance-details.html',
  styleUrl: './conferance-details.css',
})
export class ConferanceDetails implements OnInit {
  conference: { id: number; name: string; date: string; place: string } | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const conferences = [
      { id: 1, name: 'angular', date: '2023-01-01', place: 'tunis' },
      { id: 2, name: 'react', date: '2023-02-01', place: 'sfax' },
      { id: 3, name: 'vue', date: '2023-03-01', place: 'sousse' },
    ];

    this.conference = conferences.find((c) => c.id === id);
  }
}
