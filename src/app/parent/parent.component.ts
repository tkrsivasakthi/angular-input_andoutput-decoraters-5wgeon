import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  constructor(private formBuilder: FormBuilder) {}
  showh1: boolean = true;

  ngOnInit() {}

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
    username: new FormControl(''),
    contact: new FormControl(''),
  });

  //using Form builder
  jobForma = this.formBuilder.group({
    username: [''],
    contact: [''],
  });
  // get the reactive form values from view
  save() {
    console.log(this.jobForm.value);
  }
}
