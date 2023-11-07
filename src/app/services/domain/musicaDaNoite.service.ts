import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import { MusicasDaNoiteDTO } from "src/app/models/musicasDaNoiteDTO";



@Injectable()
export class MusicaDaNoiteService {

  constructor(public http: HttpClient) {

  }

  findAll(noiteId: number): Observable<MusicasDaNoiteDTO[]> {
    return this.http.get<MusicasDaNoiteDTO[]>(`${API_CONFIG.baseUrl}/noitesdeapresentacao/${noiteId}/musicas`);
  }
  // findById(id: number): Observable<MusicosInstrumentosBandaDTO> {
  //   return this.http.get<MusicosInstrumentosBandaDTO>(`${API_CONFIG.baseUrl}/musicosinstrumentos/${id}`);
  // }

  insert(musicaId: number, noiteId: number) {
    return this.http.post(`${API_CONFIG.baseUrl}/noitesdeapresentacao/${musicaId}/nanoite/${noiteId}`, {}, {
      observe: 'response', responseType: 'text'
    });
  }
  // update(id: number, musicoIns: MusicosInstrumentosBandaDTO) {
  //   return this.http.put(`${API_CONFIG.baseUrl}/musicosinstrumentos/${id}`, musicoIns)
  // }
  delete(musicaId: number, noiteId: number) {
    return this.http.delete(`${API_CONFIG.baseUrl}/noitesdeapresentacao/musicaNaNoite/${musicaId}/${noiteId}`)
  }
}