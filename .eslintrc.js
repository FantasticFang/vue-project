module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        // Only allow debugger in development
        'no-debugger': process.env.PRE_COMMIT ? 'error' : 'off',
        // Only allow `console.log` in development
        'no-console': process.env.PRE_COMMIT ? ['error', { allow: ['warn', 'error'] }] : 'off',
        'vue/array-bracket-spacing': 'error',
        'vue/arrow-spacing': 'error',
        'vue/block-spacing': 'error',
        'vue/brace-style': 'error',
        'vue/camelcase': 'error',
        'vue/comma-dangle': ['error', 'always-multiline'],
        'vue/component-name-in-template-casing': 'error',
        'vue/dot-location': ['error', 'property'],
        'vue/eqeqeq': 'error',
        'vue/key-spacing': 'error',
        'vue/keyword-spacing': 'error',
        'vue/no-boolean-default': ['error', 'default-false'],
        'vue/no-deprecated-scope-attribute': 'error',
        'vue/no-empty-pattern': 'error',
        'vue/object-curly-spacing': ['error', 'always'],
        'vue/padding-line-between-blocks': 'error',
        'vue/space-infix-ops': 'error',
        'vue/space-unary-ops': 'error',
        'vue/v-on-function-call': 'error',
        'vue/v-slot-style': [
            'error',
            {
                atComponent: 'v-slot',
                default: 'v-slot',
                named: 'longform',
            },
        ],
        'vue/valid-v-slot': 'error',
        // 强制驼峰命名
        'camelcase': [0, {
            'properties': 'always'
        }],
        // 缩进风格
        'indent': [2, 2, {
            // 强制switch中case的缩进
            'SwitchCase': 1
        }],
        "eqeqeq": 2,
        "quotes": [2, "single"]
    }
};