import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  @Input() public newPrice;
  @Output() public toparent = new EventEmitter<any>();
  public childdata = 'i am fom child'
  ngOnInit() {}
  send(){
    this.toparent.emit(this.childdata);
  }
}
