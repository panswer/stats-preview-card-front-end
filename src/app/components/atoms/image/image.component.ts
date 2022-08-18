import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() img?: string;
  @Input() imgDesktop?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
