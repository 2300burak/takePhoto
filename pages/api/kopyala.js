
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var fs = require('fs');
var path = require('path');
const kaynakKlasor = 'C:/Users/PC/Desktop'; // Kaynak klasörün yolu
const hedefDosya = 'C:/Users/PC/Desktop/resimler/images.png'; // Hedef dosyanın yolu
const kaynakDosya = path.join(kaynakKlasor, 'YeniKlasorxxx');
export default function handler(req, res) {
  //const folderName = 'c:\Users\PC\Desktop';

  try {

    const kaynakKlasor = 'C:/Users/PC/Desktop/resimler'; // Kaynak klasörün yolu
    const hedefKlasor = 'C:/Users/PC/Desktop/YeniKlasorxxx'; // Hedef klasörün yolu
    
    const kaynakDosya = path.join(kaynakKlasor, 'deneme.png');
    const hedefDosya = path.join(hedefKlasor, 'denemekopya.png');
    
    fs.copyFile(kaynakDosya, hedefDosya, (hata) => {
      if (hata) {
        console.error('Dosya kopyalanamadı:', hata);
      } else {
        console.log('Dosya başarıyla kopyalandı.');
      }
    });
    fs.
    res.status(200).end();
  } catch (err) {
    console.error(err);
    res.status(404).end();
  }
}



