
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var fs = require('fs');
var path = require('path');
const kaynakKlasor = 'C:/Users/PC/Desktop/resimler'; // Kaynak klasörün yolu
const hedefKlasor = 'C:/Users/PC/Desktop/YeniKlasorxxx'; // Hedef dosyanın yolu


const kaynakDosya = path.join(kaynakKlasor, 'deneme.png');
const hedefDosya = path.join(hedefKlasor, 'deneme.png');
export default function handler(req, res) {
  //const folderName = 'c:\Users\PC\Desktop';

  try {
    
    fs.rename(kaynakDosya, hedefDosya, (hata) => {
      if (hata) {
        console.error('Dosya kesilemedi ve yapıştırılamadı:', hata);
      } else {
        console.log('Dosya başarıyla kesildi ve yapıştırıldı.');
      }
    });
    res.status(200).end();
  } catch (err) {
    console.error(err);
    res.status(404).end();
  }
}



