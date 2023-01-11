import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, reduce, tap } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Expense } from '../interfaces/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private _url: string = "http://localhost:8080/api/v1/expense";

  hierarchy: any = ['Medical', 'Food', 'Entertainment', 'Shopping', 'Others'];

  constructor(private http: HttpClient) { }

  getExpenses() {
    return this.http.get(this._url)
  }

  addExpense(category: any, amount: any, date: any, description: any): Observable<Object> {
    const expense = {
      category: category,
      amount: amount,
      date: date,
      name: description
    }
    return this.http.post(this._url, expense)
  }

  deleteExpense() {

  }

  updateExpense() {

  }

  getExpensesData(): Observable<Expense> {
    return this.http.get<Expense>(this._url)
              .pipe(
                //calculate the amount of each category and return key value pair of the category and total amount
                map((data: any) => {
                  return data.reduce((acc: any, item: any) => {
                    if (!acc[item.category]) {
                      acc[item.category] = 0;
                    }
                    acc[item.category] += item.amount;
                    return acc;
                  }, {})
                }
                ),
                //convert the key value pair to an array of objects
                map((data: any) => {
                  return Object.keys(data).map(key => {
                    return {
                      category: key,
                      amount: data[key]
                    }
                  })
                }
                ),
                //convert it to an array and sort it following the hierarchy that can be used by the chart datasets
                map((data: any) => {
                  return this.hierarchy.map((category: any) => {
                    const found = data.find((item: any) => item.category === category);
                    return found ? Number.parseFloat(found.amount).toFixed(2) : 0;
                  })
                }
                ),
              )
  }

}
