import { Specialty } from "./specialty";
import { Consulting } from "./consulting";

// Interface for model a work data of the doctor

export interface WorkData {
  id: number;
  especialidades: Specialty[];
  consultorioAsignado: Consulting;
}
