import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  public test: any;
  constructor() {}
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
}
