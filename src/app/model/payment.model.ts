import {User} from './user.model';

export class Payment {
  id: number;
  code: number;
  name: string;
  phone: string;
  address: string;
  email: string;
  total: number;
  description: string;
  date: string;
  method: string;
  status = ['Đang chờ xử lý', 'Đang giao hàng', 'Giao hàng thành công'];
  user: User;
}
