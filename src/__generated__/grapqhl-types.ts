import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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
  text: Scalars['String'];
  correct: Scalars['Boolean'];
};

export type Applicant = {
  __typename?: 'Applicant';
  codigo: Scalars['ID'];
  nombre: Scalars['String'];
  apellido_materno: Scalars['String'];
  apellido_paterno: Scalars['String'];
  genero: Scalars['String'];
  carrera: Scalars['String'];
  ciclo: Scalars['String'];
  telefono: Scalars['String'];
  email: Scalars['String'];
  nivel: Scalars['String'];
  curso: Scalars['String'];
  externo: Scalars['Boolean'];
  desertor: Scalars['Boolean'];
  registering: Scalars['Boolean'];
  schedules: Array<Schedule>;
  registeredSchedule?: Maybe<Schedule>;
};

export type AttendingStudent = {
  codigo: Scalars['String'];
  nombre: Scalars['String'];
  apellido_paterno: Scalars['String'];
  apellido_materno?: Maybe<Scalars['String']>;
  nivel: Scalars['Int'];
  grupo: Scalars['String'];
  workshop: Scalars['String'];
  teacher: Scalars['String'];
  attended: Scalars['Boolean'];
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

export type Grades = {
  __typename?: 'Grades';
  codigo: Scalars['String'];
  nombre: Scalars['String'];
  apellido_paterno: Scalars['String'];
  apellido_materno: Scalars['String'];
  carrera: Scalars['String'];
  email: Scalars['String'];
  midterm_grammar: Scalars['String'];
  midterm_oral: Scalars['String'];
  final_grammar: Scalars['String'];
  final_oral: Scalars['String'];
  workshops: Scalars['String'];
  cultural_task: Scalars['String'];
  mini_project: Scalars['String'];
  reading: Scalars['String'];
  listening: Scalars['String'];
  final: Scalars['String'];
};

export type MeetLinkInput = {
  id?: Maybe<Scalars['ID']>;
  teacher: Scalars['String'];
  link: Scalars['String'];
  active: Scalars['Boolean'];
};

export type MeetLinkInputWithId = {
  id: Scalars['ID'];
  teacher: Scalars['String'];
  link: Scalars['String'];
  active: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  saveWrittenResults?: Maybe<MutationResponse>;
  closeExam?: Maybe<CloseExamResponse>;
  setRows: Scalars['Boolean'];
  setMeetLinks?: Maybe<Scalars['Int']>;
  setMeetLink?: Maybe<Scalars['Int']>;
  removeMeetLink?: Maybe<Scalars['Int']>;
  databaseSet: Scalars['Int'];
  registerStudent: RegisterResponse;
  saveRegisteringLevels: Array<Scalars['String']>;
  makeWorkshopReservation: ReturnedReservation;
  saveWorkshopsAttendance: SaveWorkshopsAttendanceResponse;
  resetReservations: Scalars['Boolean'];
  setWorkshopLink: Scalars['Boolean'];
};


export type MutationSaveWrittenResultsArgs = {
  input?: Maybe<WrittenResultsInput>;
};


export type MutationSetRowsArgs = {
  input?: Maybe<WrittenResultsInput>;
};


export type MutationSetMeetLinksArgs = {
  links: Array<Maybe<MeetLinkInput>>;
};


export type MutationSetMeetLinkArgs = {
  link: MeetLinkInputWithId;
};


export type MutationRemoveMeetLinkArgs = {
  link: MeetLinkInputWithId;
};


export type MutationDatabaseSetArgs = {
  input?: Maybe<FirebaseInput>;
};


export type MutationRegisterStudentArgs = {
  input: StudentInput;
};


export type MutationSaveRegisteringLevelsArgs = {
  levels: Array<Scalars['String']>;
  course: Scalars['String'];
};


export type MutationMakeWorkshopReservationArgs = {
  input: ReservationInput;
};


export type MutationSaveWorkshopsAttendanceArgs = {
  input?: Maybe<Array<AttendingStudent>>;
  workshop: SavedAttendanceWorkshopInfo;
};


export type MutationSetWorkshopLinkArgs = {
  option_id: Scalars['String'];
  teacher_id: Scalars['String'];
  link: Scalars['String'];
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  status: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
  error?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meetLink?: Maybe<Scalars['String']>;
};

export type Option = {
  __typename?: 'Option';
  id: Scalars['ID'];
  day: Scalars['String'];
  time: Scalars['String'];
  teacher: Scalars['String'];
  workshop: Scalars['String'];
  url: Scalars['String'];
  zoom_id?: Maybe<Scalars['String']>;
  available: Scalars['Boolean'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  carreras?: Maybe<Array<Maybe<Carrera>>>;
  isClosed: Scalars['Boolean'];
  logIn: Scalars['Int'];
  logOut: Scalars['Int'];
  meetLinks: Array<Maybe<MeetLink>>;
  section?: Maybe<Section>;
  database?: Maybe<Array<Maybe<Scalars['String']>>>;
  registeringLevels: Array<Scalars['String']>;
  applicant: Applicant;
  schedule: Schedule;
  teacher: Teacher;
  student: Student;
  workshops: Array<Maybe<Workshop>>;
  getWorkshopsByCategory: Workshop;
  studentReservation?: Maybe<StudentReservation>;
  grades: Grades;
};


export type QuerySectionArgs = {
  course: Scalars['String'];
  level: Scalars['Int'];
};


export type QueryDatabaseArgs = {
  ref: Scalars['String'];
};


export type QueryRegisteringLevelsArgs = {
  course: Scalars['String'];
};


export type QueryApplicantArgs = {
  codigo: Scalars['ID'];
};


export type QueryScheduleArgs = {
  id: Scalars['String'];
};


export type QueryTeacherArgs = {
  id: Scalars['ID'];
};


export type QueryStudentArgs = {
  codigo: Scalars['ID'];
};


export type QueryGetWorkshopsByCategoryArgs = {
  category: Scalars['String'];
};


export type QueryStudentReservationArgs = {
  codigo: Scalars['ID'];
};


export type QueryGradesArgs = {
  codigo: Scalars['String'];
};

export type Question = {
  __typename?: 'Question';
  title: Scalars['String'];
  options?: Maybe<Array<Maybe<AnswerOption>>>;
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  codigo: Scalars['ID'];
  nombre: Scalars['String'];
  apellido_materno: Scalars['String'];
  apellido_paterno: Scalars['String'];
  genero: Scalars['String'];
  carrera: Scalars['String'];
  ciclo: Scalars['String'];
  telefono: Scalars['String'];
  email: Scalars['String'];
  nivel: Scalars['String'];
  grupo: Scalars['String'];
  schedule: Schedule;
};

export type Reservation = {
  __typename?: 'Reservation';
  id: Scalars['ID'];
  codigo: Scalars['String'];
  nombre: Scalars['String'];
  apellido_paterno: Scalars['String'];
  apellido_materno: Scalars['String'];
  nivel: Scalars['Int'];
  grupo: Scalars['String'];
  timestamp: Scalars['String'];
  option: ReservationOption;
  option_id: Scalars['String'];
  url: Scalars['String'];
  zoom_id?: Maybe<Scalars['String']>;
};

export type ReservationInput = {
  codigo: Scalars['ID'];
  option_id: Scalars['ID'];
};

export type ReservationOption = {
  __typename?: 'ReservationOption';
  id: Scalars['ID'];
  teacher: Scalars['String'];
  time: Scalars['String'];
  day: Scalars['String'];
  url: Scalars['String'];
  zoom_id?: Maybe<Scalars['String']>;
  workshop: Scalars['String'];
  available: Scalars['Boolean'];
};

export type ReturnedReservation = {
  __typename?: 'ReturnedReservation';
  id: Scalars['ID'];
  timestamp: Scalars['String'];
  codigo: Scalars['ID'];
  nombre: Scalars['String'];
  teacher: Scalars['String'];
  time: Scalars['String'];
  day: Scalars['String'];
  url: Scalars['String'];
  zoom_id?: Maybe<Scalars['String']>;
  alreadyRegistered: Scalars['Boolean'];
};

export type SavedAttendanceWorkshopInfo = {
  teacher: Scalars['String'];
  option_id: Scalars['String'];
};

export type Schedule = {
  __typename?: 'Schedule';
  group: Scalars['String'];
  teacher: Scalars['String'];
  entry: Scalars['String'];
  chat?: Maybe<Scalars['String']>;
  classroom?: Maybe<Scalars['String']>;
  sesiones?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
  serialized: Scalars['String'];
};


export type ScheduleSerializedArgs = {
  options: SerializedOptions;
};

export type Section = {
  __typename?: 'Section';
  course: Scalars['String'];
  questions?: Maybe<Array<Maybe<Question>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type SerializedOptions = {
  group?: Maybe<Scalars['Boolean']>;
  teacher?: Maybe<Scalars['Boolean']>;
  time?: Maybe<Scalars['Boolean']>;
};

export type Student = {
  __typename?: 'Student';
  codigo: Scalars['String'];
  nombre: Scalars['String'];
  apellido_paterno: Scalars['String'];
  apellido_materno: Scalars['String'];
  genero: Scalars['String'];
  carrera: Scalars['String'];
  ciclo: Scalars['String'];
  telefono: Scalars['String'];
  email: Scalars['String'];
  nivel: Scalars['String'];
  curso: Scalars['String'];
  externo: Scalars['Boolean'];
  grupo: Scalars['String'];
};

export type StudentInput = {
  codigo: Scalars['ID'];
  nombre: Scalars['String'];
  apellido_materno: Scalars['String'];
  apellido_paterno: Scalars['String'];
  genero: Scalars['String'];
  carrera: Scalars['String'];
  ciclo: Scalars['String'];
  telefono: Scalars['String'];
  email: Scalars['String'];
  nivel: Scalars['String'];
  grupo: Scalars['String'];
  externo: Scalars['Boolean'];
  curso: Scalars['String'];
};

export type StudentReservation = {
  __typename?: 'StudentReservation';
  id: Scalars['ID'];
  teacher_id: Scalars['ID'];
  time?: Maybe<Scalars['String']>;
  day?: Maybe<Scalars['String']>;
  workshopName: Scalars['String'];
  teacher: Scalars['String'];
  url: Scalars['String'];
  zoom_id?: Maybe<Scalars['String']>;
};

export type Teacher = {
  __typename?: 'Teacher';
  id: Scalars['ID'];
  name: Scalars['String'];
  options: Array<Maybe<WorkshopOption>>;
  reservations: Array<Maybe<Reservation>>;
};

export type Workshop = {
  __typename?: 'Workshop';
  name: Scalars['String'];
  description: Scalars['String'];
  levels?: Maybe<Array<Scalars['String']>>;
  option_ids?: Maybe<Array<Scalars['String']>>;
  options?: Maybe<Array<Option>>;
};

export type WorkshopOption = {
  __typename?: 'WorkshopOption';
  id: Scalars['ID'];
  time: Scalars['String'];
  day: Scalars['String'];
  workshop: Scalars['String'];
  teacher_id: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type WrittenResultsInput = {
  codigo: Scalars['String'];
  nombre: Scalars['String'];
  apellido_paterno: Scalars['String'];
  apellido_materno?: Maybe<Scalars['String']>;
  genero: Scalars['String'];
  ciclo?: Maybe<Scalars['String']>;
  carrera?: Maybe<Scalars['String']>;
  telefono: Scalars['String'];
  email: Scalars['String'];
  nivel_escrito: Scalars['Int'];
  curso: Scalars['String'];
  externo: Scalars['Boolean'];
  reubicacion: Scalars['Boolean'];
};

export type FirebaseInput = {
  ref: Scalars['String'];
  data: Array<Maybe<Scalars['String']>>;
};

export type MeetLink = {
  __typename?: 'meetLink';
  id: Scalars['ID'];
  teacher: Scalars['String'];
  link: Scalars['String'];
  active: Scalars['Boolean'];
};

export type SaveWorkshopsAttendanceResponse = {
  __typename?: 'saveWorkshopsAttendanceResponse';
  success: Scalars['Boolean'];
};

export type GetScheduleQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetScheduleQuery = { __typename?: 'Query', schedule: { __typename?: 'Schedule', group: string, teacher: string, chat?: Maybe<string>, classroom?: Maybe<string>, sesiones?: Maybe<string> } };

export type SaveLevelsMutationVariables = Exact<{
  levels: Array<Scalars['String']> | Scalars['String'];
  course: Scalars['String'];
}>;


export type SaveLevelsMutation = { __typename?: 'Mutation', saveRegisteringLevels: Array<string> };

export type GetLevelsRegisteringQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLevelsRegisteringQuery = { __typename?: 'Query', english: Array<string>, french: Array<string> };

export type RegisterMutationVariables = Exact<{
  codigo: Scalars['ID'];
  nombre: Scalars['String'];
  apellido_materno: Scalars['String'];
  apellido_paterno: Scalars['String'];
  genero: Scalars['String'];
  carrera: Scalars['String'];
  ciclo: Scalars['String'];
  telefono: Scalars['String'];
  email: Scalars['String'];
  nivel: Scalars['String'];
  curso: Scalars['String'];
  externo: Scalars['Boolean'];
  schedule: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', registerStudent: { __typename?: 'RegisterResponse', nombre: string, schedule: { __typename?: 'Schedule', group: string, teacher: string, entry: string } } };

export type InfoQueryVariables = Exact<{
  codigo: Scalars['ID'];
}>;


export type InfoQuery = { __typename?: 'Query', applicant: { __typename?: 'Applicant', codigo: string, nombre: string, apellido_materno: string, apellido_paterno: string, genero: string, carrera: string, ciclo: string, telefono: string, email: string, nivel: string, curso: string, externo: boolean, desertor: boolean, registering: boolean, registeredSchedule?: Maybe<{ __typename?: 'Schedule', teacher: string, group: string, entry: string }>, schedules: Array<{ __typename?: 'Schedule', teacher: string, group: string, serialized: string }> } };


export const GetScheduleDocument = gql`
    query getSchedule($id: String!) {
  schedule(id: $id) {
    group
    teacher
    chat
    classroom
    sesiones
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
export const RegisterDocument = gql`
    mutation register($codigo: ID!, $nombre: String!, $apellido_materno: String!, $apellido_paterno: String!, $genero: String!, $carrera: String!, $ciclo: String!, $telefono: String!, $email: String!, $nivel: String!, $curso: String!, $externo: Boolean!, $schedule: String!) {
  registerStudent(
    input: {codigo: $codigo, nombre: $nombre, apellido_materno: $apellido_materno, apellido_paterno: $apellido_paterno, genero: $genero, carrera: $carrera, ciclo: $ciclo, telefono: $telefono, email: $email, nivel: $nivel, curso: $curso, externo: $externo, grupo: $schedule}
  ) {
    nombre
    schedule {
      group
      teacher
      entry
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      codigo: // value for 'codigo'
 *      nombre: // value for 'nombre'
 *      apellido_materno: // value for 'apellido_materno'
 *      apellido_paterno: // value for 'apellido_paterno'
 *      genero: // value for 'genero'
 *      carrera: // value for 'carrera'
 *      ciclo: // value for 'ciclo'
 *      telefono: // value for 'telefono'
 *      email: // value for 'email'
 *      nivel: // value for 'nivel'
 *      curso: // value for 'curso'
 *      externo: // value for 'externo'
 *      schedule: // value for 'schedule'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const InfoDocument = gql`
    query info($codigo: ID!) {
  applicant(codigo: $codigo) {
    codigo
    nombre
    apellido_materno
    apellido_paterno
    genero
    carrera
    ciclo
    telefono
    email
    nivel
    curso
    externo
    desertor
    registering
    registeredSchedule {
      teacher
      group
      entry
    }
    schedules {
      teacher
      group
      serialized(options: {teacher: true, group: true})
    }
  }
}
    `;

/**
 * __useInfoQuery__
 *
 * To run a query within a React component, call `useInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInfoQuery({
 *   variables: {
 *      codigo: // value for 'codigo'
 *   },
 * });
 */
export function useInfoQuery(baseOptions: Apollo.QueryHookOptions<InfoQuery, InfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InfoQuery, InfoQueryVariables>(InfoDocument, options);
      }
export function useInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InfoQuery, InfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InfoQuery, InfoQueryVariables>(InfoDocument, options);
        }
export type InfoQueryHookResult = ReturnType<typeof useInfoQuery>;
export type InfoLazyQueryHookResult = ReturnType<typeof useInfoLazyQuery>;
export type InfoQueryResult = Apollo.QueryResult<InfoQuery, InfoQueryVariables>;