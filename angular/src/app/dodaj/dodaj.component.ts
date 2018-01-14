import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Router } from '@angular/router';
import Soba from '../model/soba';

import DodajService from '../services/dodaj.service';

@Component({
  selector: 'dodaj',
  templateUrl: `./dodaj.html`,
})

export default class DodajComponent {

  sobe: Soba[] = [];

  addSobaForm = new FormGroup({
    tipSobe: new FormControl(),
    kvadrata: new FormControl(),
    brojKreveta:new FormControl(),
    pogledNa: new FormControl()
});


  constructor(
    private http: Http,
    private router: Router,
     private dodajService: DodajService) {
       if (!localStorage.getItem('token')) {
      this.router.navigate(['/']);
   }
     }

      dodajSobu(model: Soba) {

          this.dodajService.callService(model).subscribe(data => {

                this.router.navigate(['/sobe']);

          });

        }


}
