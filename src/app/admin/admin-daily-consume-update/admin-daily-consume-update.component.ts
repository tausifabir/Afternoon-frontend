import {Component, OnInit} from '@angular/core';
import {AdminDailyConsumeService} from "./admin-daily-consume.service";
import {IEmployee} from "../../model/IEmployee";
import {Subscription} from "rxjs";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-admin-daily-consume-update',
  templateUrl: './admin-daily-consume-update.component.html',
  styleUrls: ['./admin-daily-consume-update.component.css']
})
export class AdminDailyConsumeUpdateComponent implements OnInit{

  isCostTypeAll: boolean = true;
  isCostTypeIndividual: boolean = false;
  isAllPresent: boolean = false;
  totalSpent: number = 0.0;
  perCost: number = 0.0;
  commonFood: string = '';
  adminDailyConsumeService :AdminDailyConsumeService;
  totalItems = 0;
  itemsPerPage = 500;
  page!: number;
  ascending!: boolean;

  userList: any[] = [];



  constructor(adminDailyConsumeService: AdminDailyConsumeService) {
    this.adminDailyConsumeService = adminDailyConsumeService;
  }

  ngOnInit(): void {

    this.adminDailyConsumeService.getUserList().subscribe({
      next: (data: IEmployee[]) => {
        this.userList = data;
      },
      error: (error) => {
        console.error('Error fetching user list:', error);
      }
    });

  }
  trackId(index: number, item: IEmployee): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }


  changeCostTypeIndividual(event:any) {
      this.isCostTypeAll = event;
      this.isCostTypeIndividual = !event;
  }

  changeCostTypeAll(event:any) {
    this.isCostTypeAll = event;
    this.isCostTypeIndividual = !event;
  }

  totalValue(totalNumber: number) {
    if(totalNumber != undefined){
      this.perCost = parseFloat((totalNumber / this.userList.length).toFixed(2));
    }
  }

  allPresent(isPresent: boolean) {
    this.isAllPresent = isPresent;
  }

  submit() {

  }

  reset() {
    this.isAllPresent = false;
    this.isCostTypeAll = true;
    this.isCostTypeIndividual = false;
    this.totalSpent = 0.0;
    this.perCost = 0.0;
    this.commonFood = '';

  }
}
