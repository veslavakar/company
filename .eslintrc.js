module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files":
                ["*.ts", "*.tsx", "*.js"]
            ,
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        ecmaFeatures: {
            jsx: true,
            tsx: true
        },
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "jsx-a11y",
        "import",
        "react-hooks"
    ],
    "rules": {
        quotes: [
            "error",
            "double",
            {
                allowTemplateLiterals: true
            }
        ]
        // "arrow-body-style": ["error", "as-needed"],
        //"react/self-closing-comp": ["error", { "component": true, "html": true }],
        //"space-before-function-paren": ["error",{anonymous:"always", named:"error"}]
    },

}
