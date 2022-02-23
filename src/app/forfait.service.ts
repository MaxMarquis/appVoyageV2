import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forfait } from './forfait';
import { Reservation } from './reservation';
// Test laptop
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ForfaitService {
  // forfaitUrl = 'https://forfaits-voyages-2022.herokuapp.com/api/192837465/forfaits/';
  forfaitUrl = 'http://localhost/api-forfaits/api/';
  reservationUrl = 'http://localhost/api-forfaits/api/reservations.php'

  constructor(private http: HttpClient) { }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.reservationUrl);
  }
  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.forfaitUrl);
  }
  addForfait(forfait: Forfait): Observable<Forfait> {
    return this.http.post<Forfait>(this.forfaitUrl, forfait, httpOptions);
  }
  editForfait(forfait: Forfait): Observable<Forfait> {
    return this.http.put<Forfait>(
      this.forfaitUrl + "?id=" + forfait.id,
      forfait,
      httpOptions
    );
  }
  deleteForfait(id: number): Observable<Forfait> {
    return this.http.delete<Forfait>(this.forfaitUrl + "?id=" + id);
  }
}
