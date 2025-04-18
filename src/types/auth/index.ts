export interface RegisterUserInput {
  uid: string;
  password: string;
}

export interface RegisterUserResponse {
  token: string;
  user: IData;
}

interface IData {
  uid: string;
  hashedId: string;
}
