import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

const SERVER = 'https://my-json-server.typicode.com/mpgray/telarus-sampleproject/customer';

export interface ICustomer {
  id: number;
  name: string;
  contactName: string;
  contactEmail: string;
  order?: [{
    location: string;
    street1: string;
    street2?: string;
    city: string;
    state: string;
    postal: string;
    services?: [
      {
        service: string;
        price: number;
      }
    ]
  }
  ];
}

@Injectable()
export class CustomersService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(SERVER)
      .pipe(catchError(this.handleError('getCustomers', [])));
  }

  getCustomer(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer>(SERVER + id);
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
