import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {
  @Input() Id: string = "0";
  photoCover: string = '';
  cardTitle: string = '';
  cardDescription: string = '';

  constructor() {}

  ngOnInit(): void {
    this.setValuesToComponent(this.Id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0]
    this.photoCover = result.photoCover;
    this.cardTitle = result.title;
    this.cardDescription = result.description;
  }
}
