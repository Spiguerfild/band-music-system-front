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
}