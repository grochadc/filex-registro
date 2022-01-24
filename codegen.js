module.exports = {
  schema: "http://filex-database.herokuapp.com/",
  documents: "src/**/!(*.d).{ts,tsx}",
  generates: {
    "./src/testutils/generatedMocks.js": {
      plugins: ["apollo-typed-documents/lib/codegenApolloMock"],
    },
    "./src/generated/grapqhl-types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      "./src/generated/schema.json": {
        plugins: ["introspection"],
      },
    },
  },
};
