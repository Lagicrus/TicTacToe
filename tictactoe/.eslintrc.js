const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  extends: [
    "react-app",
    "react-app/jest"
  ],

  env: {
    es6: true,
    browser: true
  },

  rules: {
    indent: [WARN, 2, {SwitchCase: 1}],
    "arrow-parens": [WARN, "always"],
    "no-async-promise-executor": ERROR,
    "no-await-in-loop": WARN,
    "no-misleading-character-class": WARN,
    "no-prototype-builtins": OFF,
    "no-template-curly-in-string": WARN,
    "require-atomic-updates": ERROR,
    "valid-jsdoc": WARN,
    "accessor-pairs": [WARN, {setWithoutGet: true}],
    "array-callback-return": ERROR,
    complexity: [WARN, 22],
    "consistent-return": ERROR,
    curly: [ERROR, "all"],
    "default-case": WARN,
    "dot-location": [WARN, "property"],
    "dot-notation": WARN,
    eqeqeq: [ERROR, "smart"],
    "guard-for-in": WARN,
    "max-classes-per-file": [WARN, 3],
    "no-alert": OFF,
    "no-caller": WARN,
    "no-console": OFF,
    "no-else-return": WARN,
    "no-empty-function": ERROR,
    "no-eval": OFF,
    "no-extend-native": OFF,
    "no-extra-bind": WARN,
    "no-extra-label": WARN,
    "no-floating-decimal": WARN,
    "no-implicit-coercion": ERROR,
    "no-implicit-globals": OFF,
    "no-implied-eval": OFF,
    "no-invalid-this": OFF,
    "no-iterator": WARN,
    "no-labels": OFF,
    "no-lone-blocks": OFF,
    "no-loop-func": WARN,
    "no-multi-spaces": [WARN, {ignoreEOLComments: true}],
    "no-multi-str": ERROR,
    "no-new": OFF,
    "no-new-func": OFF,
    "no-new-wrappers": ERROR,
    "no-return-assign": ERROR,
    "no-return-await": WARN,
    "no-self-compare": ERROR,
    "no-sequences": ERROR,
    "no-throw-literal": WARN,
    "no-useless-call": WARN,
    "no-useless-return": WARN,
    radix: WARN,
    "require-await": WARN,
    yoda: WARN,
    semi: WARN,
    "no-shadow": WARN,
    "no-shadow-restricted-names": WARN,
    "no-use-before-define": WARN,
    "array-bracket-newline": [ERROR, "consistent"],
    "array-bracket-spacing": ERROR,
    "operator-linebreak": OFF,
    "padding-line-between-statements": OFF,
    "prefer-object-spread": ERROR,
    "quote-props": [WARN, "as-needed"],
    quotes: [WARN, "double", {avoidEscape: true}],
    "no-useless-computed-key": ERROR,

    "react/display-name": OFF,
    "react/jsx-filename-extension": OFF,
    "react/react-in-jsx-scope": OFF,
    "react/jsx-one-expression-per-line": OFF,
    "react/jsx-closing-tag-location": WARN,
    "react/forbid-prop-types": OFF,
    "react/jsx-no-target-blank": [WARN, {allowReferrer: true}],
    "react/no-children-prop": OFF,
    "react/jsx-boolean-value": ERROR,
    "react/jsx-pascal-case": WARN,
    "jsx-a11y/img-redundant-alt": ERROR,
    "react/jsx-closing-bracket-location": ERROR,
    "react/jsx-tag-spacing": OFF,
    "react/jsx-wrap-multilines": ERROR,
    "react/self-closing-comp": ERROR,
    "react-hooks/exhaustive-deps": OFF,
    "comma-dangle": [ERROR, "never"],
    "brace-style": ERROR,
    "object-curly-spacing": [ERROR, "never"],
    "react/prop-types": ERROR
  }
};
