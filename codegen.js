module.exports = {
  schema: "http://filex-database.herokuapp.com/",
  documents: "src/**/!(*.d).{ts,tsx}",
  generates: {
    './src/testutils/generatedMocks.js': {
      plugins: [
        'apollo-typed-documents/lib/codegenApolloMock'
      ]
    },
    './src/__generated__/grapqhl-types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ],
      './src/__generated__/schema.json': {
        plugins: ['introspection'],
      }
    }
  }
}