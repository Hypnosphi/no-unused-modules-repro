module.exports = {
    parser: 'babel-eslint',
    plugins: ['import'],
    rules: {
        'import/no-unused-modules': ['error', {unusedExports: true}]
    }
};
