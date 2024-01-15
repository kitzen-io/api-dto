import { ITradeEntity } from '../../trade';
import IUserEntity from './user-entity.interface';

export interface IFeedbackEntity {
  id: number;
  isPositive: boolean;
  message: string;
  actedUserId: string;
  userId: string;
  actedUser: IUserEntity;
  user: IUserEntity;
  createdAt: Date;
  updatedAt: Date;
  trade: ITradeEntity;
  tradeId: string;
}
