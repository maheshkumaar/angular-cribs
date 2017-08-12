import { Component, OnInit, Input } from '@angular/core';
import { Cribs } from './../../cribs';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {

  @Input('crib') crib: Cribs;

  constructor() { }

  ngOnInit() {
  }

}
