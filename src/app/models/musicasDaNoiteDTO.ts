import { BandaDTO } from "./BandaDTO";
import { MusicoInstrumentoDTO } from "./MusicoInstrumentoDTO";

export interface MusicasDaNoiteDTO {
  id: number; // O tipo depende do tipo real de id da classe Java
  musica: {
    id: number;
    nome: string;
    autor: string;
  },
  noite: {
    id: number;
    data: number[]; // O tipo depende do tipo real de data em sua classe Java
    banda: BandaDTO;
  }

}