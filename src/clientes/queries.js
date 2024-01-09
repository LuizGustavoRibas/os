const getClientes = "SELECT * FROM clientes";
const getClientesById = "SELECT * FROM clientes WHERE id = $1";
const addClientes = "INSERT INTO clientes (razao_social, nome_fantasia, cnpj, cep, numero_endereco, bairro, cidade, estado, numero_telefone, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
const removeClientes = "DELETE FROM clientes WHERE id = $1";
const updateClientes = "UPDATE clientes SET razao_social = $1, nome_fantasia = $2, cnpj = $3, cep = $4, numero_endereco = $5, bairro = $6, cidade = $7, estado = $8, numero_telefone = $9, email = $10 WHERE id = $11";

module.exports = {
    getClientes,
    getClientesById,
    addClientes,
    removeClientes,
    updateClientes,
};