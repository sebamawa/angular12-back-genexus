import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap  } from 'rxjs/operators';
import { Customer } from '../models/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customersAPIUrl: string = 'http://localhost/KBRolesAndPermissions.NetEnvironment/APICustomers/List'

  constructor(
    private http: HttpClient
  ) {}

/*   http.get retorna el body de un response (json por defecto)
  el operador catchError() intercepta un Observable que falla,
  y pasa el error a handleError() */
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer []>(this.customersAPIUrl)
      .pipe(
        tap(_ => console.log('getCustomers')),
        catchError(this.handleError<Customer[]>('geCustomers', []))
      );
  }

  /**
   * maneja la operacion Http que falla y permite a la app continuar
   * @param operation - nombre de la operacion que falla
   * @param result - valor opcional para retornar un resultado Observable
   */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      // la app continua corriendo retornando un resultado vacio
      return of(result as T);
    }
  }  
}
