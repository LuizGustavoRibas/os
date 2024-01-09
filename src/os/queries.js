const getOs = "SELECT * FROM os";
const getOsById = "SELECT * FROM os WHERE id = $1";
const addOs = "INSERT INTO os (data_hora_inicio, data_hora_fim, nome_cliente, id_cliente, nome_tecnico, servico, id_servico, valor) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
const removeOs = "DELETE FROM os WHERE id = $1";
const updateOs = "UPDATE os SET data_hora_inicio = $1, data_hora_fim = $2, nome_cliente = $3, id_cliente = $4, nome_tecnico = $5, servico = $6, id_servico = $7, valor = $8 WHERE id = $9";

module.exports = {
    getOs,
    getOsById,
    addOs,
    removeOs,
    updateOs,
};