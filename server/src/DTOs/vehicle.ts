export interface VehicleProps {
  brand: string;
  model: string;
  plate: string;
  color: string;
  created_at: Date;
  updated_at: Date;
}

export interface IRegisterVehicle {
  brand: string;
  model: string;
  plate: string;
  color: string;
}

export interface IUpdatevehicle {
  brand: string;
  model: string;
  plate: string;
  color: string;
}