import moment from '../node_modules/moment/src/moment.js';
// @namespace etoolsFileMixins
window.EtoolsFileMixins = window.EtoolsFileMixins || {};

/**
 * @polymer
 * @mixinFunction
 */
EtoolsFileMixins.DateMixin = baseClass => class extends baseClass { // eslint-disable-line

  /**
   * Format date string to any format supported by momentjs
   */
  prettyDate(dateInput, format) {
    if (!format) {
      format = 'D MMM YYYY';
    }
    let date;
    if (dateInput instanceof Date) {
      date = dateInput;
    } else {
      date = new Date(dateInput);
    }

    if (date.toString() !== 'Invalid Date') {
      // using moment.utc() ensures that the date will not be changed no matter timezone the user has set
      return moment.utc(date).format(format);
    }

    return '';
  }
};
