import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CribListingComponent } from './components/crib-listing/crib-listing.component';
import { CribCardComponent } from './components/crib-card/crib-card.component';
import { NewCrimFormComponent } from './components/new-crim-form/new-crim-form.component';

import { CribService } from './services/crib.service';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    CribCardComponent,
    NewCrimFormComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CribService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
