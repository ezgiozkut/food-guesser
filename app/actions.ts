"use server"

// Food database with dietary restriction flags
const foodDatabase = [
  { name: "Kebap", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Mercimek Çorbası", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Menemen", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "İskender Kebap", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Bulgur Pilavı", vegetarian: true, vegan: true, glutenFree: false, lactoVegetarian: true },
  { name: "Lahmacun", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Sigara Böreği", vegetarian: true, vegan: false, glutenFree: false, lactoVegetarian: true },
  { name: "Hünkar Beğendi", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Patlıcan Kebabı", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Tarhana Çorbası", vegetarian: true, vegan: false, glutenFree: false, lactoVegetarian: true },
  { name: "Zeytinyağlı Yaprak Sarma", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Kuru Fasulye", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Kısır", vegetarian: true, vegan: true, glutenFree: false, lactoVegetarian: true },
  { name: "Tavuklu Pilav", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Muhlama", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Mantı", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Ezogelin Çorbası", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Gözleme", vegetarian: true, vegan: false, glutenFree: false, lactoVegetarian: true },
  { name: "Pide", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Meze Tabağı", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Tavuk Şiş", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Yoğurt Çorbası", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Sucuklu Yumurta", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Kumpir", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Midye Dolma", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Çiğ Köfte", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Perde Pilavı", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Kuzu Tandır", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Kaşarlı Pide", vegetarian: true, vegan: false, glutenFree: false, lactoVegetarian: true },
  { name: "Etli Ekmek", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Acılı Ezme", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "İmam Bayıldı", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Kuzu Şiş", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Karniyarık", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Tirit", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Zeytinyağlı Enginar", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Alinazik", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Su Böreği", vegetarian: true, vegan: false, glutenFree: false, lactoVegetarian: true },
  { name: "Taze Fasulye (Zeytinyağlı)", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Mantar Sote", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Balık Ekmek", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Hamsi Tava", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Levrek Izgara", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Çipura Izgara", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Palamut Izgara", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Arnavut Ciğeri", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Ciğer Tava", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Tavuk Kavurma", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Biber Dolması (Etli)", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Biber Dolması (Zeytinyağlı)", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Fırında Tavuk", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Fırında Sebze", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Zeytinyağlı Taze Fasulye", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Zeytinyağlı Barbunya", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Sebzeli Güveç", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Mantar Güveç", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Tavuklu Güveç", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Bamya Yemeği", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Kapuska", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Lahana Sarması", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Ispanak Yemeği", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Fırında Köfte", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "İçli Köfte", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Antep Lahmacun", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Konya Etli Ekmek", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Yörük Kebabı", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Testi Kebabı", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Orman Kebabı", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Patatesli Tavuk", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Patatesli Et Yemeği", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Kurufasulye (Etli)", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Bezelye Yemeği (Etli)", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Bezelye Yemeği (Zeytinyağlı)", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Tavuklu Bezelye", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Kabak Dolması (Etli)", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Kabak Dolması (Zeytinyağlı)", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Tavuklu Salata", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Çoban Salata", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Ezme Salata", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Piyaz", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Ton Balıklı Salata", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Köfteli Salata", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Barbunya Pilaki", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Kestaneli Pilav", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Meyhane Pilavı", vegetarian: true, vegan: false, glutenFree: false, lactoVegetarian: true },
  { name: "Tavuk Sote", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Et Sote", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Saç Kavurma", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Kuzu Haşlama", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Tavuk Haşlama", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Elbasan Tava", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Fırında Karnabahar", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Tavuklu Makarna", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Sebzeli Makarna", vegetarian: true, vegan: true, glutenFree: false, lactoVegetarian: true },
  { name: "Ton Balıklı Makarna", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Kıymalı Makarna", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Sebzeli Omlet", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Peynirli Omlet", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Patatesli Yumurtalı Kavurma", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Balık Çorbası", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Tavuk Çorbası", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Düğün Çorbası", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Sebze Çorbası", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Mantar Çorbası", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Domates Çorbası", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Kelle Paça Çorbası", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Tavuk Ciğer Sote", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Mercimekli Köfte", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Yeşil Mercimek Yemeği", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Kıymalı Patates", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Tavuklu Patates", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Kuşbaşı Etli Pilav", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Kabak Mücveri", vegetarian: true, vegan: false, glutenFree: false, lactoVegetarian: true },
  { name: "Tavuk Dürüm", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Et Dürüm", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Sebzeli Dürüm", vegetarian: true, vegan: true, glutenFree: false, lactoVegetarian: true },
  { name: "Tavuklu Mantarlı Sote", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Etli Patlıcan Musakka", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Sebzeli Patlıcan Musakka", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Karnabahar Kızartması", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Brokoli Salatası", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Yoğurtlu Brokoli", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Kuzu Etli Sebze Tava", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Kuzu Kavurma", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Tavuk Göğüs Izgara", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Tavuk Kanat Izgara", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Kuzu Pirzola", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Dana Biftek", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Maçka Köftesi", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Hamsili Pilav", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Karides Güveç", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Kalamar Tava", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Piyaz (Antalya)", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Fava", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Enginar Dolması", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Patlıcan Salatası", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Kabak Çiçeği Dolması", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Güllaç", vegetarian: true, vegan: false, glutenFree: false, lactoVegetarian: true },
  { name: "Cevizli Börek", vegetarian: true, vegan: false, glutenFree: false, lactoVegetarian: true },
  { name: "Kuzu İncik", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Patatesli Köfte", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Tavuk Alabalık", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Alabalık Izgara", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Kuzu Gerdan", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Yayla Çorbası", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Ekşili Köfte", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Kabak Sinkonta", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Semizotu Yemeği", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Patatesli Yumurta", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Havuç Tarator", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Soslu Patlıcan Kızartması", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Höşmerim", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Sıcak Humus", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Kuru Dolma (Patlıcan)", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Tavuk Ciğer Tava", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Kuzu Ciğer Tava", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Ciğer Şiş", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Tavuk Fajita (Turkish Style)", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Et Fajita (Turkish Style)", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Zeytinyağlı Bakla", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Zeytinyağlı Kereviz", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Patates Salatası", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Közlenmiş Biber Ezmesi", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Kabak Sıyırma", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Yoğurtlu Ispanak", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Sebzeli Bulgur Pilavı", vegetarian: true, vegan: true, glutenFree: false, lactoVegetarian: true },
  { name: "Tavuklu Bulgur Pilavı", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Nohutlu Pilav", vegetarian: true, vegan: true, glutenFree: false, lactoVegetarian: true },
  { name: "Tavuklu Nohut", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Hamsi Buğulama", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Kiremitte Köfte", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Kiremitte Sebze", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Arpa Şehriye Pilavı", vegetarian: true, vegan: true, glutenFree: false, lactoVegetarian: true },
  { name: "Kabak Çorbası", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Mısır Çorbası", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Bulgurlu Sebze Çorbası", vegetarian: true, vegan: true, glutenFree: false, lactoVegetarian: true },
  { name: "Tavuklu Sebze Çorbası", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Lebeniye Çorbası", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Patatesli Bezelye", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Zeytinyağlı Pırasa", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Etli Pırasa", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Tavuklu Pırasa", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Zeytinyağlı Kuru Dolma", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Patlıcan Oturtma", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Sebzeli Oturtma", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Zeytinyağlı Semizotu", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Tavuk Kalamar (soslu)", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Kuzu Külbastı", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Çökertme Kebabı", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Kıymalı Börek", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Mercimekli Börek", vegetarian: true, vegan: false, glutenFree: false, lactoVegetarian: true },
  { name: "Patatesli Börek", vegetarian: true, vegan: false, glutenFree: false, lactoVegetarian: true },
  { name: "Tavuk Baget Izgara", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Hamsi Pilavı", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Karadeniz Pidesi", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Kaşarlı Menemen", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Mantarlı Omlet", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Yoğurtlu Tavuk Sote", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Sebzeli Köfte", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Peynirli Köfte", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Dalyan Köfte", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Püreli Tas Kebabı", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Havuçlu Pilav", vegetarian: true, vegan: true, glutenFree: false, lactoVegetarian: true },
  { name: "Tavuk Tantuni", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Et Tantuni", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Döner Dürüm", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Döner Porsiyon", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Yufkalı Kebap", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Pastırmalı Humus", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Patatesli Menemen", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Sebzeli Yumurtalı Ekmek", vegetarian: true, vegan: false, glutenFree: false, lactoVegetarian: true },
  { name: "Tavuklu Tost", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Kavurmalı Tost", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Peynirli Tost", vegetarian: true, vegan: false, glutenFree: false, lactoVegetarian: true },
  { name: "Sebzeli Mantar Sote", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "İç Baklalı Enginar", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Zeytinyağlı Brüksel Lahanası", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Tavuklu Brüksel Lahanası", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Kabak Spagetti (Sebzeli)", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Kestaneli Kuzu Güveç", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Midye Tava", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Hamsi Kuşu", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Kırmızı Biber Dolması", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Kabak Ezmesi", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Kabak Graten", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Patlıcan Graten", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Tavuklu Bezelye Graten", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Mantar Dolması", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Sebzeli Buhara Pilavı", vegetarian: true, vegan: true, glutenFree: false, lactoVegetarian: true },
  { name: "Etli Buhara Pilavı", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Tavuklu Buhara Pilavı", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Soğan Dolması", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Tavuklu Karnıyarık", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Sebzeli Tavuk Sarma", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Ispanak Graten", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Sebzeli Patates Graten", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Tavuklu Patates Graten", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Mısırlı Pirinç Pilavı", vegetarian: true, vegan: true, glutenFree: false, lactoVegetarian: true },
  { name: "Nohutlu Bulgur Pilavı", vegetarian: true, vegan: true, glutenFree: false, lactoVegetarian: true },
  { name: "Kuzu Etli Şehriye Pilavı", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Zeytinyağlı Bakla Ezmesi", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Sebzeli Bostan Kebabı", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Etli Bostan Kebabı", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Tavuklu Bostan Kebabı", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Karnabahar Salatası", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Sebzeli Yayla Çorbası", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Topalak Çorbası", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Taratorlu Lahana", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Sarımsaklı Ispanak", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Kabak Yemeği (Yoğurtlu)", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Naneli Ayran Çorbası", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Kuzu Kokoreç", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Tavuk Kokoreç", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Sakatat Tabağı", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Dalyan Balık", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Sebzeli Mantar Dolma", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Etli Pazı Dolması", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Zeytinyağlı Pazı Sarması", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Yeşil Fasulye Kavurma", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Deniz Mahsullü Güveç", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Sebzeli Közleme", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Biberiyeli Tavuk", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Sebzeli Türlü", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Etli Türlü", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Tavuklu Türlü", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Sacda Tavuk", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Sacda Et", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Patatesli Közleme", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Pırasa Köftesi", vegetarian: true, vegan: false, glutenFree: false, lactoVegetarian: true },
  { name: "Mantar Dolgulu Tavuk Sarma", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Zeytinyağlı Kereviz Dolması", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Patatesli Pırasa", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Yeşil Mercimek Çorbası", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Hindi Tandır", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Hindi Sote", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Tavuklu Krep", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Mantarlı Krep", vegetarian: true, vegan: false, glutenFree: false, lactoVegetarian: true },
  { name: "Sebzeli Omlet (Kabaklı)", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Biberli Omlet", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Soğan Halkalı Köfte", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Sebzeli Şinitzel (Tavuk)", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Kabak Şinitzel (vejetaryen)", vegetarian: true, vegan: false, glutenFree: false, lactoVegetarian: true },
  { name: "Levrek Buğulama", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Çipura Buğulama", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Fırında Hamsi", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Kadınbudu Köfte", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Tavuk Kebabı", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Mahmudiye (Tavuk)", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Etli Terbiyeli Kereviz", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Sebzeli Terbiyeli Kereviz", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Sarımsaklı Köfte", vegetarian: true, vegan: false, glutenFree: false, lactoVegetarian: true },
  { name: "İşkembeli Nohut", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Etli Pazı Kavurma", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Sebzeli Pazı Kavurma", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Fırında Patates Gravyer", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Sebzeli Alinazik", vegetarian: true, vegan: false, glutenFree: true, lactoVegetarian: true },
  { name: "Tavuklu Alinazik", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Soya Fasulyesi Salatası", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
  { name: "Karides Tava", vegetarian: false, vegan: false, glutenFree: false, lactoVegetarian: false },
  { name: "Karides Sote", vegetarian: false, vegan: false, glutenFree: true, lactoVegetarian: false },
  { name: "Erişteli Yeşil Mercimek", vegetarian: true, vegan: false, glutenFree: false, lactoVegetarian: true },
  { name: "Taze Fasulye Kavurması", vegetarian: true, vegan: true, glutenFree: true, lactoVegetarian: true },
]

export async function getRandomFood(restrictions: string[]) {
  // Filter foods based on dietary restrictions
  let filteredFoods = [...foodDatabase]

  if (restrictions.includes("vegetarian")) {
    filteredFoods = filteredFoods.filter((food) => food.vegetarian)
  }

  if (restrictions.includes("vegan")) {
    filteredFoods = filteredFoods.filter((food) => food.vegan)
  }

  if (restrictions.includes("lactoVegetarian")) {
    filteredFoods = filteredFoods.filter((food) => food.lactoVegetarian)
  }

  if (restrictions.includes("glutenFree")) {
    filteredFoods = filteredFoods.filter((food) => food.glutenFree)
  }

  // If no foods match the criteria, return a message
  if (filteredFoods.length === 0) {
    return "No matching foods found!"
  }

  // Add a small delay to simulate server processing
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Return a random food from the filtered list
  const randomIndex = Math.floor(Math.random() * filteredFoods.length)
  return filteredFoods[randomIndex].name
}

