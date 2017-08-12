import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CribService {

  public newCribSubject = new Subject<any>();
  constructor() { }
  addCrib(data) {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }

}
