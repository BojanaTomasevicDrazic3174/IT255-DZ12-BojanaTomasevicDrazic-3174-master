import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {apiUrl, getAuthHeaders} from "../constants";
import Soba from "../model/soba";
import PostService from "./post.service";
@Injectable()
export default class DodajService extends PostService{
 url = apiUrl + "dodaj.php";

 callService(item: Object) : Observable<void> {
   console.log(item);
   this.headers = getAuthHeaders();
   return super.callService(item);
 }

}
