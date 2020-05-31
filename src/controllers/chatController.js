module.exports.initChat = function(application, req, res){
  const { apelido } = req.body;
  // console.log(apelido);
  // if(!validationResult(req).isEmpty()){ res.send('Existem erros no formulario!'); return; }

  //recuperando obj socket.io
  application.get('io').emit('msgParaCliente',{
    apelido: apelido,
    mensagem: 'acabou de entrar no chat!'
  });

  res.render("chat", {user: apelido, validacao: ''},);
}
