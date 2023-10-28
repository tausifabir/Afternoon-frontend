import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AdminDailyConsumeUpdateComponent } from './admin/admin-daily-consume-update/admin-daily-consume-update.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDailyConsumeUpdateComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
