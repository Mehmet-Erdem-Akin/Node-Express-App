const { getConnection } = require("../db");

const createReservation = async (req, res) => {
  const { uye_id, ev_id, baslangic_tarihi, bitis_tarihi } = req.body;

  try {
    const connection = await getConnection();

    const query =
      "INSERT INTO rezervasyonlar (uye_id,ev_id ,baslangic_tarihi, bitis_tarihi) VALUES (?, ?, ?, ?)";

    await connection.query(query, [
      uye_id,
      ev_id,
      baslangic_tarihi,
      bitis_tarihi,
    ]);

    res.status(200).json({
      success: true,
      message: "Kayıt başarıyla oluşturuldu",
      result: {
        uye_id: uye_id,
        ev_id: ev_id,
        baslangic_tarihi: baslangic_tarihi,
        bitis_tarihi: bitis_tarihi,
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

const deleteReservation = async (req, res) => {
  const { id } = req.body;

  try {
    const connection = await getConnection();
    const query = "DELETE FROM rezervasyonlar WHERE rezervasyon_id = ?";

    [reservations] = await connection.query(
      "SELECT * FROM rezervasyonlar WHERE rezervasyon_id=?",
      [id]
    );
    if (reservations.length > 0) {
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

const updateReservation = async (req, res) => {
  const { id, uye_id, ev_id, baslangic_tarihi, bitis_tarihi } = req.body;

  try {
    const connection = await getConnection();
    const query =
      "UPDATE rezervasyonlar SET uye_id= ?,ev_id= ? ,baslangic_tarihi= ?, bitis_tarihi= ? WHERE rezervasyon_id = ?";

    [reservations] = await connection.query(
      "SELECT * FROM rezervasyonlar WHERE rezervasyon_id=?",
      [id]
    );
    if (reservations.length > 0) {
      await connection.query(query, [
        uye_id,
        ev_id,
        baslangic_tarihi,
        bitis_tarihi,
        id,
      ]);

      res.status(200).json({
        success: true,
        message: "Kayıt başarıyla güncellendi.",
        result: {
          id: id,
          uye_id: uye_id,
          ev_id: ev_id,
          baslangic_tarihi: baslangic_tarihi,
          bitis_tarihi: bitis_tarihi,
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
  createReservation,
  deleteReservation,
  updateReservation,
};
