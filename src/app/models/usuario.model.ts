export type Usuario = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  matricula: number;
  documento: string;
  data_nascimento: string;
  estado_civil: EstadoCivil;
};

enum EstadoCivil {
  CASADO,
  SOLTEIRO,
  ENROLADO,
}
