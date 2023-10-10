import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import { MusicoDTO } from "src/app/models/MusicoDTO";

@Injectable()
export class MusicoService {

  constructor(public http: HttpClient) {

  }

  findAll(): Observable<MusicoDTO[]> {
    return this.http.get<MusicoDTO[]>(`${API_CONFIG.baseUrl}/musicos`);
  }


  findById(id: number): Observable<MusicoDTO> {
    return this.http.get<MusicoDTO>(`${API_CONFIG.baseUrl}/musicos/${id}`);
  }

  insert(musico: MusicoDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}/musicos`, musico, {
      observe: 'response', responseType: 'text'
    });
  }

  update(id: number, musico: MusicoDTO) {
    return this.http.put(`${API_CONFIG.baseUrl}/musicos/${id}`, musico)
  }
  delete(id: number) {
    return this.http.delete(`${API_CONFIG.baseUrl}/musicos/${id}`)
  }
}