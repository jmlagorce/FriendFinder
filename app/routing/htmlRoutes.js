var path = require("path");

module.exports = function(app) {

    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/surveyexp.html"));
    });

    // app.get("/tes", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/surveyexp.html"));
    //   });

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
  
    
  };
  