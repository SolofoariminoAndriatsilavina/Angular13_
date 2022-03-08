// Modification nataoko début
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Modification nataoko fin
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InspectionComponent } from './inspection/inspection.component';
import { ShowInspectionComponent } from './inspection/show-inspection/show-inspection.component';
import { AddEditInspectionComponent } from './inspection/add-edit-inspection/add-edit-inspection.component';

// Modification nataoko début
import { InspectionApiService } from './inspection-api.service';
// Modification nataoko fin

@NgModule({
  declarations: [
    AppComponent,
    InspectionComponent,
    ShowInspectionComponent,
    AddEditInspectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Modification nataoko début
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Modification nataoko fin
  ],
  providers: [
    // Modification nataoko début
    InspectionApiService,
    // Modification nataoko fin
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
