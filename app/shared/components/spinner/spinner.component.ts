import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  spinnerVal! : number;

  ngOnInit(): void {
  }

  addvalue(val : HTMLInputElement)
{
  this.spinnerVal = +val.value;
}
}
