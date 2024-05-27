import { useI18n } from 'vue-i18n';

export function useValidationRules() {
  const { t } = useI18n();

  const required = (messageKey = 'app-validations.required-value') => (v) => !!v || t(messageKey);

  const minLength = (min, messageKey = 'app-validations.min-length') => 
    (v) => (v && v.length >= min) || t(messageKey, {min});

  const maxLength = (max, messageKey = 'app-validations.maximum-length') => 
    (v) => (v && v.length <= max) || t(messageKey, { max });

  const email = [
    required('email required'),
    (v) => /.+@.+\..+/.test(v) || t('app-validations.invalid-email'),
    (v) => /^[\S]+$/.test(v) || t('app-validations.must-not-contain-spaces'),
  ];

  const password = [
    required('app-validations.password-required'),
    minLength(12, 'app-validations.password-must-contain-at-least-min-characters'),
    (v) => /(?=.*[a-z])/.test(v) || t('app-validations.password-at-least-one-lowercase-letter'),
    (v) => /(?=.*[A-Z])/.test(v) || t('app-validations.password-at-least-one-capital-letter'),
    (v) => /(?=.*[0-9])/.test(v) || t('app-validations.password-at-least-one-digit'),
    (v) => /^[\S]+$/.test(v) || t('app-validations.password-must-not-contain-spaces'),
  ];

  const url = [
    required('app-validations.url-required'),
    (v) => /^(?!http|https|ftp?)(?!:\/\/|www\.?).*\..+$/g.test(v) || t('app-validations.invalid-domain'),
  ];

  const validateAll = (value, ...rules) => {
    for (const rule of rules) {
      const result = rule(value);
      if (result !== true) {
        return result; // Returns the first validation that fails
      }
    }
    return true; // Returns true if all validations pass
  };

  return {
    required,
    minLength,
    maxLength,
    email,
    password,
    url,
    validateAll
  };
}
