const getOs = "SELECT * FROM os";
const getOsById = "SELECT * FROM os WHERE id = $1";
const addOs = "INSERT INTO os (data_hora_inicio, data_hora_fim, nome_cliente, endereco, numero_endereco, id_cliente, nome_tecnico, servico, id_servico, valor, obs, aberta, material, id_material) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)";
const removeOs = "DELETE FROM os WHERE id = $1";
const updateOs = "UPDATE os SET data_hora_inicio = $1, data_hora_fim = $2, nome_cliente = $3, endereco = $4, numero_endereco = $5, id_cliente = $6, nome_tecnico = $7, servico = $8, id_servico = $9, valor = $10, obs = $11, aberta = $12, material = $13, id_material = $14 WHERE id = $15";

module.exports = {
    getOs,
    getOsById,
    addOs,
    removeOs,
    updateOs,
};