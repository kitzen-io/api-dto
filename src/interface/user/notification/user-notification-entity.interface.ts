import { UserNotificationKeyEnum } from '../../../enum';

export default interface IUserNotificationEntity<T> {
  id: number;
  userId: string;
  key: UserNotificationKeyEnum;
  seen: boolean;
  data: T;
  createdAt: Date;
  updatedAt: Date;
}
