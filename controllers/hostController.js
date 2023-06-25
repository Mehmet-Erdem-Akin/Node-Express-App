const { getConnection } = require("../db");

const createHost = async (req, res) => {
  const { ev_sahibi_adi, telefon } = req.body;

  try {
    const connection = await getConnection();

    const query =
      "INSERT INTO ev_sahipleri (ev_sahibi_adi, telefon) VALUES (?, ?)";

    await connection.query(query, [ev_sahibi_adi, telefon]);

    res.status(200).json({
      success: true,
      message: "Kayıt başarıyla oluşturuldu",
      result: {
        ev_sahibi_adi: ev_sahibi_adi,
        telefon: telefon,
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

const deleteHost = async (req, res) => {
  const { id } = req.body;

  try {
    const connection = await getConnection();
    const query = "DELETE FROM ev_sahipleri WHERE ev_sahibi_id = ?";

    [hosts] =  await connection.query("SELECT * FROM ev_sahipleri WHERE ev_sahibi_id=?",[id]);
    if(hosts.length>0){
      await connection.query(query, [id]);

      res.status(200).json({
        success: true,
        message: "Kayıt başarıyla silindi.",
        result: {
          ev_sahibi_id: id,
        },
      });
    } else{
      res.status(400).json({
        success: false,
        message: "Kayıt Bulunamadı",
      });
      console.log("Kayıt Bulunamadı!")
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Kayıt silinemedi",
      error: error.stack,
    });
  }
};

const updateHost = async (req, res) => {
  const { id, ev_sahibi_adi, telefon } = req.body;

  try {
    const connection = await getConnection();
    const query =
      "UPDATE ev_sahipleri SET ev_sahibi_adi= ?,telefon= ? WHERE ev_sahibi_id = ?";


    [hosts] =  await connection.query("SELECT * FROM ev_sahipleri WHERE ev_sahibi_id=?",[id]);
    if(hosts.length>0){
      await connection.query(query, [ev_sahibi_adi, telefon, id]);

      res.status(200).json({
        success: true,
        message: "Kayıt başarıyla güncellendi.",
        result: {
          id: id,
          ev_sahibi_adi: ev_sahibi_adi,
          telefon: telefon,
        },
      });
    } else{
      res.status(400).json({
        success: false,
        message: "Kayıt Bulunamadı",
      });
      console.log("Kayıt Bulunamadı!")
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
  createHost,
  deleteHost,
  updateHost,
};
