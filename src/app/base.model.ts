/**
 * What is extending interfaces?
 * It's basically inheritance as it works in object-oriented programming.
 * Difference with type
 * By using interfaces we can apply inheritance, but this is not the case with type.
 */

export interface BaseModel {
  readonly id: string | number;
  createdAt: Date;
  updatedAt: Date;
}
