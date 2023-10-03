import { BandaDTO } from "./BandaDTO";

export interface NoiteDeApresentacaoDTO {
  id: number; // O tipo depende do tipo real de id em sua classe Java
  data: number[]; // O tipo depende do tipo real de data em sua classe Java
  banda: BandaDTO;
}

