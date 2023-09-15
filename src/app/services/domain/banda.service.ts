import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import { BandaDTO } from "src/app/models/BandaDTO";

@Injectable()
export class bandaService {


  constructor(public http: HttpClient) { }

  findAll(): Observable<BandaDTO[]> {
    return this.http.get<BandaDTO[]>(`${API_CONFIG.baseUrl}/bandas`);
  }

}