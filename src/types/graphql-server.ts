import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: "Query";
  registeringLevels: Array<Maybe<Scalars["Int"]>>;
  applicant: Applicant;
  schedule: Schedule;
};

export type QueryRegisteringLevelsArgs = {
  course: Scalars["String"];
};

export type QueryApplicantArgs = {
  codigo: Scalars["ID"];
};

export type QueryScheduleArgs = {
  id: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  registerStudent: RegisterResponse;
  saveRegisteringLevels: Array<Maybe<Scalars["String"]>>;
};

export type MutationRegisterStudentArgs = {
  input?: Maybe<StudentInput>;
};

export type MutationSaveRegisteringLevelsArgs = {
  levels: Array<Maybe<Scalars["String"]>>;
  course: Scalars["String"];
};

export type Applicant = {
  __typename?: "Applicant";
  codigo: Scalars["ID"];
  nombre: Scalars["String"];
  apellido_materno: Scalars["String"];
  apellido_paterno: Scalars["String"];
  genero: Scalars["String"];
  carrera: Scalars["String"];
  ciclo: Scalars["String"];
  telefono: Scalars["String"];
  email: Scalars["String"];
  nivel: Scalars["String"];
  curso: Scalars["String"];
  externo: Scalars["Boolean"];
  registering: Scalars["Boolean"];
  schedules: Array<Maybe<Schedule>>;
};

export type Schedule = {
  __typename?: "Schedule";
  group: Scalars["String"];
  teacher: Scalars["String"];
  chat?: Maybe<Scalars["String"]>;
  classroom?: Maybe<Scalars["String"]>;
  sesiones?: Maybe<Scalars["String"]>;
  time?: Maybe<Scalars["String"]>;
  serialized: Scalars["String"];
};

export type ScheduleSerializedArgs = {
  options: SerializedOptions;
};

export type SerializedOptions = {
  group?: Maybe<Scalars["Boolean"]>;
  teacher?: Maybe<Scalars["Boolean"]>;
  time?: Maybe<Scalars["Boolean"]>;
};

export type StudentInput = {
  codigo: Scalars["ID"];
  nombre: Scalars["String"];
  apellido_materno: Scalars["String"];
  apellido_paterno: Scalars["String"];
  genero: Scalars["String"];
  carrera: Scalars["String"];
  ciclo: Scalars["String"];
  telefono: Scalars["String"];
  email: Scalars["String"];
  nivel: Scalars["String"];
  grupo: Scalars["String"];
  externo: Scalars["Boolean"];
  curso: Scalars["String"];
};

export type RegisterResponse = {
  __typename?: "RegisterResponse";
  codigo: Scalars["ID"];
  nombre: Scalars["String"];
  apellido_materno: Scalars["String"];
  apellido_paterno: Scalars["String"];
  genero: Scalars["String"];
  carrera: Scalars["String"];
  ciclo: Scalars["String"];
  telefono: Scalars["String"];
  email: Scalars["String"];
  nivel: Scalars["String"];
  grupo: Scalars["String"];
  schedule: Schedule;
};

export type GetLevelsRegisteringQueryVariables = Exact<{
  course: Scalars["String"];
}>;

export type GetLevelsRegisteringQuery = {
  __typename?: "Query";
  english: Array<Maybe<number>>;
  french: Array<Maybe<number>>;
};

export type SaveLevelsMutationVariables = Exact<{
  levels: Array<Maybe<Scalars["String"]>> | Maybe<Scalars["String"]>;
  course: Scalars["String"];
}>;

export type SaveLevelsMutation = {
  __typename?: "Mutation";
  saveRegisteringLevels: Array<Maybe<string>>;
};

export const GetLevelsRegisteringDocument = gql`
  query getLevelsRegistering($course: String!) {
    english: registeringLevels(course: $course)
  }
`;

/**
 * __useGetLevelsRegisteringQuery__
 *
 * To run a query within a React component, call `useGetLevelsRegisteringQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLevelsRegisteringQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLevelsRegisteringQuery({
 *   variables: {
 *      course: // value for 'course'
 *   },
 * });
 */
export function useGetLevelsRegisteringQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetLevelsRegisteringQuery,
    GetLevelsRegisteringQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetLevelsRegisteringQuery,
    GetLevelsRegisteringQueryVariables
  >(GetLevelsRegisteringDocument, options);
}
export function useGetLevelsRegisteringLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLevelsRegisteringQuery,
    GetLevelsRegisteringQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetLevelsRegisteringQuery,
    GetLevelsRegisteringQueryVariables
  >(GetLevelsRegisteringDocument, options);
}
export type GetLevelsRegisteringQueryHookResult = ReturnType<
  typeof useGetLevelsRegisteringQuery
>;
export type GetLevelsRegisteringLazyQueryHookResult = ReturnType<
  typeof useGetLevelsRegisteringLazyQuery
>;
export type GetLevelsRegisteringQueryResult = Apollo.QueryResult<
  GetLevelsRegisteringQuery,
  GetLevelsRegisteringQueryVariables
>;
export const SaveLevelsDocument = gql`
  mutation saveLevels($levels: [String]!, $course: String!) {
    saveRegisteringLevels(levels: $levels, course: $course)
  }
`;
export type SaveLevelsMutationFn = Apollo.MutationFunction<
  SaveLevelsMutation,
  SaveLevelsMutationVariables
>;

/**
 * __useSaveLevelsMutation__
 *
 * To run a mutation, you first call `useSaveLevelsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveLevelsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveLevelsMutation, { data, loading, error }] = useSaveLevelsMutation({
 *   variables: {
 *      levels: // value for 'levels'
 *      course: // value for 'course'
 *   },
 * });
 */
export function useSaveLevelsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SaveLevelsMutation,
    SaveLevelsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SaveLevelsMutation, SaveLevelsMutationVariables>(
    SaveLevelsDocument,
    options
  );
}
export type SaveLevelsMutationHookResult = ReturnType<
  typeof useSaveLevelsMutation
>;
export type SaveLevelsMutationResult = Apollo.MutationResult<
  SaveLevelsMutation
>;
export type SaveLevelsMutationOptions = Apollo.BaseMutationOptions<
  SaveLevelsMutation,
  SaveLevelsMutationVariables
>;
