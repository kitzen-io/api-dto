export interface IPaginationDto {
  page: number;
  perPage: number;
}

export interface IPaginationResponseMeta {
  totalItems: number;
  itemCount: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
}

export interface IPaginationResponse<T> {
  data: T[];
  meta: IPaginationResponseMeta;
}

export interface IPaginationPartialResponse<T> {
  data: Partial<T>[];
  meta: IPaginationResponseMeta;
}
