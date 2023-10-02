import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import { NoiteDeApresentacaoDTO } from "src/app/models/NoiteDeApresentacaoDTO";

@Injectable()
export class noiteDeApresentacaoService {

  constructor(public http: HttpClient) {

  }

  findAll(): Observable<NoiteDeApresentacaoDTO[]> {
    return this.http.get<NoiteDeApresentacaoDTO[]>(`${API_CONFIG.baseUrl}/noitesdeapresentacao`);
  }
  findById(id: number): Observable<NoiteDeApresentacaoDTO> {
    return this.http.get<NoiteDeApresentacaoDTO>(`${API_CONFIG.baseUrl}/noitesdeapresentacao/${id}`);
  }

  insert(noite: NoiteDeApresentacaoDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}/noitesdeapresentacao`, noite, {
      observe: 'response', responseType: 'text'
    });
  }
  update(id: number, escala: NoiteDeApresentacaoDTO) {
    return this.http.put(`${API_CONFIG.baseUrl}/noitesdeapresentacao/${id}`, escala)
  }
}