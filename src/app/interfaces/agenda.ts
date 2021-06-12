import { Schedule } from './schedule'

// Interface for model de the data of daily agenda

export interface Agenda {
  id: number;
  fecha: string;
  horario: Schedule[];
}
