import { Injectable } from '@angular/core';

@Injectable({// this is decorator this file use as service
  providedIn: 'root'
})
export class TimeService {

  constructor() { }
  getTime(){
    return new Date();
  }
}
