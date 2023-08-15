export default interface IUpdateUserPreferencesRequest {
  instantTradeCreate?: boolean;
  instantTradeStatus?: boolean;
  instantOfferStatus?: boolean;
  emailTradeCreate?: boolean;
  emailTradeStatus?: boolean;
  enableSound?: boolean;
  emailOfferStatus?: boolean;
}
