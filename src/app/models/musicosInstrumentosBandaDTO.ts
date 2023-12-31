import { BandaDTO } from "./BandaDTO";
import { MusicoInstrumentoDTO } from "./MusicoInstrumentoDTO";

export interface MusicosInstrumentosBandaDTO {
  id: number; // O tipo depende do tipo real de id em sua classe Java
  musico: {
    id: number;
    nome: string;
  },
  instrumento: {
    id: number;
    nome: string;
  }

}