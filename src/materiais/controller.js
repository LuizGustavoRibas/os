const pool = require('../../db');
const queries = require('./queries')

const getMateriais = (req, res) => {
    pool.query(queries.getMateriais, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getMateriaisById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getMateriaisById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addMateriais = (req, res) => {
    const { material } = req.body;
    pool.query(queries.addMateriais, [material], (error, results) => {
        if (error) throw error;
        res.status(201).send("Material criado");
    })
}


const removeMateriais = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getMateriaisById, [id], (error, results) => {
        const noMateriaisFound = !results.rows.length;
        if (noMateriaisFound) {
            res.send("Material não existe no banco de dados.");
        }

        pool.query(queries.removeMateriais, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Material removido com sucesso.")
        });
    });
};

const updateMateriais = (req, res) => {
    const id = parseInt(req.params.id);
    const {material} = req.body;

    pool.query(queries.getMateriaisById, [id], (error, results) => {
        const noMateriaisFound = !results.rows.length;
        if (noMateriaisFound) {
            res.send("Serviço não existe no banco de dados.");
        }

        pool.query(queries.updateMateriais, [material, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Material atualizado com sucesso")
        });
    });
};

module.exports = {
    getMateriais,
    getMateriaisById,
    addMateriais,
    removeMateriais,
    updateMateriais,
}