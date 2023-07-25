import { Replace } from "@helpers/Replace"
import { randomUUID } from "node:crypto"
import { CustomerProps } from "@DTO/customer"
import { Vehicle } from "./vehicle";

export class Customer {
  private _id: string;
  private props: CustomerProps;
  private _vehicle?: Vehicle | null;

  constructor(
    props: Replace<CustomerProps, {
      created_at?: Date,
      updated_at?: Date
    }>,
    id?: string,
    vehicle?: Vehicle | null
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      created_at: props.created_at ?? new Date(),
      updated_at: props.updated_at ?? new Date(),
      delete_at: props.delete_at ?? null
    }
    this._vehicle = vehicle ?? null;
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get cpf(): string {
    return this.props.cpf;
  }

  public set cpf(cpf: string) {
    this.props.cpf = cpf;
  }

  public get contact_number(): string {
    return this.props.contact_number;
  }

  public set contact_number(contact_number: string) {
    this.props.contact_number = contact_number;
  }

  public get working_store(): string {
    return this.props.working_store;
  }

  public set working_store(working_store: string) {
    this.props.working_store = working_store;
  }

  public get created_at(): Date {
    return this.props.created_at;
  }

  public get updated_at(): Date {
    return this.props.updated_at;
  }

  public get delete_at(): Date | null | undefined {
    return this.props.delete_at;
  }

  public get vehicle(): Vehicle | null | undefined {
    return this._vehicle;
  }

  public assignVehicle(vehicle: Vehicle) {
    this._vehicle = vehicle;
  }

  public removeVehicle() {
    this._vehicle = null;
  }

  public delete() {
    this.props.delete_at = new Date();
  }

  public undelete() {
    this.props.delete_at = null;
  }
}