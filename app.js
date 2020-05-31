var app = require('./src/config/server');

const server = app.listen(3000, function(){
    console.log("Servidor ON");
});

// criar conexao por websocket
const io = require('socket.io').listen(server); //socket.io run porta 80
app.set('io',io); //cria variavel global para utilizar no controler

io.on('connection',function(socket){
  console.log('Usuario conectou!');

  socket.on('disconnect', function(){
      console.log('usuario desconectou');
  });

  //recebe o socket no html
  socket.on('msgMensagem', function(msgChatUsers){
      socket.emit('msgParaCliente',msgChatUsers);
      socket.broadcast.emit('msgParaCliente',msgChatUsers);

      //atualiza relacao de paticipantes
      if(parseInt(msgChatUsers.status_participante_adicionado) == 0){
        socket.emit('participantesParaCliente',{apelido: msgChatUsers.apelido});
        socket.broadcast.emit('participantesParaCliente',{apelido: msgChatUsers.apelido});
      }
  });



});
