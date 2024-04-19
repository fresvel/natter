import whatsapp from "whatsapp-web.js"
import qrcode from "qrcode-terminal"


const { Client, LocalAuth } = whatsapp;

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

export const send_whatsapp = async (req, res) => {
  console.log(req.body);

  await req.body.contactos.forEach(async numero => {
    const result= await client.sendMessage(numero+"@c.us",req.body.message)
    console.log("Mensaje enviado")
    res.json({result})
    
  });


}

