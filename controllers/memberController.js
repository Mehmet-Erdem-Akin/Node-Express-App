const crypto = require("crypto");
const { getConnection } = require("../db");

const createMember = async (req, res) => {
  const { name, eposta, password } = req.body;

  const currentDate = new Date();

  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  try {
    const sha1Hash = crypto.createHash("sha1");
    const parolaHash = sha1Hash.update(password).digest("hex");
    const connection = await getConnection();

    const query =
        "INSERT INTO uyeler (uye_adi, parola, eposta, tarih, saat) VALUES (?, ?, ?, ?, ?)";

    await connection.query(query, [name, parolaHash, eposta, formattedDate, formattedTime]);

    res.status(200).json({
      success: true,
      message: "Kayıt başarıyla oluşturuldu",
      result: {
        name: name,
        parola: parolaHash,
        eposta: eposta,
        date: formattedDate,
        time: formattedTime,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Kayıt oluşturulamadı", error: error.stack });
  }
};

module.exports = {
  createMember,
};
