import { Component, OnInit } from '@angular/core';
import { cribs } from './../../data/cribs';
import { CribService } from './../../services/crib.service';
import { SortByPipe } from './../../pipes/sort-by.pipe';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any> = cribs;
  sortField: string = 'price';
  SortFields: Array<string> = ["price","address","bathrooms","bedrooms","type"];

  constructor(private cribService: CribService) { }

  ngOnInit() {
    this.cribService.newCribSubject.subscribe(
      data => this.cribs = [data, ...this.cribs]
    );
  }

}
