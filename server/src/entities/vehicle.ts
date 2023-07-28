import { VehicleProps } from "@DTO/vehicle";
import { randomUUID } from "node:crypto"
import { Replace } from "@helpers/Replace";


export class Vehicle {
  private _id: string;
  private props: VehicleProps;

  constructor(
    props: Replace<VehicleProps, {
      created_at?: Date,
      updated_at?: Date
    }>,
    id?: string
  ) {
    this._id = id ?? randomUUID(),
    this.props = {
      ...props,
      created_at: props.created_at ?? new Date(),
      updated_at: props.updated_at ?? new Date()
    }
  }

  public get id(): string {
    return this._id;
  }

  public set brand(brand: string) {
    this.props.brand = brand
  }

  public get brand(): string {
    return this.props.brand
  }

  public set model(model: string) {
    this.props.model = model
  }

  public get model(): string {
    return this.props.model
  }

  public set plate(plate: string) {
    this.props.plate = plate
  }

  public get plate(): string {
    return this.props.plate
  }

  public set color(color: string) {
    this.props.color = color
  }

  public get color(): string {
    return this.props.color
  }

  public get created_at(): Date {
    return this.props.created_at;
  }

  public get updated_at(): Date {
    return this.props.updated_at;
  }

}