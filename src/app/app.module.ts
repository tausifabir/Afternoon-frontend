import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AdminDailyConsumeUpdateComponent } from './admin/admin-daily-consume-update/admin-daily-consume-update.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDailyConsumeUpdateComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
