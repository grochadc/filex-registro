module.exports = {
  schema: "http://localhost:5000/",
  documents: "src/**/!(*.d).{ts,tsx}",
  generates: {
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