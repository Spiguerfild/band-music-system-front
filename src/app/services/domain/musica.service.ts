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
}