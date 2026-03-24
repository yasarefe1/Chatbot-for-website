import { AlertCircle, HeartPulse, Flame, Droplet, Wind, Phone, ShieldAlert, CheckSquare } from 'lucide-react';

export interface GuideStep {
  id: number;
  title: string;
  description: string;
}

export interface Guide {
  id: string;
  title: string;
  icon: any;
  color: string;
  shortDesc: string;
  steps: GuideStep[];
}

export const emergencyNumbers = [
  { name: 'Acil Çağrı Merkezi', number: '112', desc: 'Ambulans, İtfaiye, Polis' },
  { name: 'Zehir Danışma', number: '114', desc: 'Zehirlenme durumlarında' },
  { name: 'AFAD', number: '122', desc: 'Doğal afet ve acil durumlar' },
  { name: 'Sosyal Destek', number: '183', desc: 'Kadın, çocuk, sosyal hizmet' },
];

export const guides: Guide[] = [
  {
    id: 'cpr',
    title: 'Kalp Masajı (CPR)',
    icon: HeartPulse,
    color: 'bg-red-500',
    shortDesc: 'Bilinci kapalı ve nefes almayan kişiler için.',
    steps: [
      { id: 1, title: 'Güvenliği Sağlayın', description: 'Önce kendi güvenliğinizi, sonra çevre ve hasta güvenliğini sağlayın.' },
      { id: 2, title: 'Bilinci Kontrol Edin', description: 'Hastanın omuzlarına hafifçe dokunarak "İyi misiniz?" diye sorun.' },
      { id: 3, title: '112\'yi Arayın', description: 'Çevrenizdeki birinden 112\'yi aramasını ve OED (Otomatik Eksternal Defibrilatör) getirmesini isteyin.' },
      { id: 4, title: 'Solunumu Kontrol Edin', description: 'Vaktiniz varsa (en fazla 10 saniye) hastanın nefes alıp almadığını dinleyin ve göğüs hareketlerini izleyin.' },
      { id: 5, title: 'Göğüs Basısı Uygulayın', description: 'Göğüs kemiğinin alt yarısına iki elinizi kenetleyerek yerleştirin. Dakikada 100-120 bası olacak hızda, göğsü 5 cm çöktürecek şekilde 30 bası uygulayın.' },
      { id: 6, title: 'Suni Solunum (Eğitimliyseniz)', description: '30 basıdan sonra başı geriye itip çeneyi kaldırarak 2 kurtarıcı nefes verin. Eğitiminiz yoksa sadece göğüs basısına devam edin.' }
    ]
  },
  {
    id: 'choking',
    title: 'Boğulma (Heimlich)',
    icon: Wind,
    color: 'bg-blue-500',
    shortDesc: 'Nefes borusuna yabancı cisim kaçması durumunda.',
    steps: [
      { id: 1, title: 'Durumu Değerlendirin', description: 'Kişi öksürebiliyorsa dokunmayın, öksürmeye teşvik edin. Konuşamıyor ve morarıyorsa müdahale edin.' },
      { id: 2, title: 'Sırtına Vurun', description: 'Kişinin arkasına geçin, gövdesini öne eğin. İki kürek kemiği arasına elinizin topuğuyla 5 kez kuvvetlice vurun.' },
      { id: 3, title: 'Heimlich Manevrası', description: 'Cisim çıkmadıysa arkasından sarılın. Bir elinizi yumruk yapıp göbek deliğinin hemen üstüne yerleştirin. Diğer elinizle yumruğunuzu kavrayın.' },
      { id: 4, title: 'İçe ve Yukarı Baskı', description: 'Yumruğunuzu içe ve yukarı doğru 5 kez kuvvetlice çekin.' },
      { id: 5, title: 'Döngüyü Tekrarlayın', description: 'Cisim çıkana veya kişi bilincini kaybedene kadar 5 sırt vurusu ve 5 karın basısı şeklinde devam edin.' }
    ]
  },
  {
    id: 'bleeding',
    title: 'Kanamalar',
    icon: Droplet,
    color: 'bg-rose-600',
    shortDesc: 'Şiddetli dış kanamalara müdahale.',
    steps: [
      { id: 1, title: 'Baskı Uygulayın', description: 'Yara üzerine temiz bir bez veya gazlı bez ile doğrudan ve kuvvetli baskı uygulayın.' },
      { id: 2, title: 'Yarayı Yükseltin', description: 'Kanayan bölgeyi (kol, bacak vb.) mümkünse kalp seviyesinden yukarıda tutun.' },
      { id: 3, title: 'Bandaj Sarın', description: 'Kanama durmuyorsa ilk bezi kaldırmadan üzerine ikinci bir bez koyarak sıkıca bandajlayın.' },
      { id: 4, title: '112\'yi Arayın', description: 'Kanama şiddetliyse veya durdurulamıyorsa derhal 112\'yi arayın.' }
    ]
  },
  {
    id: 'burns',
    title: 'Yanıklar',
    icon: Flame,
    color: 'bg-orange-500',
    shortDesc: 'Isı, kimyasal veya elektrik yanıkları.',
    steps: [
      { id: 1, title: 'Soğutun', description: 'Yanan bölgeyi en az 15-20 dakika boyunca serin (buzlu değil) akan suyun altında tutun.' },
      { id: 2, title: 'Takıları Çıkarın', description: 'Şişme başlamadan önce yanık bölgesindeki yüzük, saat, bilezik gibi eşyaları nazikçe çıkarın.' },
      { id: 3, title: 'Örtün', description: 'Yanık bölgesini temiz, tüy bırakmayan bir bez veya streç film ile gevşekçe örtün.' },
      { id: 4, title: 'Yapılmaması Gerekenler', description: 'Yanığa ASLA buz, yoğurt, diş macunu veya merhem sürmeyin. Su kabarcıklarını patlatmayın.' }
    ]
  }
];

export const earthquakeChecklist = [
  { id: 'water', text: 'Kişi başı günlük en az 2 litre su (72 saatlik)' },
  { id: 'food', text: 'Bozulmayan, yüksek enerjili kuru gıdalar (Konserve, bisküvi)' },
  { id: 'firstaid', text: 'Kapsamlı ilk yardım çantası ve sürekli kullanılan ilaçlar' },
  { id: 'light', text: 'Pilli radyo, el feneri ve yedek piller' },
  { id: 'whistle', text: 'Düdük (Sesinizi duyurmak için çok önemli)' },
  { id: 'clothes', text: 'Mevsime uygun yedek kıyafet ve sağlam ayakkabı' },
  { id: 'docs', text: 'Önemli belgelerin kopyaları (Kimlik, tapu, sigorta)' },
  { id: 'money', text: 'Bir miktar nakit para' },
  { id: 'hygiene', text: 'Hijyen malzemeleri (Islak mendil, tuvalet kağıdı, ped)' },
  { id: 'tools', text: 'Çok amaçlı çakı, iş eldiveni, çöp poşeti' }
];
