<template>
  <b-container>
    <b-col md="6" offset-md="3">
      <h1>Task</h1>
      <b-form v-on:submit.prevent="convertAmountToZAR">
        <b-form-group id="input-group-1" label="Amount:" label-for="input-1" label-align="left">
          <b-form-input
            id="input-1"
            v-model="form.amount"
            type="text"
            placeholder="Enter amount with 2 decimal places e.g 1.00"
          ></b-form-input>
          <b-alert variant="danger" :show="!!form.errors.amount">
            {{ form.errors.amount }}
          </b-alert>
        </b-form-group>

        <b-form-group id="input-group-2" label="Currency:" label-for="input-2" label-align="left">
        <b-form-select
          id="input-2"
          v-model="form.currency"
          :options="currencies"
        ></b-form-select>
        <b-alert variant="danger" :show="!!form.errors.currency">
          {{ form.errors.currency }}
        </b-alert>
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
        class="float-left"
      >Submit</b-button>
      <div class="clearfix"></div>

      </b-form>
      <b-card v-if="submited" class="mt-3" header="The amount in ZAR">
        <b-alert variant="success" show>{{ amountInZAR }}</b-alert>
      </b-card>
    </b-col>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Task',
  data() {
    return {
      form: {
        amount: '',
        currency: null,
        errors: {
          amount: '',
          currency: '',
        },
      },
      submited: false,
    };
  },

  methods: {
    /**
     * A function that checks if the input has 2 decimal places.
     *
     * parameters:
     *  amount:
     *    An amount to convert
     *
     * Returns boolean, true or false.
     */
    validateInput(amount) {
      const forceTwoDecimals = /\d+(?:\.\d{2}?)$/g;
      return forceTwoDecimals.test(amount);
    },

    /**
     * A function that converts from any currency to ZAR.
     * USD currency is used as the base currency.
     */
    convertAmountToZAR() {
      if (!this.form.amount) {
        this.form.errors.amount = 'Amount is required.';
      }
      if (!this.form.currency) {
        this.form.errors.currency = 'Currency is required.';
      }
      if (this.form.amount && !this.validateInput(this.form.amount)) {
        this.form.errors.amount = 'Amount must have 2 decimal places.';
      }
      if (this.form.currency && this.form.amount && this.validateInput(this.form.amount)) {
        this.form.errors.amount = '';
        this.form.errors.currency = '';
        this.submited = true;
      }
    },
  },

  computed: mapState({
    // The list of currencies.
    currencies: state => state.currencies.currencies,
    // The an object of rate currencies.
    rateCurrencies: state => state.currencies.rateCurrencies,
    // The amount in ZAR.
    amountInZAR() {
      const currencyRate = this.rateCurrencies[this.form.currency];
      return (
        this.form.amount * (this.rateCurrencies.ZAR / currencyRate)
      ).toFixed(2);
    },
  }),

  created() {
    // Action dispatch for loading currencies
    this.$store.dispatch('currencies/loadCurrencies');
    // Action dispatch for loading rate currencies
    this.$store.dispatch('currencies/loadRateCurrencies');
  },
};
</script>
