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

export interface MutationResponse {
  nombre: String;
  schedule: {
    group: String;
    teacher: String;
    chat: string;
    classroom: string;
    sesiones: string;
  };
}

export type Action = {
  type: string;
  payload?: any;
};
