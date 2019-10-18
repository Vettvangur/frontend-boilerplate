module.exports = {
  extends: 'stylelint-config-primer',
  ignoreFiles: "**/*.tsx",
  rules: {
    'color-named': ['never', { ignore: ["inside-function"] }],
    'max-empty-lines': 5,
    'selector-max-type': [0, {
      'ignoreTypes': ["svg", "path"],
    }],
    'max-nesting-depth': [1, {
      'ignore': ["pseudo-classes", "blockless-at-rules"],
      'ignoreAtRules': ["svg", "path"],
    }],
    'media-feature-name-blacklist': ["max-width"],
    'number-leading-zero': null,
    'plugin/no-unsupported-browser-features': null,
    'selector-class-pattern': null,
    'string-quotes': 'single',
    'at-rule-blacklist': null,
    'no-missing-end-of-source-newline': null,
    "primer/selector-no-utility": null,
    "color-hex-case": null,
  },
};
