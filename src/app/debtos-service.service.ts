import { Injectable } from '@angular/core';
import { Debtor } from './debtor';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from 'src/environments/environment';
import { DebtorBalance } from './debtor-balance';

@Injectable({
  providedIn: 'root'
})
export class DebtosServiceService {

  

  constructor(private http: HttpClient) { }

  getDebts() : Observable<Debtor[]> {
    //const obsDebtors = of(this.debtors);
    const obsDebtors = this.http.get<any>(SERVER_URL+'/client?summarize=true');
    return obsDebtors;
  }

  sendReportFile(file: File) : Observable<Debtor[]> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<Debtor[]>(SERVER_URL+'/upload', formData);
  }

  getDebtBalance(dni: string) : Observable<DebtorBalance[]> {
    const obsDebtors = this.http.post<any>(SERVER_URL+'/balance/query', 
      {
        "where": {
            "dni": dni
        }
      }
    );
    return obsDebtors;
  }

  addBalance(dni: string, amount: string) : Observable<DebtorBalance> {
    return this.http.post<any>(SERVER_URL + '/balance', {
      dni,
      amount
    })
  }
  addClient(dni: string, name : string): Observable<Debtor> {
    return this.http.post<any>(SERVER_URL + '/client', {
      dni,
      name
    })
  }
  deleteClient({ dni } : {dni: string}) : Observable<any> {
    return this.http.delete<any>(SERVER_URL + "/client", {
      body: {
        dni
      }
    })
    
  }
} 
