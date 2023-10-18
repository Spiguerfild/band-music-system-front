import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import { MusicoInstrumentoDTO } from "src/app/models/MusicoInstrumentoDTO";



@Injectable()
export class musicoInstrumentoService {

  constructor(public http: HttpClient) {

  }

  findAll(): Observable<MusicoInstrumentoDTO[]> {
    return this.http.get<MusicoInstrumentoDTO[]>(`${API_CONFIG.baseUrl}/musicosinstrumentos`);
  }
  findById(id: number): Observable<MusicoInstrumentoDTO> {
    return this.http.get<MusicoInstrumentoDTO>(`${API_CONFIG.baseUrl}/musicosinstrumentos/${id}`);
  }

  insert(musicoIns: MusicoInstrumentoDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}/musicosinstrumentos`, musicoIns, {
      observe: 'response', responseType: 'text'
    });
  }
  update(id: number, musicoIns: MusicoInstrumentoDTO) {
    return this.http.put(`${API_CONFIG.baseUrl}/musicosinstrumentos/${id}`, musicoIns)
  }
  delete(id: number) {
    return this.http.delete(`${API_CONFIG.baseUrl}/musicosinstrumentos/${id}`)
  }
}