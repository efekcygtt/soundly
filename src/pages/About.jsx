import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">Hakkımızda</h1>

        <section className="about-section">
          <p className="about-text">
            Soundly, müziği sadece dinlenen bir içerik olmaktan çıkarıp, keşfedilen ve paylaşılan
            bir sosyal deneyime dönüştürmeyi amaçlayan yenilikçi bir platformdur. Kullanıcılarımızın
            yeni şarkılar ve albümler etrafında fikir alışverişi yapabileceği, etkileşimli bir
            keşif alanı sunuyoruz.
          </p>
        </section>

        <section className="about-section">
          <p className="about-text">
            Platformumuz henüz gelişim sürecindedir ve sürekli yeni özelliklerle zenginleşmektedir.
            Bu süreçte kullanıcılarımızdan gelen geri bildirimler bizim için çok değerlidir; her
            yorum, Soundly'nin daha güçlü bir topluluk hâline gelmesine katkı sağlar. Biz, müziğin
            insanları birleştiren evrensel diline inanıyoruz ve bu dili dijital dünyada daha
            erişilebilir hâle getirmek için çalışıyoruz.
          </p>
        </section>

        <section className="about-section founder-section">
          <h2 className="section-title">Kurucu Hakkında</h2>
          <p className="about-text">
            Bu proje, <strong>Efe Salim KOÇYİĞİT</strong> tarafından bitirme projesi kapsamında
            geliştirilmiştir. Amacım, müzik keşfini daha sosyal ve etkileşimli hâle getiren bir
            platform oluşturmaktır. Soundly, kişisel bir girişim olarak başlamış olsa da, ilerleyen
            süreçte kullanıcıların katkılarıyla büyüyen bir topluluk hâline gelmeyi hedeflemektedir.
          </p>
        </section>

        <section className="about-section cta-section">
          <h2 className="section-title">Bize Katılın</h2>
          <p className="about-text">
            Müzik keşfini yeniden tanımlamaya yardımcı olun. Soundly topluluğunun bir parçası olarak,
            en sevdiğiniz şarkıları paylaşın ve diğer müzik severlerle bağlantı kurun.
          </p>
          <button className="cta-button">Şimdi Başla</button>
        </section>
      </div>
    </div>
  );
}