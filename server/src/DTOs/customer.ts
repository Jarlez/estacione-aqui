export interface CustomerProps {
  name: string;
  cpf: string;
  contact_number: string;
  working_store: string;
  created_at: Date;
  updated_at: Date;
  delete_at?: Date | null;
}

export interface IRegisterCustomer {
  name: string;
  cpf: string;
  contact_number: string;
  working_store: string;
}

export interface IUpdateCustomer {
  name: string;
  cpf: string;
  contact_number: string;
  working_store: string;
}