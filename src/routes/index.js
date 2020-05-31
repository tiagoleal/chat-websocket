module.exports = function(application){
  application.get('/',function(req,res){
    application.src.controllers.indexController.index(application, req, res);
  });
}
