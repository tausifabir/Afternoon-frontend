import {Moment} from "moment";

export interface IDailyUserCost {
  id?: number;
  userId?: number;
  userName?: string;
  cost?: number;
  food?: string;
  date?: Moment;

}

export class DailyUserCost implements IDailyUserCost {
  constructor(
  public  id?: number,
  public userId?: number,
  public userName?: string,
  public cost?: number,
  public date?: Moment,
  ) {}
}

