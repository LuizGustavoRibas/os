const pool = require('../../db');
const queries = require('./queries')

const getClientes = (req, res) => {
    pool.query(queries.getClientes, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getClientesById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getClientesById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addClientes = (req, res) => {
    const { razao_social, nome_fantasia, cnpj, cep, endereco, numero_endereco, bairro, cidade, estado, numero_telefone, email } = req.body;
    pool.query(queries.addClientes, [razao_social, nome_fantasia, cnpj, cep, endereco, numero_endereco, bairro, cidade, estado, numero_telefone, email], (error, results) => {
        if (error) throw error;
        res.status(201).send("Cliente criado");
    })
}


const removeClientes = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getClientesById, [id], (error, results) => {
        const noClientesFound = !results.rows.length;
        if (noClientesFound) {
            res.send("Cliente não existe no banco de dados.");
        }

        pool.query(queries.removeClientes, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Cliente removido com sucesso.")
        });
    });
};

const updateClientes = (req, res) => {
    const id = parseInt(req.params.id);
    const { razao_social, nome_fantasia, cnpj, cep, endereco, numero_endereco, bairro, cidade, estado, numero_telefone, email } = req.body;

    pool.query(queries.getClientesById, [id], (error, results) => {
        const noClientesFound = !results.rows.length;
        if (noClientesFound) {
            res.send("Cliente não existe no banco de dados.");
        }

        pool.query(queries.updateClientes, [razao_social, nome_fantasia, cnpj, cep, endereco, numero_endereco, bairro, cidade, estado, numero_telefone, email, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Cliente atualizado com sucesso")
        });
    });
};

module.exports = {
    getClientes,
    getClientesById,
    addClientes,
    removeClientes,
    updateClientes,
}