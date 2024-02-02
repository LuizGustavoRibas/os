const pool = require('../../db');
const queries = require('./queries')

const getServicos = (req, res) => {
    pool.query(queries.getServicos, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getServicosById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getServicosById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addServicos = (req, res) => {
    const { servico } = req.body;
    pool.query(queries.addServicos, [servico], (error, results) => {
        if (error) throw error;
        res.status(201).send("Servico criado");
    })
}


const removeServicos = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getServicosById, [id], (error, results) => {
        const noServicosFound = !results.rows.length;
        if (noServicosFound) {
            res.send("Servico não existe no banco de dados.");
        }

        pool.query(queries.removeServicos, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Servico removida com sucesso.")
        });
    });
};

const updateServicos = (req, res) => {
    const id = parseInt(req.params.id);
    const {servico} = req.body;

    pool.query(queries.getServicosById, [id], (error, results) => {
        const noServicosFound = !results.rows.length;
        if (noServicosFound) {
            res.send("Serviço não existe no banco de dados.");
        }

        pool.query(queries.updateServicos, [servico, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Serviço atualizado com sucesso")
        });
    });
};

module.exports = {
    getServicos,
    getServicosById,
    addServicos,
    removeServicos,
    updateServicos,
}