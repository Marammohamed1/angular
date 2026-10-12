import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-conferance-list',
  imports: [RouterLink],
  templateUrl: './conferance-list.html',
  styleUrl: './conferance-list.css',
})
export class ConferanceList {
  conferances: Array<{ id: number; name: string; date: string; place: string }> = [
    { id: 1, name: 'angular', date: '2023-01-01', place: 'tunis' },
    { id: 2, name: 'react', date: '2023-02-01', place: 'sfax' },
    { id: 3, name: 'vue', date: '2023-03-01', place: 'sousse' },
  ];

  inc(): void {
    alert('increment');
  }
}
