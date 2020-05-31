const { check, validationResult } = require('express-validator');

module.exports = function(application){
  application.post('/chat',
    [
      check('apelido','Informe o apelido!').not().isEmpty(),
      check('apelido','Apelido deve ter mais de 3 caracteres!').isLength({min:3, max: 15})
    ],(req,res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) { res.render("index",{validacao: errors.array()}); }

    application.src.controllers.chatController.initChat(application, req, res);
  });

  application.get('/chat',function(req,res){
    application.src.controllers.chatController.initChat(application, req, res);
  });
}
