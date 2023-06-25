const mysql = require("mysql2/promise");

// MySQL bağlantı bilgilerini güncelleyin
const db = mysql.createPool({
    host: "",
    user: "",
    password: "",
    database: "",
});

// Bağlantı havuzundan bağlantı al
const getConnection = async () => {
    try {
        const connection = await db.getConnection();
        return connection;
    } catch (error) {
        throw new Error("MySQL bağlantısı alınamadı: " + error.message);
    }
};

module.exports = {
    db,
    getConnection,
};
