import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-stat',
  templateUrl: './card-stat.component.html',
  styleUrls: ['./card-stat.component.css']
})
export class CardStatComponent implements OnInit {

  @Input() point?: string;
  @Input() title?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
