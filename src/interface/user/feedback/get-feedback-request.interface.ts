export default interface IGetFeedbackRequest {
  userId: string;
  sort?: string;
  order?: 'ASC' | 'DESC';
}
