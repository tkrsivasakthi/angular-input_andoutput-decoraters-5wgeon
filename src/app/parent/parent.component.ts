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

  ngOnInit() {}

  public currentPrice: string = '500';

  onchange(value) {
    this.currentPrice = value;
  }

  GetChildData(v) {
    alert(v);
  }
}
