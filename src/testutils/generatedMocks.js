import { createApolloMock } from 'apollo-typed-documents';

const operations = {};

export default createApolloMock(operations);

operations.RegisterStudent = {};
operations.RegisterStudent.variables = (values = {}, options = {}) => {
  const __typename = '';
  values = (({ codigo = undefined, nombre = undefined, apellido_materno = undefined, apellido_paterno = undefined, genero = undefined, carrera = undefined, ciclo = undefined, telefono = undefined, email = undefined, institucionalEmail = undefined, nivel = undefined, curso = undefined, externo = undefined, groupId = undefined }) => ({ codigo, nombre, apellido_materno, apellido_paterno, genero, carrera, ciclo, telefono, email, institucionalEmail, nivel, curso, externo, groupId }))(values);
  values.__typename = __typename;
  return {
    codigo: (values.codigo === null || values.codigo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'ID', mappedTypeName: 'string', fieldName: 'codigo', __typename, scalarValues: options.scalarValues }) : values.codigo,
    nombre: values.nombre,
    apellido_materno: values.apellido_materno,
    apellido_paterno: values.apellido_paterno,
    genero: values.genero,
    carrera: values.carrera,
    ciclo: (values.ciclo === null || values.ciclo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'ciclo', __typename, scalarValues: options.scalarValues }) : values.ciclo,
    telefono: values.telefono,
    email: values.email,
    institucionalEmail: values.institucionalEmail,
    nivel: values.nivel,
    curso: values.curso,
    externo: values.externo,
    groupId: (values.groupId === null || values.groupId === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'Int', mappedTypeName: 'number', fieldName: 'groupId', __typename, scalarValues: options.scalarValues }) : values.groupId
  };
};
operations.RegisterStudent.data = (values = {}, options = {}) => {
  const __typename = '';
  values = (({ registerStudent = null }) => ({ registerStudent }))(values);
  values.__typename = __typename;
  return {
    registerStudent: ((values = {}, options = {}) => {
      const __typename = 'RegisterResponse';
      values = (({ nombre = null, group = null }) => ({ nombre, group }))(values);
      values.__typename = __typename;
      return {
        nombre: (values.nombre === null || values.nombre === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'nombre', __typename, scalarValues: options.scalarValues }) : values.nombre,
        group: ((values = {}, options = {}) => {
          const __typename = 'Group';
          values = (({ name = null, time = null, aula = null, teacher = null }) => ({ name, time, aula, teacher }))(values);
          values.__typename = __typename;
          return {
            name: (values.name === null || values.name === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'name', __typename, scalarValues: options.scalarValues }) : values.name,
            time: (values.time === null || values.time === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'time', __typename, scalarValues: options.scalarValues }) : values.time,
            aula: (values.aula === null || values.aula === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'aula', __typename, scalarValues: options.scalarValues }) : values.aula,
            teacher: (values.teacher === null || values.teacher === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'teacher', __typename, scalarValues: options.scalarValues }) : values.teacher,
            ...(options.addTypename ? { __typename } : {})
          };
        })(values.group || undefined, options),
        ...(options.addTypename ? { __typename } : {})
      };
    })(values.registerStudent || undefined, options)
  };
};

operations.getSchedule = {};
operations.getSchedule.variables = (values = {}, options = {}) => {
  const __typename = '';
  values = (({ id = undefined }) => ({ id }))(values);
  values.__typename = __typename;
  return {
    id: (values.id === null || values.id === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'Int', mappedTypeName: 'number', fieldName: 'id', __typename, scalarValues: options.scalarValues }) : values.id
  };
};
operations.getSchedule.data = (values = {}, options = {}) => {
  const __typename = '';
  values = (({ group = null }) => ({ group }))(values);
  values.__typename = __typename;
  return {
    group: ((values = {}, options = {}) => {
      const __typename = 'Group';
      values = (({ name = null, time = null, aula = null }) => ({ name, time, aula }))(values);
      values.__typename = __typename;
      return {
        name: (values.name === null || values.name === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'name', __typename, scalarValues: options.scalarValues }) : values.name,
        time: (values.time === null || values.time === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'time', __typename, scalarValues: options.scalarValues }) : values.time,
        aula: (values.aula === null || values.aula === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'aula', __typename, scalarValues: options.scalarValues }) : values.aula,
        ...(options.addTypename ? { __typename } : {})
      };
    })(values.group || undefined, options)
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

operations.getApplicantForEdit = {};
operations.getApplicantForEdit.variables = (values = {}, options = {}) => {
  const __typename = '';
  values = (({ codigo = undefined }) => ({ codigo }))(values);
  values.__typename = __typename;
  return {
    codigo: (values.codigo === null || values.codigo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'ID', mappedTypeName: 'string', fieldName: 'codigo', __typename, scalarValues: options.scalarValues }) : values.codigo
  };
};
operations.getApplicantForEdit.data = (values = {}, options = {}) => {
  const __typename = '';
  values = (({ applicant = null }) => ({ applicant }))(values);
  values.__typename = __typename;
  return {
    applicant: ((values = {}, options = {}) => {
      const __typename = 'Applicant';
      values = (({ codigo = null, nombre = null, apellido_paterno = null, apellido_materno = null, genero = null, ciclo = null, carrera = null, telefono = null, email = null, externo = null, desertor = null, nivel = null, curso = null }) => ({ codigo, nombre, apellido_paterno, apellido_materno, genero, ciclo, carrera, telefono, email, externo, desertor, nivel, curso }))(values);
      values.__typename = __typename;
      return {
        codigo: (values.codigo === null || values.codigo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'ID', mappedTypeName: 'string', fieldName: 'codigo', __typename, scalarValues: options.scalarValues }) : values.codigo,
        nombre: (values.nombre === null || values.nombre === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'nombre', __typename, scalarValues: options.scalarValues }) : values.nombre,
        apellido_paterno: (values.apellido_paterno === null || values.apellido_paterno === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'apellido_paterno', __typename, scalarValues: options.scalarValues }) : values.apellido_paterno,
        apellido_materno: (values.apellido_materno === null || values.apellido_materno === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'apellido_materno', __typename, scalarValues: options.scalarValues }) : values.apellido_materno,
        genero: (values.genero === null || values.genero === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'genero', __typename, scalarValues: options.scalarValues }) : values.genero,
        ciclo: (values.ciclo === null || values.ciclo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'ciclo', __typename, scalarValues: options.scalarValues }) : values.ciclo,
        carrera: (values.carrera === null || values.carrera === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'carrera', __typename, scalarValues: options.scalarValues }) : values.carrera,
        telefono: (values.telefono === null || values.telefono === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'telefono', __typename, scalarValues: options.scalarValues }) : values.telefono,
        email: (values.email === null || values.email === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'email', __typename, scalarValues: options.scalarValues }) : values.email,
        externo: (values.externo === null || values.externo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'Boolean', mappedTypeName: 'boolean', fieldName: 'externo', __typename, scalarValues: options.scalarValues }) : values.externo,
        desertor: (values.desertor === null || values.desertor === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'Boolean', mappedTypeName: 'boolean', fieldName: 'desertor', __typename, scalarValues: options.scalarValues }) : values.desertor,
        nivel: (values.nivel === null || values.nivel === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'Int', mappedTypeName: 'number', fieldName: 'nivel', __typename, scalarValues: options.scalarValues }) : values.nivel,
        curso: (values.curso === null || values.curso === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'curso', __typename, scalarValues: options.scalarValues }) : values.curso,
        ...(options.addTypename ? { __typename } : {})
      };
    })(values.applicant || undefined, options)
  };
};

operations.modifyApplicant = {};
operations.modifyApplicant.variables = (values = {}, options = {}) => {
  const __typename = '';
  values = (({ codigo = undefined, input = undefined }) => ({ codigo, input }))(values);
  values.__typename = __typename;
  return {
    codigo: (values.codigo === null || values.codigo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'codigo', __typename, scalarValues: options.scalarValues }) : values.codigo,
    input: (ApplicantInput)(values.input || undefined, options)
  };
};
operations.modifyApplicant.data = (values = {}, options = {}) => {
  const __typename = '';
  values = (({ saveApplicant = null }) => ({ saveApplicant }))(values);
  values.__typename = __typename;
  return {
    saveApplicant: ((values = {}, options = {}) => {
      const __typename = 'ApplicantResponse';
      values = (({ codigo = null, nombre = null, apellido_paterno = null, apellido_materno = null, genero = null, ciclo = null, carrera = null, telefono = null, email = null, externo = null, desertor = null, nivel = null, curso = null }) => ({ codigo, nombre, apellido_paterno, apellido_materno, genero, ciclo, carrera, telefono, email, externo, desertor, nivel, curso }))(values);
      values.__typename = __typename;
      return {
        codigo: (values.codigo === null || values.codigo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'ID', mappedTypeName: 'string', fieldName: 'codigo', __typename, scalarValues: options.scalarValues }) : values.codigo,
        nombre: (values.nombre === null || values.nombre === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'nombre', __typename, scalarValues: options.scalarValues }) : values.nombre,
        apellido_paterno: (values.apellido_paterno === null || values.apellido_paterno === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'apellido_paterno', __typename, scalarValues: options.scalarValues }) : values.apellido_paterno,
        apellido_materno: (values.apellido_materno === null || values.apellido_materno === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'apellido_materno', __typename, scalarValues: options.scalarValues }) : values.apellido_materno,
        genero: (values.genero === null || values.genero === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'genero', __typename, scalarValues: options.scalarValues }) : values.genero,
        ciclo: (values.ciclo === null || values.ciclo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'ciclo', __typename, scalarValues: options.scalarValues }) : values.ciclo,
        carrera: (values.carrera === null || values.carrera === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'carrera', __typename, scalarValues: options.scalarValues }) : values.carrera,
        telefono: (values.telefono === null || values.telefono === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'telefono', __typename, scalarValues: options.scalarValues }) : values.telefono,
        email: (values.email === null || values.email === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'email', __typename, scalarValues: options.scalarValues }) : values.email,
        externo: (values.externo === null || values.externo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'Boolean', mappedTypeName: 'boolean', fieldName: 'externo', __typename, scalarValues: options.scalarValues }) : values.externo,
        desertor: (values.desertor === null || values.desertor === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'Boolean', mappedTypeName: 'boolean', fieldName: 'desertor', __typename, scalarValues: options.scalarValues }) : values.desertor,
        nivel: (values.nivel === null || values.nivel === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'nivel', __typename, scalarValues: options.scalarValues }) : values.nivel,
        curso: (values.curso === null || values.curso === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'curso', __typename, scalarValues: options.scalarValues }) : values.curso,
        ...(options.addTypename ? { __typename } : {})
      };
    })(values.saveApplicant || undefined, options)
  };
};

operations.GetApplicant = {};
operations.GetApplicant.variables = (values = {}, options = {}) => {
  const __typename = '';
  values = (({ codigo = undefined }) => ({ codigo }))(values);
  values.__typename = __typename;
  return {
    codigo: (values.codigo === null || values.codigo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'ID', mappedTypeName: 'string', fieldName: 'codigo', __typename, scalarValues: options.scalarValues }) : values.codigo
  };
};
operations.GetApplicant.data = (values = {}, options = {}) => {
  const __typename = '';
  values = (({ applicant = null }) => ({ applicant }))(values);
  values.__typename = __typename;
  return {
    applicant: ((values = {}, options = {}) => {
      const __typename = 'Applicant';
      values = (({ codigo = null, nombre = null, apellido_materno = null, apellido_paterno = null, genero = null, carrera = null, ciclo = null, telefono = null, email = null, institucionalEmail = null, nivel = null, curso = null, externo = null, desertor = null, registering = null, registeredGroup = null, groups = null }) => ({ codigo, nombre, apellido_materno, apellido_paterno, genero, carrera, ciclo, telefono, email, institucionalEmail, nivel, curso, externo, desertor, registering, registeredGroup, groups }))(values);
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
        institucionalEmail: values.institucionalEmail,
        nivel: (values.nivel === null || values.nivel === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'Int', mappedTypeName: 'number', fieldName: 'nivel', __typename, scalarValues: options.scalarValues }) : values.nivel,
        curso: (values.curso === null || values.curso === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'curso', __typename, scalarValues: options.scalarValues }) : values.curso,
        externo: (values.externo === null || values.externo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'Boolean', mappedTypeName: 'boolean', fieldName: 'externo', __typename, scalarValues: options.scalarValues }) : values.externo,
        desertor: (values.desertor === null || values.desertor === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'Boolean', mappedTypeName: 'boolean', fieldName: 'desertor', __typename, scalarValues: options.scalarValues }) : values.desertor,
        registering: (values.registering === null || values.registering === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'Boolean', mappedTypeName: 'boolean', fieldName: 'registering', __typename, scalarValues: options.scalarValues }) : values.registering,
        registeredGroup: !values.registeredGroup ? values.registeredGroup : ((values = {}, options = {}) => {
          const __typename = 'Group';
          values = (({ ciclo = null, name = null, time = null, aula = null, teacher = null }) => ({ ciclo, name, time, aula, teacher }))(values);
          values.__typename = __typename;
          return {
            ciclo: (values.ciclo === null || values.ciclo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'ciclo', __typename, scalarValues: options.scalarValues }) : values.ciclo,
            name: (values.name === null || values.name === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'name', __typename, scalarValues: options.scalarValues }) : values.name,
            time: (values.time === null || values.time === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'time', __typename, scalarValues: options.scalarValues }) : values.time,
            aula: (values.aula === null || values.aula === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'aula', __typename, scalarValues: options.scalarValues }) : values.aula,
            teacher: (values.teacher === null || values.teacher === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'teacher', __typename, scalarValues: options.scalarValues }) : values.teacher,
            ...(options.addTypename ? { __typename } : {})
          };
        })(values.registeredGroup, options),
        groups: (values.groups || []).map(item => ((values = {}, options = {}) => {
          const __typename = 'Group';
          values = (({ id = null, ciclo = null, name = null, time = null, aula = null, teacher = null }) => ({ id, ciclo, name, time, aula, teacher }))(values);
          values.__typename = __typename;
          return {
            id: (values.id === null || values.id === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'Int', mappedTypeName: 'number', fieldName: 'id', __typename, scalarValues: options.scalarValues }) : values.id,
            ciclo: (values.ciclo === null || values.ciclo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'ciclo', __typename, scalarValues: options.scalarValues }) : values.ciclo,
            name: (values.name === null || values.name === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'name', __typename, scalarValues: options.scalarValues }) : values.name,
            time: (values.time === null || values.time === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'time', __typename, scalarValues: options.scalarValues }) : values.time,
            aula: (values.aula === null || values.aula === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'aula', __typename, scalarValues: options.scalarValues }) : values.aula,
            teacher: (values.teacher === null || values.teacher === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'teacher', __typename, scalarValues: options.scalarValues }) : values.teacher,
            ...(options.addTypename ? { __typename } : {})
          };
        })(item, options)),
        ...(options.addTypename ? { __typename } : {})
      };
    })(values.applicant || undefined, options)
  };
};

const ApplicantInput = (values = {}, options = {}) => {
  const __typename = 'ApplicantInput';
  values = (({ apellido_materno = undefined, apellido_paterno = undefined, carrera = undefined, ciclo = undefined, codigo = undefined, curso = undefined, desertor = undefined, email = undefined, externo = undefined, genero = undefined, institucionalEmail = undefined, nivel = undefined, nombre = undefined, telefono = undefined }) => ({ apellido_materno, apellido_paterno, carrera, ciclo, codigo, curso, desertor, email, externo, genero, institucionalEmail, nivel, nombre, telefono }))(values);
  values.__typename = __typename;
  return {
    apellido_materno: (values.apellido_materno === null || values.apellido_materno === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'apellido_materno', __typename, scalarValues: options.scalarValues }) : values.apellido_materno,
    apellido_paterno: (values.apellido_paterno === null || values.apellido_paterno === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'apellido_paterno', __typename, scalarValues: options.scalarValues }) : values.apellido_paterno,
    carrera: (values.carrera === null || values.carrera === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'carrera', __typename, scalarValues: options.scalarValues }) : values.carrera,
    ciclo: (values.ciclo === null || values.ciclo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'ciclo', __typename, scalarValues: options.scalarValues }) : values.ciclo,
    codigo: (values.codigo === null || values.codigo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'ID', mappedTypeName: 'string', fieldName: 'codigo', __typename, scalarValues: options.scalarValues }) : values.codigo,
    curso: (values.curso === null || values.curso === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'curso', __typename, scalarValues: options.scalarValues }) : values.curso,
    desertor: (values.desertor === null || values.desertor === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'Boolean', mappedTypeName: 'boolean', fieldName: 'desertor', __typename, scalarValues: options.scalarValues }) : values.desertor,
    email: (values.email === null || values.email === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'email', __typename, scalarValues: options.scalarValues }) : values.email,
    externo: (values.externo === null || values.externo === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'Boolean', mappedTypeName: 'boolean', fieldName: 'externo', __typename, scalarValues: options.scalarValues }) : values.externo,
    genero: (values.genero === null || values.genero === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'genero', __typename, scalarValues: options.scalarValues }) : values.genero,
    institucionalEmail: values.institucionalEmail,
    nivel: (values.nivel === null || values.nivel === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'nivel', __typename, scalarValues: options.scalarValues }) : values.nivel,
    nombre: (values.nombre === null || values.nombre === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'nombre', __typename, scalarValues: options.scalarValues }) : values.nombre,
    telefono: (values.telefono === null || values.telefono === undefined) ? options.getDefaultScalarValue({ scalarTypeName: 'String', mappedTypeName: 'string', fieldName: 'telefono', __typename, scalarValues: options.scalarValues }) : values.telefono
  };
};