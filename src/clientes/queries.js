const getClientes = "SELECT * FROM clientes";
const getClientesById = "SELECT * FROM clientes WHERE id = $1";
const addClientes = "INSERT INTO clientes (razao_social, nome_fantasia, cnpj, cep, endereco, numero_endereco, bairro, cidade, estado, numero_telefone, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";
const removeClientes = "DELETE FROM clientes WHERE id = $1";
const updateClientes = "UPDATE clientes SET razao_social = $1, nome_fantasia = $2, cnpj = $3, cep = $4, endereco = $5, numero_endereco = $6, bairro = $7, cidade = $8, estado = $9, numero_telefone = $10, email = $11 WHERE id = $12";

module.exports = {
    getClientes,
    getClientesById,
    addClientes,
    removeClientes,
    updateClientes,
};