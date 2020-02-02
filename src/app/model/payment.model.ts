import {User} from './user.model';

export class Payment {
  id: number;
  name: string;
  phone: string;
  address: string;
  email: string;
  total: number;
  description: string;
  date: string;
  method: string;
  status: string;
  user: User;
}
