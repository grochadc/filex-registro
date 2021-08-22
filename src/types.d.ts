export interface Applicant {
  codigo: string;
  nombre: string;
  apellido_materno: string;
  apellido_paterno: string;
  genero: string;
  carrera: string;
  ciclo: string;
  telefono: string;
  email: string;
  nivel: string;
  curso: string;
  externo: boolean;
  nuevo_ingreso: boolean;
}

export type Action = {
  type: string;
  payload?: any;
};
