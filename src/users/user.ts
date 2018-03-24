export interface User {
  id: string,
  name: string,
  status: Status
}

export enum Status {
  active = "ACTIVE",
  pending = "PENDING"
}
