const { Router } = require('express');
const router = Router();
const User = require('../models/User');


//Ruta para crear nuevos usuarios
router.post('/usuario', async (req, res, next) => {
    const {username, email, telephone, password} = req.body;
    const user = new User ({
        username,
        email,
        telephone,
        password
    });
    user.password = await user.encryptPassword(user.password);
    await user.save();

    res.json({message: 'El usuario se registro correctamente en la base de datos'})

})

router.delete('/usuario/:id', async (req, res) => {
    try {
      const usuarioId = req.params.id;
      const usuarioEliminado = await User.findByIdAndDelete(usuarioId);
  
      //Si no se encuentra el usaurio con este id
      if (!usuarioEliminado) {
        return res.status(404).send({ mensaje: 'Usuario no encontrado' });
      }
  
      //Pero si lo encuentra lo elimina
      res.send({ mensaje: 'Usuario eliminado con éxito', usuario: usuarioEliminado });
    } catch (error) {
      //Si sucede algun error inesperado saldra este mensaje
      res.status(500).send({ mensaje: 'Error al eliminar el usuario', error });
    }
  });

module.exports = router;