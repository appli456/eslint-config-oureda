/**
 * Created by li-rz on 16-9-7.
 */

module.exports = {
    env: {
        node: true,
        browser: true
    },
//     parser: 'babel-eslint',
//     plugins: ['babel'],
//     ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
        jsx: true,
        experimentalObjectRestSpread: true
    },
    rules: {
        // Possible Errors
        "no-empty": "error", // 大括号内不为空
        "no-console": ["warn", {allow: ["time", "timeEnd", "error", "warn"]}],

        // Best Practices
        "no-alert": "error", // 没有alert函数
        "no-else-return": "error", // else内没有return
        "no-eval": "error",
        "no-implied-eval": "error",
        "no-void": "error",
        "no-with": "error",

        // Strict Mode


        // Variables
        "no-catch-shadow": "error", // 没有隐式catch
        "no-undef": ["error", {"typeof": true}],
        "no-undef-init": "error",
        "no-unused-vars": "error",

        // Node.js and CommonJS
        "no-new-require": "error",


        // Stylistic Issues
        "camelcase": "off", // 驼峰式命名
        "require-jsdoc": ["warn", {
            "require": {
            "FunctionDeclaration": true,
            "MethodDefinition": true,
            "ClassDeclaration": true
        },
}],
        // ECMAScript 6
        "arrow-body-style": ["warn", "always"],
        "arrow-parens": ["error", "always"],
        "no-const-assign": "warn"

    }
};
