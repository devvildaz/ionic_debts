import { Injectable } from '@angular/core';
import { Debtor } from './debtor';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebtosServiceService {

  debtors = [
    { dni: 76793291, balance: -1000, name: 'Diego Vilca' },
    { dni: 86753292, balance: -1300, name: 'Diego Perez' },
    { dni: 16793293, balance: -1000, name: 'Edwin Aguilar' },
    { dni: 36793294, balance: -1000, name: 'Anthony Sandoval' },
  ];

  constructor() { }

  getDebts() : Observable<Debtor[]> {
    const obsDebtors = of(this.debtors);
    return obsDebtors;
  }

  
} 
