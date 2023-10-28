import {Moment} from "moment";


export interface IEmployee {
  id?: number;
  pin?: string;
  fullName?: string;
  isManager?: boolean;
  isAdmin?: boolean;
  isActive?: boolean;
  teamId?: number;

  // dateOfBirth?: Moment;
  // placeOfBirth?: string;
  // dateOfJoining?: Moment;
  // createdBy?: string;
  // createdAt?: Moment;
  // updatedBy?: string;
  // updatedAt?: Moment;
}


export class Employee implements IEmployee {
  constructor(
  public  id?: number,
  public pin?: string,
  public fullName?: string,
  public dateOfBirth?: Moment,
  public placeOfBirth?: string,
  public dateOfJoining?: Moment,
  public createdBy?: string,
  public createdAt?: Moment,
  public updatedBy?: string,
  public updatedAt?: Moment,
  public isManager?: boolean,
  public isAdmin?: boolean,
  public isActive?: boolean,
  public teamId?: number
  ) {
    this.isAdmin = this.isAdmin || false;
    this.isActive = this.isActive || false;
    this.isManager = this.isManager || false;
  }
}
