Blog sayfasını tasarlamaya başlamadan, diğer blog sayfalarını inceledim ve sayfalarda yaklaşık okuma sürelerini paylaştıkları dikkatimi çekti.
İnsanların okuma süresini nasıl hesaplayabilirdim ki ?

Biraz araştırma sonucu 
Okuma hızı = Okunan kelime sayısı / Okuma Süresi(dk) formulünü buldum denklemi yer değiştirirsek ihtiyacım olan 
Okuma Süresi = Okunan kelime sayısı / Okuma hızı ise 
Okuma Süresi = Okunan kelime sayısı / (Okunan kelime sayısı / Okuma Süresi(dk)) formülünü elde edebiliriz.

gereken herşeye sahip olduğumuza göre küçük bir script ile blog sitemize uygulayalım

hesaplamalar 300 kelimenin 1 dakikada okunduğu varsayılarak yapılacaktır.

Örnek Javascript Uygulamamız

let metin = `Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.`;

let kelime_sayisi = metin.split(' ').length;

let okuma_suresi_dk = Math.ceil(kelime_sayisi / 300) * 1; 


Fonksiyonumuz şu şekilde olabilir 

function OkumaSuresiHesapla(metin,dkMaxKelime = 300,dk = 1){
    return (Math.ceil(metin.split(' ').length / dkMaxKelime)) * dk;
}

