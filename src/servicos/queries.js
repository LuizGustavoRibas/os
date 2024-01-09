const getServicos = "SELECT * FROM os";
const getServicosById = "SELECT * FROM os WHERE id = $1";
const addServicos = "INSERT INTO os (servico) VALUES ($1)";
const removeServicos = "DELETE FROM os WHERE id = $1";
const updateServicos = "UPDATE os SET servico = $1 WHERE id = $2";

module.exports = {
    getServicos,
    getServicosById,
    addServicos,
    removeServicos,
    updateServicos,
};