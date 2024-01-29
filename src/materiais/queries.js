const getMateriais = "SELECT * FROM materiais";
const getMateriaisById = "SELECT * FROM materiais WHERE id = $1";
const addMateriais = "INSERT INTO materiais (material) VALUES ($1)";
const removeMateriais = "DELETE FROM materiais WHERE id = $1";
const updateMateriais = "UPDATE materiais SET material = $1 WHERE id = $2";

module.exports = {
    getMateriais,
    getMateriaisById,
    addMateriais,
    removeMateriais,
    updateMateriais,
};