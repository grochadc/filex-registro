export type Mock = {
  request: { query: any; variables?: any };
  result: { errors?: any[]; data?: any };
};
