import { InstrumentoDTO } from "./InstrumentoDTO";
import { MusicaDTO } from "./MusicaDTO";


export interface MusicoInstrumentoDTO {
  id: number; // O tipo depende do tipo real de id em sua classe Java
  musico: MusicaDTO;
  instrumento: InstrumentoDTO;
}
