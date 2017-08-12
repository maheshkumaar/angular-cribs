import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CribService } from './../../services/crib.service';

@Component({
  selector: 'app-new-crim-form',
  templateUrl: './new-crim-form.component.html',
  styleUrls: ['./new-crim-form.component.css']
})
export class NewCrimFormComponent implements OnInit {

  @ViewChild('newCribForm') newCribForm: NgForm;
  propTypes: Array<string> = ['House', 'Duplex', 'Condo'];
  constructor(private cribService: CribService) { }

  ngOnInit() {
  }

  newCribFormSubmit(data): void {
    this.cribService.addCrib(data);
    this.newCribForm.reset();
  }

}
