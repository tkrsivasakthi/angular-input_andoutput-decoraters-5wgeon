import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// useDefineForClassFields = true
('use strict');
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  public test: any;
  public jobForma: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  showh1: boolean = true;

  ngOnInit() {
    this.initializeForm();
  }

  public currentPrice: string = '500';
  public sampledata: string;

  onchange(value) {
    this.currentPrice = value;
  }

  //get data from children component
  GetChildData(v) {
    alert(v);
  }

  update(user) {
    console.log(user.value);
  }

  // create form control using fg and fc
  jobForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength('3'),
    ]),
    contact: new FormControl(''),
  });
  // get the reactive form values from view
  save() {
    console.log(this.jobForm.value);
  }

  //using Form builder
  initializeForm() {
    this.jobForma = this.formBuilder.group({
      username: [''],
      contact: this.formBuilder.group({
        // this is netsted form group
        address: [''],
        phone: [''],
      }),
    });
  }
  savea() {
    console.log(this.jobForma.value);
  }
}
