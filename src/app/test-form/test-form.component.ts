import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent {

  testName: string | undefined;
  age: string | undefined;

  onSave(contactForm:any): void {
    // console.log(this.testName, this.age);
    console.log(contactForm.value);
  }
}
