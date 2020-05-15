module.exports = {
    root: true,
    parser: "babel-eslint",
    extends: [
        "airbnb",
        "plugin:flowtype/recommended",
        "plugin:jest/recommended",
    ],
    globals: {
        "stripe": true
    },
    plugins: [
        "react",
        "react-hooks",
        "flowtype",
        "import",
        "jest",
        "react-hooks"
    ],
    // TODO: We need to split the enviornment between
    // web and mobile
    env: {
        browser: true,
        node: true,
        "jest/globals": true,
    },
    parserOptions: {
        "sourceType": "module",
        "codeFrame": true,
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    rules: {
        "camelcase": [
            2, {
                ignoreDestructuring: true,
                properties: 'never',
            }
        ],
        "react/sort-comp": [
            1, {
                order: [
                    'static-methods',
                    'lifecycle',
                    'everything-else',
                    'render'
                ],
            }
        ],
        "no-param-reassign": [
            1, {
                "ignorePropertyModificationsFor": ["draft"],
            }
        ],
        "jsx-a11y/accessible-emoji": [
            0, {}
        ],
        "jsx-a11y/anchor-is-valid": [
            0, {}
        ],
        "jsx-a11y/click-events-have-key-events": [
            0, {}
        ],
        "jsx-a11y/no-static-element-interactions": [
            0, {}
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/require-default-props": [
            0,
            { forbidDefaultForRequired: false }
        ],
        "react/default-props-match-prop-types": [
            'error',
            { allowRequiredDefaults: true }
        ],
        "react/prop-types": [2, {}],
        "react/prefer-stateless-function": [
            1, {
                "ignorePureComponents": true
            }
        ],
        "react/forbid-prop-types": [0, {
            "forbid": []
        }],
        "import/extensions": [1, "never", {
            "svg": "always"
        }],
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": true,
                "optionalDependencies": false,
                "peerDependencies": false
            }
        ],
    },
}