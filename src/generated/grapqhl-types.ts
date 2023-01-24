import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AnswerOption = {
  __typename?: 'AnswerOption';
  correct: Scalars['Boolean'];
  text: Scalars['String'];
};

export type Applicant = {
  __typename?: 'Applicant';
  apellido_materno: Scalars['String'];
  apellido_paterno: Scalars['String'];
  carrera: Scalars['String'];
  cicloIngreso: Scalars['String'];
  codigo: Scalars['ID'];
  email: Scalars['String'];
  externo: Scalars['Boolean'];
  genero: Scalars['String'];
  id: Scalars['ID'];
  institucionalEmail?: Maybe<Scalars['String']>;
  nombre: Scalars['String'];
  telefono: Scalars['String'];
};

export type ApplicantInput = {
  apellido_materno: Scalars['String'];
  apellido_paterno: Scalars['String'];
  carrera: Scalars['String'];
  cicloIngreso: Scalars['String'];
  codigo: Scalars['ID'];
  email: Scalars['String'];
  externo: Scalars['Boolean'];
  genero: Scalars['String'];
  institucionalEmail?: InputMaybe<Scalars['String']>;
  nombre: Scalars['String'];
  telefono: Scalars['String'];
};

export type Carrera = {
  __typename?: 'Carrera';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CloseExamResponse = {
  __typename?: 'CloseExamResponse';
  isClosed: Scalars['Boolean'];
};

export type EnrolledStudent = {
  __typename?: 'EnrolledStudent';
  apellido_materno: Scalars['String'];
  apellido_paterno: Scalars['String'];
  carrera: Scalars['String'];
  ciclo: Scalars['String'];
  codigo: Scalars['ID'];
  curso: Scalars['String'];
  desertor: Scalars['Boolean'];
  email: Scalars['String'];
  externo: Scalars['Boolean'];
  genero: Scalars['String'];
  group: Group;
  institucionalEmail?: Maybe<Scalars['String']>;
  nivel: Scalars['String'];
  nombre: Scalars['String'];
  telefono: Scalars['String'];
};

export enum Filter {
  All = 'ALL',
  Assigned = 'ASSIGNED',
  Nonassigned = 'NONASSIGNED'
}

export type Group = {
  __typename?: 'Group';
  aula: Scalars['String'];
  ciclo: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  teacher: Scalars['String'];
  time: Scalars['String'];
};

export type HomePageMessage = {
  __typename?: 'HomePageMessage';
  active: Scalars['Boolean'];
  message: Scalars['String'];
};

export type MeetLinkInput = {
  active: Scalars['Boolean'];
  id?: InputMaybe<Scalars['ID']>;
  link: Scalars['String'];
  teacher: Scalars['String'];
};

export type MeetLinkInputWithId = {
  active: Scalars['Boolean'];
  id: Scalars['ID'];
  link: Scalars['String'];
  teacher: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  closeExam?: Maybe<CloseExamResponse>;
  databaseSet: Scalars['Int'];
  registerStudent: RegisterResponse;
  removeMeetLink: Scalars['Int'];
  saveOralResults: Scalars['Boolean'];
  saveRegisteringLevels: Array<Scalars['String']>;
  saveWrittenResults: MutationResponse;
  setMeetLink: Scalars['Int'];
  setMeetLinks: Scalars['Int'];
  setPlacementHomePageMessage: Scalars['Boolean'];
};


export type MutationDatabaseSetArgs = {
  input?: InputMaybe<FirebaseInput>;
};


export type MutationRegisterStudentArgs = {
  groupId: Scalars['String'];
  input: StudentInput;
};


export type MutationRemoveMeetLinkArgs = {
  link: MeetLinkInputWithId;
};


export type MutationSaveOralResultsArgs = {
  input?: InputMaybe<OralResults>;
};


export type MutationSaveRegisteringLevelsArgs = {
  course: Scalars['String'];
  levels: Array<Scalars['String']>;
};


export type MutationSaveWrittenResultsArgs = {
  input?: InputMaybe<WrittenResultsInput>;
};


export type MutationSetMeetLinkArgs = {
  link: MeetLinkInputWithId;
};


export type MutationSetMeetLinksArgs = {
  links: Array<MeetLinkInput>;
};


export type MutationSetPlacementHomePageMessageArgs = {
  input: PlacementHomePageMessageInput;
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  id: Scalars['String'];
  meetLink?: Maybe<Scalars['String']>;
};

export type OralResults = {
  id: Scalars['ID'];
  nivelFinal: Scalars['Int'];
  nivelOral: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type PlacementHomePageMessageInput = {
  active: Scalars['Boolean'];
  message: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  applicant: Applicant;
  carreras: Array<Carrera>;
  database?: Maybe<Array<Maybe<Scalars['String']>>>;
  group: Group;
  groups: Array<Group>;
  isClosed: Scalars['Boolean'];
  masterlist: Array<EnrolledStudent>;
  meetLinks: Array<MeetLink>;
  placementHomePageMessage: HomePageMessage;
  registeringLevels: Array<Scalars['String']>;
  section: Section;
  testResults: Array<Maybe<TestResults>>;
  unenrolledStudent: UnenrolledStudent;
};


export type QueryApplicantArgs = {
  codigo: Scalars['ID'];
};


export type QueryDatabaseArgs = {
  ref: Scalars['String'];
};


export type QueryGroupArgs = {
  id: Scalars['ID'];
};


export type QueryMasterlistArgs = {
  ciclo: Scalars['String'];
};


export type QueryRegisteringLevelsArgs = {
  course: Scalars['String'];
};


export type QuerySectionArgs = {
  course: Scalars['String'];
  level: Scalars['Int'];
};


export type QueryTestResultsArgs = {
  filter?: InputMaybe<Filter>;
};


export type QueryUnenrolledStudentArgs = {
  codigo: Scalars['ID'];
};

export type Question = {
  __typename?: 'Question';
  options: Array<AnswerOption>;
  title: Scalars['String'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  apellido_materno: Scalars['String'];
  apellido_paterno: Scalars['String'];
  carrera: Scalars['String'];
  ciclo: Scalars['String'];
  codigo: Scalars['ID'];
  email: Scalars['String'];
  genero: Scalars['String'];
  group: Group;
  grupo: Scalars['String'];
  nivel: Scalars['String'];
  nombre: Scalars['String'];
  telefono: Scalars['String'];
};

export type Section = {
  __typename?: 'Section';
  course: Scalars['String'];
  pageInfo?: Maybe<PageInfo>;
  questions: Array<Question>;
};

export type SerializedOptions = {
  group?: InputMaybe<Scalars['Boolean']>;
  teacher?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<Scalars['Boolean']>;
};

export type StudentInput = {
  cicloActual: Scalars['String'];
  codigo: Scalars['ID'];
  curso: Scalars['String'];
  grupo: Scalars['String'];
  nivel: Scalars['Int'];
};

export type TestResults = {
  __typename?: 'TestResults';
  apellidoMaterno: Scalars['String'];
  apellidoPaterno: Scalars['String'];
  carrera: Scalars['String'];
  ciclo: Scalars['String'];
  codigo: Scalars['String'];
  curso: Scalars['String'];
  email: Scalars['String'];
  externo: Scalars['Boolean'];
  generated_id: Scalars['String'];
  genero: Scalars['String'];
  id: Scalars['ID'];
  institutionalEmail?: Maybe<Scalars['String']>;
  meetLink?: Maybe<Scalars['String']>;
  nivelEscrito: Scalars['Int'];
  nivelFinal?: Maybe<Scalars['Int']>;
  nivelOral?: Maybe<Scalars['Int']>;
  nombre: Scalars['String'];
  reubicacion: Scalars['Boolean'];
  telefono: Scalars['String'];
};

export type UnenrolledStudent = {
  __typename?: 'UnenrolledStudent';
  apellido_materno: Scalars['String'];
  apellido_paterno: Scalars['String'];
  carrera: Scalars['String'];
  cicloIngreso: Scalars['String'];
  codigo: Scalars['ID'];
  curso: Scalars['String'];
  desertor?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  externo: Scalars['Boolean'];
  genero: Scalars['String'];
  groups: Array<Maybe<Group>>;
  institucionalEmail?: Maybe<Scalars['String']>;
  nivel: Scalars['Int'];
  nombre: Scalars['String'];
  registeredGroup?: Maybe<Group>;
  registering: Scalars['Boolean'];
  telefono: Scalars['String'];
};

export type WrittenResultsInput = {
  apellidoMaterno: Scalars['String'];
  apellidoPaterno: Scalars['String'];
  carrera: Scalars['String'];
  ciclo: Scalars['String'];
  codigo: Scalars['String'];
  curso: Scalars['String'];
  email: Scalars['String'];
  externo: Scalars['Boolean'];
  genero: Scalars['String'];
  institucionalEmail?: InputMaybe<Scalars['String']>;
  nivelEscrito: Scalars['Int'];
  nombre: Scalars['String'];
  reubicacion: Scalars['Boolean'];
  telefono: Scalars['String'];
};

export type FirebaseInput = {
  data: Array<InputMaybe<Scalars['String']>>;
  ref: Scalars['String'];
};

export type MeetLink = {
  __typename?: 'meetLink';
  active: Scalars['Boolean'];
  id: Scalars['ID'];
  link: Scalars['String'];
  teacher: Scalars['String'];
};

export type RegisterStudentMutationVariables = Exact<{
  codigo: Scalars['ID'];
  nivel: Scalars['Int'];
  curso: Scalars['String'];
  groupId: Scalars['String'];
  group: Scalars['String'];
}>;


export type RegisterStudentMutation = { __typename?: 'Mutation', registerStudent: { __typename?: 'RegisterResponse', nombre: string, group: { __typename?: 'Group', name: string, time: string, aula: string, teacher: string } } };

export type GetScheduleQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetScheduleQuery = { __typename?: 'Query', group: { __typename?: 'Group', name: string, time: string, aula: string } };

export type SaveLevelsMutationVariables = Exact<{
  levels: Array<Scalars['String']> | Scalars['String'];
  course: Scalars['String'];
}>;


export type SaveLevelsMutation = { __typename?: 'Mutation', saveRegisteringLevels: Array<string> };

export type GetLevelsRegisteringQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLevelsRegisteringQuery = { __typename?: 'Query', english: Array<string>, french: Array<string> };

export type GetMasterListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMasterListQuery = { __typename?: 'Query', masterlist: Array<{ __typename?: 'EnrolledStudent', codigo: string, nombre: string, apellido_paterno: string, apellido_materno: string, genero: string, ciclo: string, carrera: string, externo: boolean, telefono: string, email: string, curso: string, nivel: string, group: { __typename?: 'Group', name: string } }> };

export type GetApplicantQueryVariables = Exact<{
  codigo: Scalars['ID'];
}>;


export type GetApplicantQuery = { __typename?: 'Query', unenrolledStudent: { __typename?: 'UnenrolledStudent', codigo: string, nombre: string, apellido_materno: string, apellido_paterno: string, genero: string, carrera: string, cicloIngreso: string, telefono: string, email: string, institucionalEmail?: string | null | undefined, nivel: number, curso: string, externo: boolean, registering: boolean, desertor?: boolean | null | undefined, registeredGroup?: { __typename?: 'Group', ciclo: string, name: string, time: string, aula: string, teacher: string } | null | undefined, groups: Array<{ __typename?: 'Group', id: string, ciclo: string, name: string, time: string, aula: string, teacher: string } | null | undefined> } };


export const RegisterStudentDocument = gql`
    mutation RegisterStudent($codigo: ID!, $nivel: Int!, $curso: String!, $groupId: String!, $group: String!) {
  registerStudent(
    groupId: $groupId
    input: {codigo: $codigo, nivel: $nivel, curso: $curso, cicloActual: "2023A", grupo: $group}
  ) {
    nombre
    group {
      name
      time
      aula
      teacher
    }
  }
}
    `;
export type RegisterStudentMutationFn = Apollo.MutationFunction<RegisterStudentMutation, RegisterStudentMutationVariables>;

/**
 * __useRegisterStudentMutation__
 *
 * To run a mutation, you first call `useRegisterStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerStudentMutation, { data, loading, error }] = useRegisterStudentMutation({
 *   variables: {
 *      codigo: // value for 'codigo'
 *      nivel: // value for 'nivel'
 *      curso: // value for 'curso'
 *      groupId: // value for 'groupId'
 *      group: // value for 'group'
 *   },
 * });
 */
export function useRegisterStudentMutation(baseOptions?: Apollo.MutationHookOptions<RegisterStudentMutation, RegisterStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterStudentMutation, RegisterStudentMutationVariables>(RegisterStudentDocument, options);
      }
export type RegisterStudentMutationHookResult = ReturnType<typeof useRegisterStudentMutation>;
export type RegisterStudentMutationResult = Apollo.MutationResult<RegisterStudentMutation>;
export type RegisterStudentMutationOptions = Apollo.BaseMutationOptions<RegisterStudentMutation, RegisterStudentMutationVariables>;
export const GetScheduleDocument = gql`
    query getSchedule($id: ID!) {
  group(id: $id) {
    name
    time
    aula
  }
}
    `;

/**
 * __useGetScheduleQuery__
 *
 * To run a query within a React component, call `useGetScheduleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetScheduleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetScheduleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetScheduleQuery(baseOptions: Apollo.QueryHookOptions<GetScheduleQuery, GetScheduleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetScheduleQuery, GetScheduleQueryVariables>(GetScheduleDocument, options);
      }
export function useGetScheduleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetScheduleQuery, GetScheduleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetScheduleQuery, GetScheduleQueryVariables>(GetScheduleDocument, options);
        }
export type GetScheduleQueryHookResult = ReturnType<typeof useGetScheduleQuery>;
export type GetScheduleLazyQueryHookResult = ReturnType<typeof useGetScheduleLazyQuery>;
export type GetScheduleQueryResult = Apollo.QueryResult<GetScheduleQuery, GetScheduleQueryVariables>;
export const SaveLevelsDocument = gql`
    mutation saveLevels($levels: [String!]!, $course: String!) {
  saveRegisteringLevels(levels: $levels, course: $course)
}
    `;
export type SaveLevelsMutationFn = Apollo.MutationFunction<SaveLevelsMutation, SaveLevelsMutationVariables>;

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
export function useSaveLevelsMutation(baseOptions?: Apollo.MutationHookOptions<SaveLevelsMutation, SaveLevelsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveLevelsMutation, SaveLevelsMutationVariables>(SaveLevelsDocument, options);
      }
export type SaveLevelsMutationHookResult = ReturnType<typeof useSaveLevelsMutation>;
export type SaveLevelsMutationResult = Apollo.MutationResult<SaveLevelsMutation>;
export type SaveLevelsMutationOptions = Apollo.BaseMutationOptions<SaveLevelsMutation, SaveLevelsMutationVariables>;
export const GetLevelsRegisteringDocument = gql`
    query getLevelsRegistering {
  english: registeringLevels(course: "en")
  french: registeringLevels(course: "fr")
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
 *   },
 * });
 */
export function useGetLevelsRegisteringQuery(baseOptions?: Apollo.QueryHookOptions<GetLevelsRegisteringQuery, GetLevelsRegisteringQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLevelsRegisteringQuery, GetLevelsRegisteringQueryVariables>(GetLevelsRegisteringDocument, options);
      }
export function useGetLevelsRegisteringLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLevelsRegisteringQuery, GetLevelsRegisteringQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLevelsRegisteringQuery, GetLevelsRegisteringQueryVariables>(GetLevelsRegisteringDocument, options);
        }
export type GetLevelsRegisteringQueryHookResult = ReturnType<typeof useGetLevelsRegisteringQuery>;
export type GetLevelsRegisteringLazyQueryHookResult = ReturnType<typeof useGetLevelsRegisteringLazyQuery>;
export type GetLevelsRegisteringQueryResult = Apollo.QueryResult<GetLevelsRegisteringQuery, GetLevelsRegisteringQueryVariables>;
export const GetMasterListDocument = gql`
    query GetMasterList {
  masterlist(ciclo: "2023A") {
    codigo
    nombre
    apellido_paterno
    apellido_materno
    genero
    ciclo
    carrera
    externo
    telefono
    email
    curso
    nivel
    group {
      name
    }
  }
}
    `;

/**
 * __useGetMasterListQuery__
 *
 * To run a query within a React component, call `useGetMasterListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMasterListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMasterListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMasterListQuery(baseOptions?: Apollo.QueryHookOptions<GetMasterListQuery, GetMasterListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMasterListQuery, GetMasterListQueryVariables>(GetMasterListDocument, options);
      }
export function useGetMasterListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMasterListQuery, GetMasterListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMasterListQuery, GetMasterListQueryVariables>(GetMasterListDocument, options);
        }
export type GetMasterListQueryHookResult = ReturnType<typeof useGetMasterListQuery>;
export type GetMasterListLazyQueryHookResult = ReturnType<typeof useGetMasterListLazyQuery>;
export type GetMasterListQueryResult = Apollo.QueryResult<GetMasterListQuery, GetMasterListQueryVariables>;
export const GetApplicantDocument = gql`
    query GetApplicant($codigo: ID!) {
  unenrolledStudent(codigo: $codigo) {
    codigo
    nombre
    apellido_materno
    apellido_paterno
    genero
    carrera
    cicloIngreso
    telefono
    email
    institucionalEmail
    nivel
    curso
    externo
    registering
    desertor
    registeredGroup {
      ciclo
      name
      time
      aula
      teacher
    }
    groups {
      id
      ciclo
      name
      time
      aula
      teacher
    }
  }
}
    `;

/**
 * __useGetApplicantQuery__
 *
 * To run a query within a React component, call `useGetApplicantQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApplicantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApplicantQuery({
 *   variables: {
 *      codigo: // value for 'codigo'
 *   },
 * });
 */
export function useGetApplicantQuery(baseOptions: Apollo.QueryHookOptions<GetApplicantQuery, GetApplicantQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetApplicantQuery, GetApplicantQueryVariables>(GetApplicantDocument, options);
      }
export function useGetApplicantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetApplicantQuery, GetApplicantQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetApplicantQuery, GetApplicantQueryVariables>(GetApplicantDocument, options);
        }
export type GetApplicantQueryHookResult = ReturnType<typeof useGetApplicantQuery>;
export type GetApplicantLazyQueryHookResult = ReturnType<typeof useGetApplicantLazyQuery>;
export type GetApplicantQueryResult = Apollo.QueryResult<GetApplicantQuery, GetApplicantQueryVariables>;