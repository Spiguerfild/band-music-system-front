import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import { InstrumentoDTO } from "src/app/models/InstrumentoDTO";

@Injectable()
export class instrumentoService {


  constructor(public http: HttpClient) { }

  findAll(): Observable<InstrumentoDTO[]> {
    return this.http.get<InstrumentoDTO[]>(`${API_CONFIG.baseUrl}/instrumentos`);
  }

  findById(id: number): Observable<InstrumentoDTO> {
    return this.http.get<InstrumentoDTO>(`${API_CONFIG.baseUrl}/instrumentos/${id}`);
  }

  insert(instrumento: InstrumentoDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}/instrumentos`, instrumento, {
      observe: 'response', responseType: 'text'
    });
  }

  update(id: number, instrumento: InstrumentoDTO) {
    return this.http.put(`${API_CONFIG.baseUrl}/instrumentos/${id}`, instrumento)
  }
  delete(id: number) {
    return this.http.delete(`${API_CONFIG.baseUrl}/instrumentos/${id}`)
  }
}