
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var fs = require('fs');
var path = require('path');
const hedefDizin = 'C:/Users/PC/Desktop'; // Klasörün oluşturulacağı hedef dizin


export default function handler(req, res) {
  const {input} = req.body
  const klasorAdi = input ;
  const klasorYolu = path.join(hedefDizin, klasorAdi);
  //const folderName = 'c:\Users\PC\Desktop';

try {
  // if (!fs.existsSync(folderName)) {
  //   fs.mkdirSync(folderName);
  //   fs.mkdir(path.join(folderName,'/test'))
  // }
 
fs.mkdir(klasorYolu, (hata) => {
  if (hata) {
    console.error('Klasör oluşturulamadı:', hata);
  } else {
    console.log('Klasör başarıyla oluşturuldu.');
  }
});
// const hedefDizin = 'C:/Users/PC/Desktop/YeniKlasorxxx'; // Dosyanın oluşturulacağı hedef dizin
// const dosyaAdi = 'yeniDosya.txt'; // Oluşturulacak dosyanın adı

// const dosyaYolu = path.join(hedefDizin, dosyaAdi);

// fs.writeFile(dosyaYolu, 'Dosyanın içeriği', (hata) => {
//   if (hata) {
//     console.error('Dosya oluşturulamadı:', hata);
//   } else {
//     console.log('Dosya başarıyla oluşturuldu.');
//   }
// });
 res.status(200).end();
} catch (err) {
  console.error(err);
  res.status(404).end();
}
}



