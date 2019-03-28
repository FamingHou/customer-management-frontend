import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080/api/v1/customers';

  constructor(private http: HttpClient) { }

  getCustomer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}`, customer);
  }

  updateCustomer(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCustomersList(sortCriteria: SortCriteria): Observable<any> {
    console.log(sortCriteria);
    return this.http.get(`${this.baseUrl}`, {
      params: {
        sortColumn : sortCriteria.sortColumn,
        sortDirection : sortCriteria.sortDirection
      }
    });
  }

  getCustomersByConds(conds: Customer, sortCriteria: SortCriteria): Observable<any> {
    return this.http.get(`${this.baseUrl}/conditions`, {
      params: {
        firstName: conds.firstName,
        lastName: conds.lastName,
        emailId: conds.emailId,
        sortColumn : sortCriteria.sortColumn,
        sortDirection : sortCriteria.sortDirection
      }
    });
  }
}

export class SortCriteria {
  
  sortColumn: string;
  sortDirection: string;

}
