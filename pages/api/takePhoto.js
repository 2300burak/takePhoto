
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var fs = require('fs');
const NodeWebcam = require('node-webcam');

// Kamera seçeneklerini yapılandırma
const opts = {
  width: 1280,
  height: 720,
  quality: 100,
  output: 'png',
  // Diğer seçenekleri de burada belirtebilirsiniz
};

// Kamera nesnesi oluşturma
const Webcam = NodeWebcam.create(opts);

// Fotoğraf çekme fonksiyonu
const takePhoto = async () => {
  // Webcam.capture('resimxx', (err, data) => {
  //   if (err) {
  //     console.error('Fotoğraf çekilemedi:', err);
  //   } else {
  //     const resimYolu = 'C:/Users/PC/Desktop/YeniKlasorxxx/resimxx.png';
  //     fs.writeFile(resimYolu, data, 'base64', (hata) => {
  //       if (hata) {
  //         console.error('Fotoğraf kaydedilemedi:', hata);
  //       } else {
  //         console.log('Fotoğraf başarıyla çekildi ve kaydedildi:', resimYolu);
  //       }
  //     });
  //   }
  // });

  const resimYolu = 'C:/Users/PC/Desktop/YeniKlasorxxx/resim1.png';
  Webcam.capture(resimYolu, (err) => {
      if (err) {
        console.error('Fotoğraf çekilemedi:', err);
        return true
      } else {
        console.log('Fotoğraf başarıyla çekildi:', resimYolu);
        return false
      }
    });
  };


// Fotoğraf çekme işlemi

export default function handler(req, res) {
  //const folderName = 'c:\Users\PC\Desktop';
  const {input} = req.body
  const fileName = Date.now()
  const myPromise = new Promise((resolve, reject) => {
    const resimYolu = `C:/Users/PC/Desktop/${input}/${fileName}.png`;
    Webcam.capture(resimYolu, (err) => {
        if (err) {
          console.error('Fotoğraf çekilemedi:', err);
          return reject();
        } else {
          console.log('Fotoğraf başarıyla çekildi:', resimYolu);
          return resolve();
        }
      });
  });
  console.log("body=>",input)
  try {
    myPromise.then(resp=> res.status(200).end())
    .catch(err=>console.log("err",err))
    
  } catch (err) {
    console.error(err);
    res.status(404).end();
  }
}




