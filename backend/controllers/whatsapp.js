import whatsapp from "whatsapp-web.js"
import qrcode from "qrcode-terminal"
import fs from "fs"
import { body } from "express-validator";


const { Client, LocalAuth, MessageMedia } = whatsapp;

// Create a new client instance
const wwebVersion = '2.2407.3';
const authPath = ''; // add yours
const client = new Client({
   authStrategy: new LocalAuth({
     clientId: 'CLIENT_ID',
     dataPath: authPath,
   }),
   puppeteer: {
     headless: true,
     args: ['--no-sandbox'],
   },
   // * hot-fix version 1.23.0
   webVersionCache: {
     type: 'remote',
     remotePath: `https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/${wwebVersion}.html`,
   },
   // * end of hot-fix
 });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Client is ready!');
});

// When the client received QR-Code
client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr,{small: true});
});

// Start your client
client.initialize();

/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const send_whatsapp = async (req, res) => {
  console.log(req.body);
  await req.body.contactos.forEach(async contacto => {
    let numero=contacto.number;
    const mensaje=req.body.saludo.replace(/##/g, contacto.name)+"\n"+req.body.mensaje;


    
      if (numero.startsWith('+')){
        numero=numero.substring(1)+"@c.us"
      }else if (numero.startsWith('09')){
        numero="593"+numero.substring(1)+"@c.us"
      }else if (numero.startsWith('9')){

      }else{
        console.log("Invalid number: " + numero)
      }
      //const result=await client.sendMessage("593983200911@c.us",mensaje)
      console.log("Mensaje enviado: ");
      //console.log(result)    
  });
  fs.readFile("controllers/Image.jpeg", (err, data)=>{
    if(err){
      console.log("Error: " + err)
      return
    }
    const base64Image=Buffer.from(data).toString('base64');
    const media=new MessageMedia("image/jpeg",base64Image)
    const result=client.sendMessage("593983200911@c.us",media)
    res.json({ok:true})
  })


}

