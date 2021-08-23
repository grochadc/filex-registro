import { createApolloMock } from 'apollo-typed-documents';

const operations = {};

export default createApolloMock(operations);

operations.getSchedule = {};
operations.getSchedule.variables = (values = {}, options = {}) => {
  const __typename = '';
  values = (({ id = undefined }) => ({ id }))(values);
  values.__typename = __typename;
  return {
    id: (values.id === null || values.id === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'id', __typename, scalarValues: options.scalarValues }) : values.id
  };
};
operations.getSchedule.data = (values = {}, options = {}) => {
  const __typename = '';
  values = (({ schedule = null }) => ({ schedule }))(values);
  values.__typename = __typename;
  return {
    schedule: ((values = {}, options = {}) => {
      const __typename = 'Schedule';
      values = (({ group = null, teacher = null, entry = null }) => ({ group, teacher, entry }))(values);
      values.__typename = __typename;
      return {
        group: (values.group === null || values.group === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'group', __typename, scalarValues: options.scalarValues }) : values.group,
        teacher: (values.teacher === null || values.teacher === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'teacher', __typename, scalarValues: options.scalarValues }) : values.teacher,
        entry: (values.entry === null || values.entry === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'entry', __typename, scalarValues: options.scalarValues }) : values.entry,
        ...(options.addTypename ? { __typename } : {})
      };
    })(values.schedule || undefined, options)
  };
};

operations.saveLevels = {};
operations.saveLevels.variables = (values = {}, options = {}) => {
  const __typename = '';
  values = (({ levels = undefined, course = undefined }) => ({ levels, course }))(values);
  values.__typename = __typename;
  return {
    levels: values.levels || [],
    course: (values.course === null || values.course === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'course', __typename, scalarValues: options.scalarValues }) : values.course
  };
};
operations.saveLevels.data = (values = {}, options = {}) => {
  const __typename = '';
  values = (({ saveRegisteringLevels = null }) => ({ saveRegisteringLevels }))(values);
  values.__typename = __typename;
  return {
    saveRegisteringLevels: values.saveRegisteringLevels || []
  };
};

operations.getLevelsRegistering = {};
operations.getLevelsRegistering.variables = (values = {}, options = {}) => {
  const __typename = '';
  values = (({  }) => ({  }))(values);
  values.__typename = __typename;
  return {

  };
};
operations.getLevelsRegistering.data = (values = {}, options = {}) => {
  const __typename = '';
  values = (({ english = null, french = null }) => ({ english, french }))(values);
  values.__typename = __typename;
  return {
    english: values.english || [],
    french: values.french || []
  };
};

operations.register = {};
operations.register.variables = (values = {}, options = {}) => {
  const __typename = '';
  values = (({ codigo = undefined, nombre = undefined, apellido_materno = undefined, apellido_paterno = undefined, genero = undefined, carrera = undefined, ciclo = undefined, telefono = undefined, email = undefined, nivel = undefined, curso = undefined, externo = undefined, schedule = undefined }) => ({ codigo, nombre, apellido_materno, apellido_paterno, genero, carrera, ciclo, telefono, email, nivel, curso, externo, schedule }))(values);
  values.__typename = __typename;
  return {
    codigo: (values.codigo === null || values.codigo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'ID', mappedTypeName: 'string', fieldName: 'codigo', __typename, scalarValues: options.scalarValues }) : values.codigo,
    nombre: (values.nombre === null || values.nombre === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'nombre', __typename, scalarValues: options.scalarValues }) : values.nombre,
    apellido_materno: (values.apellido_materno === null || values.apellido_materno === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'apellido_materno', __typename, scalarValues: options.scalarValues }) : values.apellido_materno,
    apellido_paterno: (values.apellido_paterno === null || values.apellido_paterno === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'apellido_paterno', __typename, scalarValues: options.scalarValues }) : values.apellido_paterno,
    genero: (values.genero === null || values.genero === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'genero', __typename, scalarValues: options.scalarValues }) : values.genero,
    carrera: (values.carrera === null || values.carrera === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'carrera', __typename, scalarValues: options.scalarValues }) : values.carrera,
    ciclo: (values.ciclo === null || values.ciclo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'ciclo', __typename, scalarValues: options.scalarValues }) : values.ciclo,
    telefono: (values.telefono === null || values.telefono === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'telefono', __typename, scalarValues: options.scalarValues }) : values.telefono,
    email: (values.email === null || values.email === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'email', __typename, scalarValues: options.scalarValues }) : values.email,
    nivel: (values.nivel === null || values.nivel === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'nivel', __typename, scalarValues: options.scalarValues }) : values.nivel,
    curso: (values.curso === null || values.curso === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'curso', __typename, scalarValues: options.scalarValues }) : values.curso,
    externo: (values.externo === null || values.externo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'Boolean', mappedTypeName: 'boolean', fieldName: 'externo', __typename, scalarValues: options.scalarValues }) : values.externo,
    schedule: (values.schedule === null || values.schedule === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'schedule', __typename, scalarValues: options.scalarValues }) : values.schedule
  };
};
operations.register.data = (values = {}, options = {}) => {
  const __typename = '';
  values = (({ registerStudent = null }) => ({ registerStudent }))(values);
  values.__typename = __typename;
  return {
    registerStudent: ((values = {}, options = {}) => {
      const __typename = 'RegisterResponse';
      values = (({ nombre = null, schedule = null }) => ({ nombre, schedule }))(values);
      values.__typename = __typename;
      return {
        nombre: (values.nombre === null || values.nombre === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'nombre', __typename, scalarValues: options.scalarValues }) : values.nombre,
        schedule: ((values = {}, options = {}) => {
          const __typename = 'Schedule';
          values = (({ group = null, teacher = null, entry = null }) => ({ group, teacher, entry }))(values);
          values.__typename = __typename;
          return {
            group: (values.group === null || values.group === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'group', __typename, scalarValues: options.scalarValues }) : values.group,
            teacher: (values.teacher === null || values.teacher === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'teacher', __typename, scalarValues: options.scalarValues }) : values.teacher,
            entry: (values.entry === null || values.entry === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'entry', __typename, scalarValues: options.scalarValues }) : values.entry,
            ...(options.addTypename ? { __typename } : {})
          };
        })(values.schedule || undefined, options),
        ...(options.addTypename ? { __typename } : {})
      };
    })(values.registerStudent || undefined, options)
  };
};

operations.info = {};
operations.info.variables = (values = {}, options = {}) => {
  const __typename = '';
  values = (({ codigo = undefined }) => ({ codigo }))(values);
  values.__typename = __typename;
  return {
    codigo: (values.codigo === null || values.codigo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'ID', mappedTypeName: 'string', fieldName: 'codigo', __typename, scalarValues: options.scalarValues }) : values.codigo
  };
};
operations.info.data = (values = {}, options = {}) => {
  const __typename = '';
  values = (({ applicant = null }) => ({ applicant }))(values);
  values.__typename = __typename;
  return {
    applicant: ((values = {}, options = {}) => {
      const __typename = 'Applicant';
      values = (({ codigo = null, nombre = null, apellido_materno = null, apellido_paterno = null, genero = null, carrera = null, ciclo = null, telefono = null, email = null, nivel = null, curso = null, externo = null, desertor = null, registering = null, registeredSchedule = null, schedules = null }) => ({ codigo, nombre, apellido_materno, apellido_paterno, genero, carrera, ciclo, telefono, email, nivel, curso, externo, desertor, registering, registeredSchedule, schedules }))(values);
      values.__typename = __typename;
      return {
        codigo: (values.codigo === null || values.codigo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'ID', mappedTypeName: 'string', fieldName: 'codigo', __typename, scalarValues: options.scalarValues }) : values.codigo,
        nombre: (values.nombre === null || values.nombre === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'nombre', __typename, scalarValues: options.scalarValues }) : values.nombre,
        apellido_materno: (values.apellido_materno === null || values.apellido_materno === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'apellido_materno', __typename, scalarValues: options.scalarValues }) : values.apellido_materno,
        apellido_paterno: (values.apellido_paterno === null || values.apellido_paterno === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'apellido_paterno', __typename, scalarValues: options.scalarValues }) : values.apellido_paterno,
        genero: (values.genero === null || values.genero === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'genero', __typename, scalarValues: options.scalarValues }) : values.genero,
        carrera: (values.carrera === null || values.carrera === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'carrera', __typename, scalarValues: options.scalarValues }) : values.carrera,
        ciclo: (values.ciclo === null || values.ciclo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'ciclo', __typename, scalarValues: options.scalarValues }) : values.ciclo,
        telefono: (values.telefono === null || values.telefono === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'telefono', __typename, scalarValues: options.scalarValues }) : values.telefono,
        email: (values.email === null || values.email === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'email', __typename, scalarValues: options.scalarValues }) : values.email,
        nivel: (values.nivel === null || values.nivel === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'nivel', __typename, scalarValues: options.scalarValues }) : values.nivel,
        curso: (values.curso === null || values.curso === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'curso', __typename, scalarValues: options.scalarValues }) : values.curso,
        externo: (values.externo === null || values.externo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'Boolean', mappedTypeName: 'boolean', fieldName: 'externo', __typename, scalarValues: options.scalarValues }) : values.externo,
        desertor: (values.desertor === null || values.desertor === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'Boolean', mappedTypeName: 'boolean', fieldName: 'desertor', __typename, scalarValues: options.scalarValues }) : values.desertor,
        registering: (values.registering === null || values.registering === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'Boolean', mappedTypeName: 'boolean', fieldName: 'registering', __typename, scalarValues: options.scalarValues }) : values.registering,
        registeredSchedule: !values.registeredSchedule ? values.registeredSchedule : ((values = {}, options = {}) => {
          const __typename = 'Schedule';
          values = (({ teacher = null, group = null, entry = null }) => ({ teacher, group, entry }))(values);
          values.__typename = __typename;
          return {
            teacher: (values.teacher === null || values.teacher === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'teacher', __typename, scalarValues: options.scalarValues }) : values.teacher,
            group: (values.group === null || values.group === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'group', __typename, scalarValues: options.scalarValues }) : values.group,
            entry: (values.entry === null || values.entry === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'entry', __typename, scalarValues: options.scalarValues }) : values.entry,
            ...(options.addTypename ? { __typename } : {})
          };
        })(values.registeredSchedule, options),
        schedules: (values.schedules || []).map(item => ((values = {}, options = {}) => {
          const __typename = 'Schedule';
          values = (({ teacher = null, group = null, serialized = null }) => ({ teacher, group, serialized }))(values);
          values.__typename = __typename;
          return {
            teacher: (values.teacher === null || values.teacher === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'teacher', __typename, scalarValues: options.scalarValues }) : values.teacher,
            group: (values.group === null || values.group === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'group', __typename, scalarValues: options.scalarValues }) : values.group,
            serialized: (values.serialized === null || values.serialized === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'serialized', __typename, scalarValues: options.scalarValues }) : values.serialized,
            ...(options.addTypename ? { __typename } : {})
          };
        })(item, options)),
        ...(options.addTypename ? { __typename } : {})
      };
    })(values.applicant || undefined, options)
  };
};