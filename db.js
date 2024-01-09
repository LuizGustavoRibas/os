const Pool = require('pg').Pool;

const connectionString = "postgresql://lgribas03:Oy9MvI1niUfg@ep-holy-truth-75069576.us-east-2.aws.neon.tech/os?sslmode=require"

const pool = new Pool({
    connectionString: connectionString
});

module.exports = pool;
