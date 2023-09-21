import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export class Login {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class IonicRestService {
  private URL: string = 'http://localhost:3000';
  // httpHeader = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  // };
  constructor(private http: HttpClient) {}
  // login(student: Login): Observable<any> {
  //   return this.http
  //     .post<Login>(`${URL}/`, student, this.httpHeader)
  //     .pipe(catchError(this.handleError<Login>('Add Student')));
  // }
  teste(): Observable<any>{
    console.log("lskdfl")
    return this.http.get<any>(this.URL)
  }
  // getStudent(id: any): Observable<Student[]> {
  //   return this.http.get<Student[]>(`${this.URL}/` + id).pipe(
  //     tap((_) => console.log(`Student fetched: ${id}`)),
  //     catchError(this.handleError<Student[]>(`Get student id=${id}`))
  //   );
  // }
  // getStudentList(): Observable<Student[]> {
  //   return this.http.get<Student[]>(`${this.URL}/`).pipe(
  //     tap((Student) => console.log('Student fetched!')),
  //     catchError(this.handleError<Student[]>('Get student', []))
  //   );
  // }
  // updateStudent(id: any, student: Student): Observable<any> {
  //   return this.http.put(`${URL}/` + id, student, this.httpHeader).pipe(
  //     tap((_) => console.log(`Student updated: ${id}`)),
  //     catchError(this.handleError<Student[]>('Update student'))
  //   );
  // }
  // deleteStudent(id: any): Observable<Student[]> {
  //   return this.http.delete<Student[]>(`${URL}/` + id, this.httpHeader).pipe(
  //     tap((_) => console.log(`Student deleted: ${id}`)),
  //     catchError(this.handleError<Student[]>('Delete student'))
  //   );
  // }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}