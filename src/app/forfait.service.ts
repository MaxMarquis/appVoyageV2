import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forfait } from './forfait';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ForfaitService {
  forfaitUrl =
    'https://forfaits-voyages-2022.herokuapp.com/api/192837465/forfaits/';

  constructor(private http: HttpClient) {}

  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.forfaitUrl);
  }
  addForfait(forfait: Forfait): Observable<Forfait> {
    return this.http.post<Forfait>(this.forfaitUrl, forfait, httpOptions);
  }
  editForfait(forfait: Forfait): Observable<Forfait> {
    return this.http.put<Forfait>(
      this.forfaitUrl + forfait._id,
      forfait,
      httpOptions
    );
  }
  deleteForfait(_id: string): Observable<Forfait> {
    return this.http.delete<Forfait>(this.forfaitUrl + _id);
  }
}
