import { Injectable } from '@angular/core';
import { ValeurDTO } from '../schemas/valeur-dto';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReponseDTO } from '../schemas/reponse-dto';

@Injectable({
  providedIn: 'root'
})
export class ChequeService {
 
  baseUrl= environment.srvurl;
  constructor(private http:HttpClient) {}
 
  getCheque(data: ValeurDTO): Observable<ReponseDTO> {
   
    return this.http.post<ReponseDTO>(this.baseUrl+'cheques',data);

  }
}
