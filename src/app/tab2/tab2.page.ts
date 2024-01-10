import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  letterList :any = []
  
  constructor(private dataService : DataService) {
    this.genData();
  }

  genData():void{
    this.dataService.classArray.forEach((obj:any)=>this.letterList.push(obj.letter))
  }

}
