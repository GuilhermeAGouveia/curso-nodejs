const Service = require("../services/matricula");

module.exports = {
  getByCurso: async (req, res) => {
    try {
      const { idCurso } = req.params;
      const aluno = await Service.getByCurso(+idCurso);
      if (!aluno) throw new Error("Aluno não encontrado");
      return res.json(aluno);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  },
  getByAluno: async (req, res) => {
    try {
      const { idAluno } = req.params;
      const aluno = await Service.getByAluno(+idAluno);
      if (!aluno) throw new Error("Aluno não encontrado");
      return res.json(aluno);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  },
  getAll: async (req, res) => {
    const matriculas = await Service.getAll();
    return res.json(matriculas);
  },

  getByMatricula: async (req, res) => {
    try {
      const { idCurso, idAluno } = req.params;
      const matricula = await Service.getByMatricula(+idCurso, +idAluno);
      if (!matricula) throw new Error("Matricula não encontrada");
      return res.json(matricula);
    } catch (error) {
      return res.status(404).send(error?.message);
    }
  },

  create: async (req, res) => {
    try {
      const matricula = req.body;
      const matriculaCriado = await Service.create(matricula);
      return res.json(matriculaCriado);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { idCurso, idAluno } = req.params;
      const alunoDeletado = await Service.delete(+idCurso, +idAluno);
      return res.json(alunoDeletado);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const parcialAluno = req.body;

    const alunoAtualizado = await Service.update(+id, parcialAluno);
    return res.json(alunoAtualizado);
  },
};
