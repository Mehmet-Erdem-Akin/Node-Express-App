const { getConnection } = require("../db");

const createHome = async (req, res) => {
  const { ev_sahibi_id, sehir, oda_sayisi, haftalik_ucret } = req.body;

  try {
    const connection = await getConnection();

    const query =
      "INSERT INTO evler (ev_sahibi_id,sehir ,oda_sayisi ,haftalik_ucret) VALUES (?, ?, ?, ?)";

    await connection.query(query, [
      ev_sahibi_id,
      sehir,
      oda_sayisi,
      haftalik_ucret,
    ]);

    res.status(200).json({
      success: true,
      message: "Kayıt başarıyla oluşturuldu",
      result: {
        ev_sahibi_id: ev_sahibi_id,
        sehir: sehir,
        oda_sayisi: oda_sayisi,
        haftalik_ucret: haftalik_ucret,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Kayıt oluşturulamadı",
      error: error.stack,
    });
  }
};

const deleteHome = async (req, res) => {
  const { id } = req.body;

  try {
    const connection = await getConnection();
    const query = "DELETE FROM evler WHERE ev_id = ?";

    [homes] = await connection.query("SELECT * FROM evler WHERE ev_id=?", [id]);
    if (homes.length > 0) {
      await connection.query(query, [id]);

      res.status(200).json({
        success: true,
        message: "Kayıt başarıyla silindi.",
        result: {
          id: id,
        },
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Kayıt Bulunamadı",
      });
      console.log("Kayıt Bulunamadı!");
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Kayıt silinemedi",
      error: error.stack,
    });
  }
};

const updateHome = async (req, res) => {
  const { id, ev_sahibi_id, sehir, oda_sayisi, haftalik_ucret } = req.body;

  try {
    const connection = await getConnection();
    const query =
      "UPDATE evler SET ev_sahibi_id= ?,sehir= ? ,oda_sayisi= ?, haftalik_ucret= ? WHERE ev_id = ?";

    [homes] = await connection.query("SELECT * FROM evler WHERE ev_id=?", [id]);
    if (homes.length > 0) {
      await connection.query(query, [
        ev_sahibi_id,
        sehir,
        oda_sayisi,
        haftalik_ucret,
        id,
      ]);

      res.status(200).json({
        success: true,
        message: "Kayıt başarıyla güncellendi.",
        result: {
          id: id,
          ev_sahibi_id: ev_sahibi_id,
          sehir: sehir,
          oda_sayisi: oda_sayisi,
          haftalik_ucret: haftalik_ucret,
        },
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Kayıt Bulunamadı",
      });
      console.log("Kayıt Bulunamadı!");
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Kayıt güncellenemedi.",
      error: error.stack,
    });
  }
};

module.exports = {
  createHome,
  deleteHome,
  updateHome,
};
