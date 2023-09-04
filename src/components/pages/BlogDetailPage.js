import {React,Component} from 'react';


class BlogDetailPage extends Component {
    
    render() { 
        console.log(this.props)
        const blogDetails= [
         {
            id:"1",
            h1:"Vakumlama",
            h2:"Lekeleri ve Dökülmeleri Giderme",
            h3:"Ara Temizlik",
            dec1:"Vakumlama, etkili bir halı bakım programının en önemli ve uygun maliyetli unsurudur. Vakumlama, halı havında toprak birikimini azaltır, ara ve onarıcı tip ihtiyacını uzatır. temizler ve halının ömrünü uzatır. Vakumlama, toprağın yüzde 80'inden fazlasını temizleyebilir. günlük olarak birikir. Vakumlama, halı görünümünü korumada ve halı tüylerinin matlaşmasını önlemede de etkilidir. Bizler teslim aldığımız halıları ıslak yıkama öncesi vakumlayarak kaba kir ve tozdan arındırırız. Sizlerin de halılarınızı kullanırken süpürmeyi ihmal etmemeniz halılarınızın ömrünü uzatacakdır.",
            dec2:"İşinde uzman ekip üyelerimiz nokta tespiti yaparak halılardaki lekeleri antialerjik ürünler yardımı ile çıkarırlar. Lekelerin ve dökülmelerin hızlı bir şekilde çıkarılması, lekelerin kalıcı hale gelme veya daha sert ve daha agresif kimyasal işlemler gerektirme olasılığını azaltacaktır.",
            dec3:"Aşırı derecede kirlenen halı geri dönüşü olmayan bir şekilde zarar görebilir.Yoğun lekeli ya da lekenin hafifliğine ramen hassas tür halılarda(el dokuma,yün vb.) Leke ve kirleri tek seferde çıkarmaya çalışmak yerine sürece yayarak ara temizlik uygularız.Bu tür durumlar temizlik kalitesini artırır öte yandan teslim süresini uzatabilir. gerekli bilgilendirmeyi tarafımızdan alacağınıza emin olabilirsiniz.",
             },
       
                 {
                    id:"2",
                    h1:"Temizlik aşamaları",
                    h2:"Yorgan ve Battaniye Temizliğinin Önemi",
                    h3:"",
                    dec1:"Yorgan yıkama makinelerinde ön yıkama, ana yıkama, durulama, sıkma, gibi işlemlerden geçer.Yorganın boyut ve kalınlığına bağlı olarak kuruma işlemi gelir. Ardından teslimata hazır... ",
                    dec2:"Kişisel bakım kadar önemli,Her gün cilt ve tenimize en çok temas eden yastık ve yorganımız. hem şıklık hem sürdülülebilen temizlik adına yastık ve yorgan kılıfları kullanıyoruz ama ana ürünlerde bakteri birikiminin önüne geçmek imkansız. Yorgan,battaniye,yastık gibi ürünlerin en az 4-6 aylık periodlarla yıkanması gerekir.Antibakteriyel ve hijyenik sonuç için bizi tercih edebilirsiniz...",
                    dec3: "",
                     },
                     {
                        id:"3",
                        h1:"Temizlik",
                        h2:"",
                        h3:"",
                        dec1:"Perdeler genel olarak kategorilere ayrıldığında: Mekanik Perdeler, Kumaş Perdeler ve Tül Perdeler olmak üzere üç kısma ayrılabilir. Mekanik perdeler kendi aralarında da ayrılırlar, bunlar: stor, zebra, jaluzi ve dikey perdelerdir. Mekanik perdeler şıklık getirirken ev ortamında yıkanma zorluğunu beraberinde getirir. %100 hijyenik ve ilk günkü gibi temiz görünen perdeler için bizi tercih edebilirsiniz. ",
                        dec2:"",
                        dec3: "",
                         },
                         {
                            id:"4",
                            h1:"Koltuğun Yapısı",
                            h2:"Lekeleri ve Dökülmeleri Giderme",
                            h3:"temizlik ve Vakumlama",
                            dec1:"Koltuk yıkama özel ekipman ve uzmanlık gerektirir. İlk olarak, herhangi bir yırtık veya başka bir hasar olup olmadığını not etmek için döşeme incelenir. ",
                            dec2:"Ardından lekeli ve kir tutmuş bölgelere leke çıkarıcı kimyasal uygulanır.",
                            dec3: "sabunlu su bez yardımı ile bütün koltuk döşemesine uygulanır bu sayede kumaş barındırdığı kiri salacaktır.son olarak vakumlayarak kumaş kir ve lekeden arındırılır.",
                             },
                    
                          ]
        return (

<div>
<div className="container-fluid py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="mb-5">
                        <div className="d-flex mb-2">
                            <a className="text-secondary text-uppercase font-weight-medium" href="">YILDIZ</a>
                            <span className="text-primary px-2">|</span>
                            <a className="text-secondary text-uppercase font-weight-medium"Y href="">Halı</a>
                            <span className="text-primary px-2">|</span>
                            <a className="text-secondary text-uppercase font-weight-medium" href="">Mart 01, 2023</a>
                        </div>
                        <h1 className="section-title mb-3">Makine Halı Yıkama </h1>
                    </div>

                    <div className="mb-5">
                        <img className="img-fluid rounded w-100 mb-4" src="../img/makine.jpg" alt="Image"/>
                        <h2>{blogDetails[0].h1}</h2>
                        <p>{blogDetails[0].dec1}
                        </p>
                        
                        <h2 className="mb-4">{blogDetails[0].h2}</h2>
                    
                        <p>{blogDetails[0].dec2}
                        </p>
                        <h3 className="mb-4">{blogDetails[0].h3}</h3>
                     
                        <p>{blogDetails[0].dec3}
                        </p>
                    </div>


                    
                </div>

                
            </div>
        </div>
    </div>

</div>



        );
    }
}
 
export default BlogDetailPage;