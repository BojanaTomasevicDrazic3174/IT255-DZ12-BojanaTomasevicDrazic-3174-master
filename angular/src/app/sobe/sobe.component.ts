import { Component } from '@angular/core';
import 'rxjs/Rx';

import Soba from "../model/soba";
import SobeService from "../services/sobe.service";



@Component({
  selector: 'sobe',
  templateUrl: `./sobe.html`,
})

export default class SobeComponent {

  sobe: Soba[];
  constructor( private sobeService : SobeService ) {
    var $:any;
    this.sobeService.getSobe().subscribe(data => {
      this.sobe = data;
      setInterval(function(){
        $ = window['jQuery'];
        $('table').DataTable();
      }.bind(this),400);
    });
  }

}
