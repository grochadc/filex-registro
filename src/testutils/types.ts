export type Mock<DataType> = {
  request: { query: any; variables?: any };
  result: { errors?: any[]; data?: DataType };
};
