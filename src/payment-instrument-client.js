export class PaymentInstrumentClient {
  constructor(enrich) { this.enrich = enrich; }

  async enrichForCheckout({checkoutId, merchantId, paymentMethod}) {
    try {
      return await this.enrich({checkoutId, merchantId, paymentMethod});
    } catch (error) {
      const unavailable = new Error('PAYMENT_INSTRUMENT_UNAVAILABLE');
      unavailable.cause = error;
      throw unavailable;
    }
  }
}
