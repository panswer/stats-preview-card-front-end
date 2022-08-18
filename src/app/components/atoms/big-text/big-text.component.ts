import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-text',
  templateUrl: './big-text.component.html',
  styleUrls: ['./big-text.component.css']
})
export class BigTextComponent implements OnInit {

  @Input() text?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
