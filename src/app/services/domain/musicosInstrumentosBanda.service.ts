import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import { MusicosInstrumentosBandaDTO } from "src/app/models/musicosInstrumentosBandaDTO";



@Injectable()
export class musicosInstrumentosBandaService {

  constructor(public http: HttpClient) {

  }

  findAll(bandaId: number): Observable<MusicosInstrumentosBandaDTO[]> {
    return this.http.get<MusicosInstrumentosBandaDTO[]>(`${API_CONFIG.baseUrl}/bandas/${bandaId}/musicosinstrumentos`);
  }
  // findById(id: number): Observable<MusicosInstrumentosBandaDTO> {
  //   return this.http.get<MusicosInstrumentosBandaDTO>(`${API_CONFIG.baseUrl}/musicosinstrumentos/${id}`);
  // }

  insert(musicoInstrumentoId: number, bandaId: number) {
    return this.http.post(`${API_CONFIG.baseUrl}/bandas/${musicoInstrumentoId}/nabanda/${bandaId}`, {
      observe: 'response', responseType: 'text'
    });
  }
  // update(id: number, musicoIns: MusicosInstrumentosBandaDTO) {
  //   return this.http.put(`${API_CONFIG.baseUrl}/musicosinstrumentos/${id}`, musicoIns)
  // }
  // delete(id: number) {
  //   return this.http.delete(`${API_CONFIG.baseUrl}/musicosinstrumentos/${id}`)
  // }
}