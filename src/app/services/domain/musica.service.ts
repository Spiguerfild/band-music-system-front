import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import { MusicaDTO } from "src/app/models/MusicaDTO";

@Injectable()
export class MusicaService {

  constructor(public http: HttpClient) {

  }

  findAll(): Observable<MusicaDTO[]> {
    return this.http.get<MusicaDTO[]>(`${API_CONFIG.baseUrl}/musicas`);
  }

  findById(id: number): Observable<MusicaDTO> {
    return this.http.get<MusicaDTO>(`${API_CONFIG.baseUrl}/musicas/${id}`);
  }

  insert(musica: MusicaDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}/musicas`, musica, {
      observe: 'response', responseType: 'text'
    });
  }

  update(id: number, musica: MusicaDTO) {
    return this.http.put(`${API_CONFIG.baseUrl}/musicas/${id}`, musica)
  }
  delete(id: number) {
    return this.http.delete(`${API_CONFIG.baseUrl}/musicas/${id}`)
  }
}