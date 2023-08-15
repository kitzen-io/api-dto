export default interface IGetAllUsersRequest {
  id?: string;
  name?: string;
  email?: string;
  isEmailVerified?: boolean;
  countryCode?: string;
  tradesCount?: string;
  volume?: string;
  lastOnline?: string;
  sort?: string;
  order?: string;
}
