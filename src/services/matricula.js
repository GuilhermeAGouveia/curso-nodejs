const prisma = require("@prisma/client");

const prismaClient = new prisma.PrismaClient();

module.exports = {
  create: async (matricula) => {
    await prismaClient.aluno.findUniqueOrThrow({
      where: {
        id: matricula.aluno_id,
      },
    });

    await prismaClient.curso.findUniqueOrThrow({
      where: {
        id: matricula.curso_id,
      },
    });

    const matriculaCriado = await prismaClient.matricula.create({
      data: matricula,
    });
    return matriculaCriado;
  },

  getAll: async () => {
    const matriculas = await prismaClient.matricula.findMany({
      select: {
        curso: true,
        aluno: true,
        progresso: true
      }
    });
    return matriculas;
  },

  getByCurso: async (idCurso) => {
    const matricula = await prismaClient.matricula.findMany({
      where: {
        curso_id: idCurso,
      },
      include: {
        aluno: true,
      },
    });

    return matricula;
  },
  getByAluno: async (idAluno) => {
    const matricula = await prismaClient.matricula.findMany({
      where: {
        aluno_id: idAluno,
      },
      include: {
        curso: true,
      },
    });

    return matricula;
  },
  delete: async (idCurso, idAluno) => {
    const matriculaDeletado = await prismaClient.matricula.delete({
      where: {
        matricula_id: {
          aluno_id: idAluno,
          curso_id: idCurso,
        },
      },
    });
    return matriculaDeletado;
  },
  getByMatricula: async (idCurso, idAluno) => {
    const matricula = await prismaClient.matricula.findUnique({
      where: {
        matricula_id: {
          aluno_id: idAluno,
          curso_id: idCurso,
        },
      },
    });
    return matricula;
  },
};
