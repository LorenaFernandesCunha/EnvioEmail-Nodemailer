// NAO ESQUECER DE INSTALAR A LIB NODEMAILER


const nodemailer = require("nodemailer");

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: 'grupo.beca.angular@gmail.com', 
      pass: 'becaangular@2020', 
    },
    tls: {
        rejectUnauthorized: false,
    }
  });

   transporter.sendMail({
        from: '"Grupo Beca Angular " <grupo.beca.angular@gmail.com>', 
        to: "lorena.cunha@hotmail.com", 
        subject: "Email Teste", 
        text: "Teste Lorenaaaaaaaaa", 
        html: "<b>Teste Lorenaaaaaaaaa</b>", 
      }).then(message => {
          console.log(message);
        }).catch( err => {
            console.log(err);
         });
        

         