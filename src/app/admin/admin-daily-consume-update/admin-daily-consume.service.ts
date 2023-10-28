import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {SERVER_API_URL} from "../../constants/app.constants";
import {IEmployee} from "../../model/IEmployee";


type EntityResponseType = HttpResponse<IEmployee>;
type EntityArrayResponseType = HttpResponse<IEmployee[]>;

@Injectable({ providedIn: 'root' })
export class AdminDailyConsumeService {

  public resourceUrl = SERVER_API_URL + 'api/employee-mgt/work-from-home-applications';

  getUserList(): Observable<IEmployee[]> {
    // return this.http.get<any[]>(this.ROOT_URL + '/' + applicationId + '/eligible-programs');
    return of([

      { id: 1,
        pin:'1855',
        fullName:'Abir',
        isManager:true,
        isActive:true,
        isAdmin:true,
        teamId:22},

      { id: 2,
        pin:'1856',
        fullName:'Abir2',
        isManager:true,
        isActive:true,
        isAdmin:true,
        teamId:22},


      { id: 3,
        pin:'1857',
        fullName:'Abir5',
        isManager:true,
        isActive:true,
        isAdmin:true,
        teamId:22},

    ]);
  }
}
