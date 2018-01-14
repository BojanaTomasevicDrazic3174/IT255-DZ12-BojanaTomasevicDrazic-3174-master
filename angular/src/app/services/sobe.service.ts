import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {apiUrl, getAuthHeaders} from "../constants";
import Soba from "../model/soba";

@Injectable()
export default class SobeService {
  protected url = apiUrl + "getsobe.php";

  constructor (protected http: Http) {}

  getSobe(): Observable<Soba[]> {
    return this.http.get(this.url, {headers: getAuthHeaders() })
      .map(this.extractData)
  }
  protected extractData(data: Response) {

    let obj = JSON.parse(data['_body']);
      console.log(data);
    return obj.rooms;
  }


}
