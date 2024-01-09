const getServicos = "SELECT * FROM servicos";
const getServicosById = "SELECT * FROM servicos WHERE id = $1";
const addServicos = "INSERT INTO servicos (servico) VALUES ($1)";
const removeServicos = "DELETE FROM servicos WHERE id = $1";
const updateServicos = "UPDATE servicos SET servico = $1 WHERE id = $2";

module.exports = {
    getServicos,
    getServicosById,
    addServicos,
    removeServicos,
    updateServicos,
};