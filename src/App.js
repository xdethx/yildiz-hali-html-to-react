import Footer from './components/Footer';
import './App.css';

import Header from './components/Header';

import AboutPage from './components/pages/AboutPage';
import {Route, Routes,BrowserRouter} from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import BlogPage from './components/pages/BlogPage';
import BlogDetailPage from './components/pages/BlogDetailPage';

import {Helmet,HelmetProvider} from "react-helmet-async";


function App() {

  


 const blogitems= [
           

    {id: 1,imgUrl: "img/makine.jpg",
     mainHead: "Makine Halı Yıkama",
     subHead: "Makine halılar nasıl yıkanır?",
     day: "01",month: "Mart",
     h1:"Vakumlama",
     h2:"Lekeleri ve Dökülmeleri Giderme",
     h3:"Ara Temizlik",
   dec1:"Vakumlama, etkili bir halı bakım programının en önemli ve uygun maliyetli unsurudur. Vakumlama, halı havında toprak birikimini azaltır, ara ve onarıcı tip ihtiyacını uzatır. temizler ve halının ömrünü uzatır. Vakumlama, toprağın yüzde 80'inden fazlasını temizleyebilir. günlük olarak birikir. Vakumlama, halı görünümünü korumada ve halı tüylerinin matlaşmasını önlemede de etkilidir. Bizler teslim aldığımız halıları ıslak yıkama öncesi vakumlayarak kaba kir ve tozdan arındırırız. Sizlerin de halılarınızı kullanırken süpürmeyi ihmal etmemeniz halılarınızın ömrünü uzatacakdır.",
   dec2:"İşinde uzman ekip üyelerimiz nokta tespiti yaparak halılardaki lekeleri antialerjik ürünler yardımı ile çıkarırlar. Lekelerin ve dökülmelerin hızlı bir şekilde çıkarılması, lekelerin kalıcı hale gelme veya daha sert ve daha agresif kimyasal işlemler gerektirme olasılığını azaltacaktır.",
   dec3:"Aşırı derecede kirlenen halı geri dönüşü olmayan bir şekilde zarar görebilir.Yoğun lekeli ya da lekenin hafifliğine ramen hassas tür halılarda(el dokuma,yün vb.) Leke ve kirleri tek seferde çıkarmaya çalışmak yerine sürece yayarak ara temizlik uygularız.Bu tür durumlar temizlik kalitesini artırır öte yandan teslim süresini uzatabilir. gerekli bilgilendirmeyi tarafımızdan alacağınıza emin olabilirsiniz.",
   },

     {id: 2,imgUrl: "img/el-dokuma.jpg",
      mainHead: "El Dokuma Halı Yıkama",subHead: "El dokuma halılar nasıl yıkanır?",day: "21",month: "şubat",
      h1:"Vakumlama",
       h2:"Lekeleri ve Dökülmeleri Giderme",
       h3:"Ara Temizlik",
       dec1:"Vakumlama, etkili bir halı bakım programının en önemli ve uygun maliyetli unsurudur. Vakumlama, halı havında toprak birikimini azaltır, ara ve onarıcı tip ihtiyacını uzatır. temizler ve halının ömrünü uzatır. Vakumlama, toprağın yüzde 80'inden fazlasını temizleyebilir. günlük olarak birikir. Vakumlama, halı görünümünü korumada ve halı tüylerinin matlaşmasını önlemede de etkilidir. Bizler teslim aldığımız halıları ıslak yıkama öncesi vakumlayarak kaba kir ve tozdan arındırırız. Sizlerin de halılarınızı kullanırken süpürmeyi ihmal etmemeniz halılarınızın ömrünü uzatacakdır.",
       dec2:"İşinde uzman ekip üyelerimiz nokta tespiti yaparak halılardaki lekeleri antialerjik ürünler yardımı ile çıkarırlar. Lekelerin ve dökülmelerin hızlı bir şekilde çıkarılması, lekelerin kalıcı hale gelme veya daha sert ve daha agresif kimyasal işlemler gerektirme olasılığını azaltacaktır.",
       dec3:"Aşırı derecede kirlenen halı geri dönüşü olmayan bir şekilde zarar görebilir.Yoğun lekeli ya da lekenin hafifliğine ramen hassas tür halılarda(el dokuma,yün vb.) Leke ve kirleri tek seferde çıkarmaya çalışmak yerine sürece yayarak ara temizlik uygularız.Bu tür durumlar temizlik kalitesini artırır öte yandan teslim süresini uzatabilir. gerekli bilgilendirmeyi tarafımızdan alacağınıza emin olabilirsiniz.",
        
   
   },
     {id: 3,imgUrl: "img/bambu.jpg", mainHead: "Bambu Halı Yıkama",subHead: "Bambu halılar nasıl yıkanır?",day: "04",month: "şubat",
     h1:"Vakumlama",
     h2:"Lekeleri ve Dökülmeleri Giderme",
     h3:"Ara Temizlik",
     dec1:"Vakumlama, etkili bir halı bakım programının en önemli ve uygun maliyetli unsurudur. Vakumlama, halı havında toprak birikimini azaltır, ara ve onarıcı tip ihtiyacını uzatır. temizler ve halının ömrünü uzatır. Vakumlama, toprağın yüzde 80'inden fazlasını temizleyebilir. günlük olarak birikir. Vakumlama, halı görünümünü korumada ve halı tüylerinin matlaşmasını önlemede de etkilidir. Bizler teslim aldığımız halıları ıslak yıkama öncesi vakumlayarak kaba kir ve tozdan arındırırız. Sizlerin de halılarınızı kullanırken süpürmeyi ihmal etmemeniz halılarınızın ömrünü uzatacakdır.",
     dec2:"İşinde uzman ekip üyelerimiz nokta tespiti yaparak halılardaki lekeleri antialerjik ürünler yardımı ile çıkarırlar. Lekelerin ve dökülmelerin hızlı bir şekilde çıkarılması, lekelerin kalıcı hale gelme veya daha sert ve daha agresif kimyasal işlemler gerektirme olasılığını azaltacaktır.",
     dec3:"Aşırı derecede kirlenen halı geri dönüşü olmayan bir şekilde zarar görebilir.Yoğun lekeli ya da lekenin hafifliğine ramen hassas tür halılarda(el dokuma,yün vb.) Leke ve kirleri tek seferde çıkarmaya çalışmak yerine sürece yayarak ara temizlik uygularız.Bu tür durumlar temizlik kalitesini artırır öte yandan teslim süresini uzatabilir. gerekli bilgilendirmeyi tarafımızdan alacağınıza emin olabilirsiniz.",
      
   
   },
     {id: 4,imgUrl: "img/ladik.jpg", mainHead: "Ladik Halı Yıkama",subHead: "Ladik halılar nasıl yıkanır?",day: "04",month: "şubat" ,
     h1:"Vakumlama",
     h2:"Lekeleri ve Dökülmeleri Giderme",
     h3:"Ara Temizlik",
     dec1:"Vakumlama, etkili bir halı bakım programının en önemli ve uygun maliyetli unsurudur. Vakumlama, halı havında toprak birikimini azaltır, ara ve onarıcı tip ihtiyacını uzatır. temizler ve halının ömrünü uzatır. Vakumlama, toprağın yüzde 80'inden fazlasını temizleyebilir. günlük olarak birikir. Vakumlama, halı görünümünü korumada ve halı tüylerinin matlaşmasını önlemede de etkilidir. Bizler teslim aldığımız halıları ıslak yıkama öncesi vakumlayarak kaba kir ve tozdan arındırırız. Sizlerin de halılarınızı kullanırken süpürmeyi ihmal etmemeniz halılarınızın ömrünü uzatacakdır.",
     dec2:"İşinde uzman ekip üyelerimiz nokta tespiti yaparak halılardaki lekeleri antialerjik ürünler yardımı ile çıkarırlar. Lekelerin ve dökülmelerin hızlı bir şekilde çıkarılması, lekelerin kalıcı hale gelme veya daha sert ve daha agresif kimyasal işlemler gerektirme olasılığını azaltacaktır.",
     dec3:"Aşırı derecede kirlenen halı geri dönüşü olmayan bir şekilde zarar görebilir.Yoğun lekeli ya da lekenin hafifliğine ramen hassas tür halılarda(el dokuma,yün vb.) Leke ve kirleri tek seferde çıkarmaya çalışmak yerine sürece yayarak ara temizlik uygularız.Bu tür durumlar temizlik kalitesini artırır öte yandan teslim süresini uzatabilir. gerekli bilgilendirmeyi tarafımızdan alacağınıza emin olabilirsiniz.",
      
   },
     {id: 5,imgUrl: "img/yun.jpg", mainHead: "Yün Halı Yıkama",subHead: "Yün halılar nasıl yıkanır?",day: "28",month: "ocak", 
     h1:"Vakumlama",
     h2:"Lekeleri ve Dökülmeleri Giderme",
     h3:"Ara Temizlik",
     dec1:"Vakumlama, etkili bir halı bakım programının en önemli ve uygun maliyetli unsurudur. Vakumlama, halı havında toprak birikimini azaltır, ara ve onarıcı tip ihtiyacını uzatır. temizler ve halının ömrünü uzatır. Vakumlama, toprağın yüzde 80'inden fazlasını temizleyebilir. günlük olarak birikir. Vakumlama, halı görünümünü korumada ve halı tüylerinin matlaşmasını önlemede de etkilidir. Bizler teslim aldığımız halıları ıslak yıkama öncesi vakumlayarak kaba kir ve tozdan arındırırız. Sizlerin de halılarınızı kullanırken süpürmeyi ihmal etmemeniz halılarınızın ömrünü uzatacakdır.",
     dec2:"İşinde uzman ekip üyelerimiz nokta tespiti yaparak halılardaki lekeleri antialerjik ürünler yardımı ile çıkarırlar. Lekelerin ve dökülmelerin hızlı bir şekilde çıkarılması, lekelerin kalıcı hale gelme veya daha sert ve daha agresif kimyasal işlemler gerektirme olasılığını azaltacaktır.",
     dec3:"Aşırı derecede kirlenen halı geri dönüşü olmayan bir şekilde zarar görebilir.Yoğun lekeli ya da lekenin hafifliğine ramen hassas tür halılarda(el dokuma,yün vb.) Leke ve kirleri tek seferde çıkarmaya çalışmak yerine sürece yayarak ara temizlik uygularız.Bu tür durumlar temizlik kalitesini artırır öte yandan teslim süresini uzatabilir. gerekli bilgilendirmeyi tarafımızdan alacağınıza emin olabilirsiniz.",
      
   
   },
     {id: 6,imgUrl: "img/step.jpg", mainHead: "Step Halı Yıkama",subHead: "Step halılar nasıl yıkanır?",day: "25",month: "ocak",
     h1:"Vakumlama",
     h2:"Lekeleri ve Dökülmeleri Giderme",
     h3:"Ara Temizlik",
     dec1:"Vakumlama, etkili bir halı bakım programının en önemli ve uygun maliyetli unsurudur. Vakumlama, halı havında toprak birikimini azaltır, ara ve onarıcı tip ihtiyacını uzatır. temizler ve halının ömrünü uzatır. Vakumlama, toprağın yüzde 80'inden fazlasını temizleyebilir. günlük olarak birikir. Vakumlama, halı görünümünü korumada ve halı tüylerinin matlaşmasını önlemede de etkilidir. Bizler teslim aldığımız halıları ıslak yıkama öncesi vakumlayarak kaba kir ve tozdan arındırırız. Sizlerin de halılarınızı kullanırken süpürmeyi ihmal etmemeniz halılarınızın ömrünü uzatacakdır.",
     dec2:"İşinde uzman ekip üyelerimiz nokta tespiti yaparak halılardaki lekeleri antialerjik ürünler yardımı ile çıkarırlar. Lekelerin ve dökülmelerin hızlı bir şekilde çıkarılması, lekelerin kalıcı hale gelme veya daha sert ve daha agresif kimyasal işlemler gerektirme olasılığını azaltacaktır.",
     dec3:"Aşırı derecede kirlenen halı geri dönüşü olmayan bir şekilde zarar görebilir.Yoğun lekeli ya da lekenin hafifliğine ramen hassas tür halılarda(el dokuma,yün vb.) Leke ve kirleri tek seferde çıkarmaya çalışmak yerine sürece yayarak ara temizlik uygularız.Bu tür durumlar temizlik kalitesini artırır öte yandan teslim süresini uzatabilir. gerekli bilgilendirmeyi tarafımızdan alacağınıza emin olabilirsiniz.",
      
   },
     {id: 7,imgUrl: "img/koltuk.jpg", mainHead: "Koltuk Yıkama",subHead: "Koltuk nasıl yıkanır?",day: "20",month: "ocak",
     h1:"Koltuğun Yapısı",
     h2:"Lekeleri ve Dökülmeleri Giderme",
     h3:"temizlik ve Vakumlama",
     dec1:"Koltuk yıkama özel ekipman ve uzmanlık gerektirir. İlk olarak, herhangi bir yırtık veya başka bir hasar olup olmadığını not etmek için döşeme incelenir. ",
     dec2:"Ardından lekeli ve kir tutmuş bölgelere leke çıkarıcı kimyasal uygulanır.",
     dec3: "sabunlu su bez yardımı ile bütün koltuk döşemesine uygulanır bu sayede kumaş barındırdığı kiri salacaktır.son olarak vakumlayarak kumaş kir ve lekeden arındırılır.",
      
   },
     {id: 8,imgUrl: "img/perde.jpg", mainHead: "Mekanik Perde Yıkama",subHead: "Perde nasıl yıkanır?",day: "18",month: "ocak",
     h1:"Temizlik",
                  
     dec1:"Perdeler genel olarak kategorilere ayrıldığında: Mekanik Perdeler, Kumaş Perdeler ve Tül Perdeler olmak üzere üç kısma ayrılabilir. Mekanik perdeler kendi aralarında da ayrılırlar, bunlar: stor, zebra, jaluzi ve dikey perdelerdir. Mekanik perdeler şıklık getirirken ev ortamında yıkanma zorluğunu beraberinde getirir. %100 hijyenik ve ilk günkü gibi temiz görünen perdeler için bizi tercih edebilirsiniz. ",
    
      
   },
     {id: 9,imgUrl: "img/yorgan.jpg", mainHead: "Yorgan ve Battaniye Yıkama",subHead: "Yorgan ve battaniye nasıl yıkanır?",day: "11",month: "ocak",
     h1:"Temizlik aşamaları",
     h2:"Yorgan ve Battaniye Temizliğinin Önemi",
    
     dec1:"Yorgan yıkama makinelerinde ön yıkama, ana yıkama, durulama, sıkma, gibi işlemlerden geçer.Yorganın boyut ve kalınlığına bağlı olarak kuruma işlemi gelir. Ardından teslimata hazır... ",
     dec2:"Kişisel bakım kadar önemli,Her gün cilt ve tenimize en çok temas eden yastık ve yorganımız. hem şıklık hem sürdülülebilen temizlik adına yastık ve yorgan kılıfları kullanıyoruz ama ana ürünlerde bakteri birikiminin önüne geçmek imkansız. Yorgan,battaniye,yastık gibi ürünlerin en az 4-6 aylık periodlarla yıkanması gerekir.Antibakteriyel ve hijyenik sonuç için bizi tercih edebilirsiniz...",
    
      
   
   },
  ]

  return (
   
   <div>



  <BrowserRouter>
  <HelmetProvider>
  <Header/>
  
      <Routes>
      <Route path='/' element={<HomePage />} ></Route>
      <Route path='/anasayfa' element={<HomePage />} ></Route>
      <Route path='/hakkimizda' element={<AboutPage />} ></Route>
      <Route path='/blog' element={<BlogPage blogitems={blogitems}   />} ></Route>
      <Route path='/blog/blog-detay/:id' element={<BlogDetailPage blogDetails={blogitems} />} ></Route>
      </Routes>
                            
  
     
 
  <Footer/>
  <Helmet>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js" />
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" />
  <script src="lib/easing/easing.min.js" type="text/javascript" />
  <script src="lib/waypoints/waypoints.min.js" type="text/javascript" />
  <script src="lib/counterup/counterup.min.js" type="text/javascript" />
  <script src="lib/owlcarousel/owl.carousel.min.js" type="text/javascript" />
  <script src="lib/isotope/isotope.pkgd.min.js" type="text/javascript" />
  <script src="lib/lightbox/js/lightbox.min.js" type="text/javascript" />
  <script src="js/main.js" type="text/javascript" />


  </Helmet>
  </HelmetProvider>
  </BrowserRouter>

  
  </div>
    
/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/isotope/isotope.pkgd.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>

    
    <script src="mail/jqBootstrapValidation.min.js"></script>
    <script src="mail/contact.js"></script>

    
    <script src="js/main.js"></script> */

     );
  
}

export default App;
