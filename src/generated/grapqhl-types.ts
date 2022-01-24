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
  ciclo: Scalars['String'];
  codigo: Scalars['ID'];
  curso: Scalars['String'];
  desertor: Scalars['Boolean'];
  email: Scalars['String'];
  externo: Scalars['Boolean'];
  genero: Scalars['String'];
  nivel: Scalars['String'];
  nombre: Scalars['String'];
  registeredSchedule?: Maybe<Schedule>;
  registering: Scalars['Boolean'];
  schedules: Array<Schedule>;
  telefono: Scalars['String'];
};

export type ApplicantInput = {
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
  nivel: Scalars['String'];
  nombre: Scalars['String'];
  telefono: Scalars['String'];
};

export type ApplicantResponse = {
  __typename?: 'ApplicantResponse';
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
  nivel: Scalars['String'];
  nombre: Scalars['String'];
  telefono: Scalars['String'];
};

export type AttendingStudent = {
  apellido_materno?: InputMaybe<Scalars['String']>;
  apellido_paterno: Scalars['String'];
  attended: Scalars['Boolean'];
  codigo: Scalars['String'];
  grupo: Scalars['String'];
  nivel: Scalars['String'];
  nombre: Scalars['String'];
  teacher: Scalars['String'];
  workshop: Scalars['String'];
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
  apellido_materno: Scalars['String'];
  apellido_paterno: Scalars['String'];
  codigo: Scalars['String'];
  cultural_task: Scalars['String'];
  final: Scalars['String'];
  final_grammar: Scalars['String'];
  final_oral: Scalars['String'];
  listening: Scalars['String'];
  midterm_grammar: Scalars['String'];
  midterm_oral: Scalars['String'];
  mini_project: Scalars['String'];
  nombre: Scalars['String'];
  reading: Scalars['String'];
  situation: Scalars['String'];
  workshops: Scalars['String'];
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
  addStudent: Student;
  closeExam?: Maybe<CloseExamResponse>;
  databaseSet: Scalars['Int'];
  editStudent: Student;
  makeWorkshopReservation: StudentReservation;
  registerStudent: RegisterResponse;
  removeMeetLink: Scalars['Int'];
  resetReservations: Scalars['Boolean'];
  saveApplicant: ApplicantResponse;
  saveRegisteringLevels: Array<Scalars['String']>;
  saveWorkshopsAttendance: Scalars['Boolean'];
  saveWrittenResults: MutationResponse;
  setMeetLink: Scalars['Int'];
  setMeetLinks: Scalars['Int'];
  setPlacementHomePageMessage: Scalars['Boolean'];
  setWorkshopLink: Scalars['Boolean'];
  toggleOpenWorkshops: Scalars['Boolean'];
};


export type MutationAddStudentArgs = {
  student: StudentInput;
};


export type MutationDatabaseSetArgs = {
  input?: InputMaybe<FirebaseInput>;
};


export type MutationEditStudentArgs = {
  changes?: InputMaybe<StudentChangesInput>;
  codigo: Scalars['ID'];
};


export type MutationMakeWorkshopReservationArgs = {
  option_id: Scalars['ID'];
  student_id: Scalars['ID'];
  tutorial_reason?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterStudentArgs = {
  input: StudentInput;
};


export type MutationRemoveMeetLinkArgs = {
  link: MeetLinkInputWithId;
};


export type MutationSaveApplicantArgs = {
  codigo: Scalars['String'];
  input: ApplicantInput;
};


export type MutationSaveRegisteringLevelsArgs = {
  course: Scalars['String'];
  levels: Array<Scalars['String']>;
};


export type MutationSaveWorkshopsAttendanceArgs = {
  input: Array<AttendingStudent>;
  option_id: Scalars['ID'];
  teacher_id: Scalars['ID'];
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


export type MutationSetWorkshopLinkArgs = {
  option_id: Scalars['ID'];
  url: Scalars['String'];
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  id: Scalars['String'];
  meetLink?: Maybe<Scalars['String']>;
};

export type Option = {
  __typename?: 'Option';
  available: Scalars['Boolean'];
  day: Scalars['String'];
  id: Scalars['ID'];
  isTutorial: Scalars['Boolean'];
  teacher_id: Scalars['String'];
  teacher_name: Scalars['String'];
  time: Scalars['String'];
  url: Scalars['String'];
  workshop_id: Scalars['String'];
  workshop_name: Scalars['String'];
  zoom_id?: Maybe<Scalars['String']>;
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
  getWorkshopsByCategory: Workshop;
  grades: Grades;
  isClosed: Scalars['Boolean'];
  isWorkshopsOpen: Scalars['Boolean'];
  meetLinks: Array<MeetLink>;
  options: Array<Option>;
  paramQuery?: Maybe<Scalars['Boolean']>;
  placementHomePageMessage: HomePageMessage;
  registeringLevels: Array<Scalars['String']>;
  schedule: Schedule;
  section: Section;
  student: Student;
  teacher: Teacher;
  teachers: Array<Teacher>;
  workshops: Array<Workshop>;
};


export type QueryApplicantArgs = {
  codigo: Scalars['ID'];
};


export type QueryDatabaseArgs = {
  ref: Scalars['String'];
};


export type QueryGetWorkshopsByCategoryArgs = {
  category: Scalars['String'];
};


export type QueryGradesArgs = {
  codigo: Scalars['String'];
};


export type QueryParamQueryArgs = {
  param?: InputMaybe<Scalars['String']>;
};


export type QueryRegisteringLevelsArgs = {
  course: Scalars['String'];
};


export type QueryScheduleArgs = {
  id: Scalars['String'];
};


export type QuerySectionArgs = {
  course: Scalars['String'];
  level: Scalars['Int'];
};


export type QueryStudentArgs = {
  codigo: Scalars['ID'];
};


export type QueryTeacherArgs = {
  id: Scalars['ID'];
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
  grupo: Scalars['String'];
  nivel: Scalars['String'];
  nombre: Scalars['String'];
  schedule: Schedule;
  telefono: Scalars['String'];
};

export type Reservation = {
  __typename?: 'Reservation';
  apellido_materno: Scalars['String'];
  apellido_paterno: Scalars['String'];
  codigo: Scalars['String'];
  email: Scalars['String'];
  grupo: Scalars['String'];
  id: Scalars['ID'];
  nivel: Scalars['String'];
  nombre: Scalars['String'];
  option_id: Scalars['String'];
  telefono: Scalars['String'];
  tutorial_reason?: Maybe<Scalars['String']>;
  workshop_id: Scalars['String'];
  workshop_name: Scalars['String'];
};

export type Schedule = {
  __typename?: 'Schedule';
  chat?: Maybe<Scalars['String']>;
  classroom?: Maybe<Scalars['String']>;
  entry: Scalars['String'];
  group: Scalars['String'];
  serialized: Scalars['String'];
  sesiones?: Maybe<Scalars['String']>;
  teacher: Scalars['String'];
  time?: Maybe<Scalars['String']>;
};


export type ScheduleSerializedArgs = {
  options: SerializedOptions;
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

export type Student = {
  __typename?: 'Student';
  apellido_materno: Scalars['String'];
  apellido_paterno: Scalars['String'];
  carrera: Scalars['String'];
  ciclo: Scalars['String'];
  codigo: Scalars['String'];
  curso: Scalars['String'];
  email: Scalars['String'];
  externo: Scalars['Boolean'];
  genero: Scalars['String'];
  grupo: Scalars['String'];
  id: Scalars['ID'];
  nivel: Scalars['String'];
  nombre: Scalars['String'];
  reservation?: Maybe<StudentReservation>;
  telefono: Scalars['String'];
};

export type StudentChangesInput = {
  apellido_materno?: InputMaybe<Scalars['String']>;
  apellido_paterno?: InputMaybe<Scalars['String']>;
  carrera?: InputMaybe<Scalars['String']>;
  ciclo?: InputMaybe<Scalars['String']>;
  codigo?: InputMaybe<Scalars['String']>;
  curso?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  externo?: InputMaybe<Scalars['Boolean']>;
  genero?: InputMaybe<Scalars['String']>;
  grupo?: InputMaybe<Scalars['String']>;
  nivel?: InputMaybe<Scalars['String']>;
  nombre?: InputMaybe<Scalars['String']>;
  telefono?: InputMaybe<Scalars['String']>;
};

export type StudentInput = {
  apellido_materno: Scalars['String'];
  apellido_paterno: Scalars['String'];
  carrera: Scalars['String'];
  ciclo: Scalars['String'];
  codigo: Scalars['ID'];
  curso: Scalars['String'];
  email: Scalars['String'];
  externo: Scalars['Boolean'];
  genero: Scalars['String'];
  grupo: Scalars['String'];
  nivel: Scalars['String'];
  nombre: Scalars['String'];
  telefono: Scalars['String'];
};

export type StudentReservation = {
  __typename?: 'StudentReservation';
  day: Scalars['String'];
  id: Scalars['ID'];
  teacher_id: Scalars['ID'];
  teacher_name: Scalars['String'];
  time: Scalars['String'];
  url: Scalars['String'];
  workshop_id: Scalars['String'];
  workshop_name: Scalars['String'];
  zoom_id?: Maybe<Scalars['String']>;
};

export type Teacher = {
  __typename?: 'Teacher';
  id: Scalars['ID'];
  name: Scalars['String'];
  options: Array<TeacherOption>;
};


export type TeacherOptionsArgs = {
  sorted?: InputMaybe<Scalars['Boolean']>;
};

export type TeacherOption = {
  __typename?: 'TeacherOption';
  day: Scalars['String'];
  id: Scalars['ID'];
  reservations?: Maybe<Array<Reservation>>;
  teacher_id: Scalars['String'];
  teacher_name: Scalars['String'];
  time: Scalars['String'];
  url: Scalars['String'];
  workshop_id: Scalars['String'];
  workshop_name: Scalars['String'];
  zoom_id?: Maybe<Scalars['String']>;
};

export type Workshop = {
  __typename?: 'Workshop';
  description: Scalars['String'];
  id: Scalars['ID'];
  levels: Array<Scalars['String']>;
  name: Scalars['String'];
  options: Array<Option>;
};

export type WrittenResultsInput = {
  apellido_materno: Scalars['String'];
  apellido_paterno: Scalars['String'];
  carrera: Scalars['String'];
  ciclo: Scalars['String'];
  codigo: Scalars['String'];
  curso: Scalars['String'];
  email: Scalars['String'];
  externo: Scalars['Boolean'];
  genero: Scalars['String'];
  institucionalEmail?: InputMaybe<Scalars['String']>;
  nivel_escrito: Scalars['Int'];
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


export type RegisterStudentMutation = { __typename?: 'Mutation', registerStudent: { __typename?: 'RegisterResponse', nombre: string, schedule: { __typename?: 'Schedule', group: string, teacher: string, entry: string } } };

export type GetScheduleQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetScheduleQuery = { __typename?: 'Query', schedule: { __typename?: 'Schedule', group: string, teacher: string, entry: string } };

export type SaveLevelsMutationVariables = Exact<{
  levels: Array<Scalars['String']> | Scalars['String'];
  course: Scalars['String'];
}>;


export type SaveLevelsMutation = { __typename?: 'Mutation', saveRegisteringLevels: Array<string> };

export type GetLevelsRegisteringQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLevelsRegisteringQuery = { __typename?: 'Query', english: Array<string>, french: Array<string> };

export type GetApplicantForEditQueryVariables = Exact<{
  codigo: Scalars['ID'];
}>;


export type GetApplicantForEditQuery = { __typename?: 'Query', applicant: { __typename?: 'Applicant', codigo: string, nombre: string, apellido_paterno: string, apellido_materno: string, genero: string, ciclo: string, carrera: string, telefono: string, email: string, externo: boolean, desertor: boolean, nivel: string, curso: string } };

export type ModifyApplicantMutationVariables = Exact<{
  codigo: Scalars['String'];
  input: ApplicantInput;
}>;


export type ModifyApplicantMutation = { __typename?: 'Mutation', saveApplicant: { __typename?: 'ApplicantResponse', codigo: string, nombre: string, apellido_paterno: string, apellido_materno: string, genero: string, ciclo: string, carrera: string, telefono: string, email: string, externo: boolean, desertor: boolean, nivel: string, curso: string } };

export type GetApplicantQueryVariables = Exact<{
  codigo: Scalars['ID'];
}>;


export type GetApplicantQuery = { __typename?: 'Query', applicant: { __typename?: 'Applicant', codigo: string, nombre: string, apellido_materno: string, apellido_paterno: string, genero: string, carrera: string, ciclo: string, telefono: string, email: string, nivel: string, curso: string, externo: boolean, desertor: boolean, registering: boolean, registeredSchedule?: { __typename?: 'Schedule', teacher: string, group: string, entry: string } | null | undefined, schedules: Array<{ __typename?: 'Schedule', teacher: string, group: string, serialized: string }> } };


export const RegisterStudentDocument = gql`
    mutation RegisterStudent($codigo: ID!, $nombre: String!, $apellido_materno: String!, $apellido_paterno: String!, $genero: String!, $carrera: String!, $ciclo: String!, $telefono: String!, $email: String!, $nivel: String!, $curso: String!, $externo: Boolean!, $schedule: String!) {
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
export function useRegisterStudentMutation(baseOptions?: Apollo.MutationHookOptions<RegisterStudentMutation, RegisterStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterStudentMutation, RegisterStudentMutationVariables>(RegisterStudentDocument, options);
      }
export type RegisterStudentMutationHookResult = ReturnType<typeof useRegisterStudentMutation>;
export type RegisterStudentMutationResult = Apollo.MutationResult<RegisterStudentMutation>;
export type RegisterStudentMutationOptions = Apollo.BaseMutationOptions<RegisterStudentMutation, RegisterStudentMutationVariables>;
export const GetScheduleDocument = gql`
    query getSchedule($id: String!) {
  schedule(id: $id) {
    group
    teacher
    entry
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
export const GetApplicantForEditDocument = gql`
    query getApplicantForEdit($codigo: ID!) {
  applicant(codigo: $codigo) {
    codigo
    nombre
    apellido_paterno
    apellido_materno
    genero
    ciclo
    carrera
    telefono
    email
    externo
    desertor
    nivel
    curso
  }
}
    `;

/**
 * __useGetApplicantForEditQuery__
 *
 * To run a query within a React component, call `useGetApplicantForEditQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApplicantForEditQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApplicantForEditQuery({
 *   variables: {
 *      codigo: // value for 'codigo'
 *   },
 * });
 */
export function useGetApplicantForEditQuery(baseOptions: Apollo.QueryHookOptions<GetApplicantForEditQuery, GetApplicantForEditQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetApplicantForEditQuery, GetApplicantForEditQueryVariables>(GetApplicantForEditDocument, options);
      }
export function useGetApplicantForEditLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetApplicantForEditQuery, GetApplicantForEditQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetApplicantForEditQuery, GetApplicantForEditQueryVariables>(GetApplicantForEditDocument, options);
        }
export type GetApplicantForEditQueryHookResult = ReturnType<typeof useGetApplicantForEditQuery>;
export type GetApplicantForEditLazyQueryHookResult = ReturnType<typeof useGetApplicantForEditLazyQuery>;
export type GetApplicantForEditQueryResult = Apollo.QueryResult<GetApplicantForEditQuery, GetApplicantForEditQueryVariables>;
export const ModifyApplicantDocument = gql`
    mutation modifyApplicant($codigo: String!, $input: ApplicantInput!) {
  saveApplicant(codigo: $codigo, input: $input) {
    codigo
    nombre
    apellido_paterno
    apellido_materno
    genero
    ciclo
    carrera
    telefono
    email
    externo
    desertor
    nivel
    curso
  }
}
    `;
export type ModifyApplicantMutationFn = Apollo.MutationFunction<ModifyApplicantMutation, ModifyApplicantMutationVariables>;

/**
 * __useModifyApplicantMutation__
 *
 * To run a mutation, you first call `useModifyApplicantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useModifyApplicantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [modifyApplicantMutation, { data, loading, error }] = useModifyApplicantMutation({
 *   variables: {
 *      codigo: // value for 'codigo'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useModifyApplicantMutation(baseOptions?: Apollo.MutationHookOptions<ModifyApplicantMutation, ModifyApplicantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ModifyApplicantMutation, ModifyApplicantMutationVariables>(ModifyApplicantDocument, options);
      }
export type ModifyApplicantMutationHookResult = ReturnType<typeof useModifyApplicantMutation>;
export type ModifyApplicantMutationResult = Apollo.MutationResult<ModifyApplicantMutation>;
export type ModifyApplicantMutationOptions = Apollo.BaseMutationOptions<ModifyApplicantMutation, ModifyApplicantMutationVariables>;
export const GetApplicantDocument = gql`
    query GetApplicant($codigo: ID!) {
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