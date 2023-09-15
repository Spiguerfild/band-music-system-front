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

}