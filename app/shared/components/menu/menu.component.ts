import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getValue(item : string){
    if(item==='item1'){
      console.log('Item1')
    }
    else{
      console.log('item 2')
    }
  }

}
