const pool = require('../../db');
const queries = require('./queries')

const getOs = (req, res) => {
    pool.query(queries.getOs, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getOsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getOsById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addOs = (req, res) => {
    const { data_hora_inicio, data_hora_fim, nome_cliente, endereco, numero_endereco, id_cliente, nome_tecnico, servico, id_servico, valor, obs, material, id_material, assinatura } = req.body;
    pool.query(queries.addOs, [data_hora_inicio, data_hora_fim, nome_cliente, endereco, numero_endereco, id_cliente, nome_tecnico, servico, id_servico, valor, obs, material, id_material, assinatura], (error, results) => {
        if (error) throw error;
        res.status(201).send("OS criada");
    })
}


const removeOs = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getOsById, [id], (error, results) => {
        const noOsFound = !results.rows.length;
        if (noOsFound) {
            res.send("OS não existe no banco de dados.");
        }

        pool.query(queries.removeOs, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("OS removida com sucesso.")
        });
    });
};

const updateOs = (req, res) => {
    const id = parseInt(req.params.id);
    const { data_hora_inicio, data_hora_fim, nome_cliente, endereco, numero_endereco, id_cliente, nome_tecnico, servico, id_servico, valor, obs, material, id_material, assinatura } = req.body;

    pool.query(queries.getOsById, [id], (error, results) => {
        const noOsFound = !results.rows.length;
        if (noOsFound) {
            res.send("OS não existe no banco de dados.");
        }

        pool.query(queries.updateOs, [data_hora_inicio, data_hora_fim, nome_cliente, endereco, numero_endereco, id_cliente, nome_tecnico, servico, id_servico, valor, obs, material, id_material, assinatura, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Os atualizada com sucesso")
        });
    });
};

module.exports = {
    getOs,
    getOsById,
    addOs,
    removeOs,
    updateOs,
}