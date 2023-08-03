export interface ICurrencyDto {
  id: number
  name: string
  rate: number
  type: string
}

export type GetPaymentCurrencyResponse = ICurrencyDto[];
