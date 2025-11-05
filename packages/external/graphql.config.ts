/** @type {import("@graphql-codegen/cli").CodegenConfig} */
module.exports = {
  schema: 'http://localhost:4000',
  documents: 'src/**/*.{ts,tsx,gql}',
  generates: {
    'src/libraries/graphql/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
};
