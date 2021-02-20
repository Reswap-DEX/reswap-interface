import { Currency, ETHER, Token } from '@reswap/sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'FTM'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
