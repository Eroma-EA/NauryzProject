import React, { useState } from "react";
import { useInView } from "react-hook-inview";
import "../../style/css/home.css";

export const Home = () => {
  const CLR = "white";
  const VH = "100vh";
  const [BGcolor, Color] = useState(CLR);
  const [vh, vhheight] = useState(VH);
  const nav = document.querySelector("nav") as HTMLElement;

  //Active Classws
  const [desIn, inView] = useInView({ threshold: 0.2 });
  const [desIn1, inView1] = useInView({ threshold: 0.2 });
  const [desIn3, inView3] = useInView({ threshold: 0.2 });
  const [desInTwo, inViewTwo] = useInView({ threshold: 0.2 });
  const [desimg, inViewIMG] = useInView({ threshold: 0.2 });
  const [desimg1, inViewIMG1] = useInView({ threshold: 0.2 });
  const [desimg2, inViewIMG2] = useInView({ threshold: 0.2 });
  const [desimg3, inViewIMG3] = useInView({ threshold: 0.2 });

  window.onscroll = function () {
    if (document.documentElement.scrollTop > 80) {
      nav.style.backgroundColor = "#ffffff93";
      nav.style.height = "50px";
      Color("");
      vhheight("70vh");
    } else {
      Color("#fff");
      vhheight("100vh");
      nav.style.height = "70px";
      nav.style.backgroundColor = "#fff";
    }
  };

  return (
    <>
      <div className="home">
        <div className="home_inner">
          {/* Welcome Page */}
          <div
            className="home_welcome"
            style={{ backgroundColor: BGcolor, height: vh }}
          >
            <img className="home_img"
              src={require("../../img/Field of kazakhstan vector image on VectorStock.png")}
              alt=""
            />
            <h3>Ұлыс оң болсын, ақ мол болсын!</h3>
            <h3>Наурыз келсе, құт келгені, халайық!</h3>
            <h3>Шашу шашып, ел болып қарсы алайық!</h3>
            <h1 className="nText">
              <img src={require("../../img/home/butterfly.png")} alt="" />
              Nauryz qutty bolsyn!
            </h1>
            <img className="butterfly" src={require("../../img/home/butterflies.png")} alt="" />
          </div>

          {/* Contaoner Page */}
          <div className="container">
            <div className="home_des">
              <div ref={desIn} className={`des_in ${inView ? "active" : ""}`}>
                <img
                  ref={desimg}
                  className={`${inViewIMG ? "img_active" : ""}`}
                  src={require("../../img/Nauryz2.jpg")}
                  alt=""
                />
                <div
                  ref={desimg}
                  className={`des_text ${inViewIMG ? "text_active" : ""}`}
                >
                  <p>
                    Наурыз мейрамы — ежелгі заманнан қалыптасқан жыл бастау
                    мейрамы. Қазіргі күнтізбе бойынша (наурыздың 22) күн мен
                    түннің теңесуі кезіне келеді. Көне парсы тілінде нава=жаңа +
                    рәзаңһ=күн, «жаңа күн» мағынасында, қазіргі парсы тілінде де
                    сол мағынамен қалған (но=жаңа + роуз=күн; мағынасы «жаңа
                    күн»), яғни «жаңа жылды» (күн өсуін белгілеуі) білдіреді.
                    2010 жылдың 10 мамырынан бастап Біріккен Ұлттар Ұйымының Бас
                    ассамблеясының 64-қарарына сәйкес 21 наурыз "Халықаралық
                    Наурыз күні" болып аталып келеді.[1] Бас ассамблея өзінің
                    берген түсініктемесінде "Наурызды көктем мерекесі ретінде
                    3000 жылдан бері Балқан түбегінде, Қара теңіз аймағында,
                    Кавказда, Орта Азияда және Таяу Шығыста 300 миллион адам
                    тойлап келе жатқандығын" мәлімдеді. Ал UNESCO болса, 2009
                    жылдың 30 қыркүйегінде Наурыз мейрамын адамзаттың
                    материалдық емес мәдени мұра тізіміне кіргізді.
                    <br />
                    <a
                      className="tolyq"
                      href="https://kk.wikipedia.org/wiki/%D0%9D%D0%B0%D1%83%D1%80%D1%8B%D0%B7"
                    >
                      Tolyq oqu
                    </a>
                  </p>
                </div>
              </div>
              <div ref={desIn1} className={`des_in ${inView1 ? "active" : ""}`}>
                <img
                  ref={desimg1}
                  className={`${inViewIMG1 ? "img_active" : ""}`}
                  src={require("../../img/Dastarhan.jpg")}
                  alt=""
                />
                <div
                  ref={desimg1}
                  className={`des_text ${inViewIMG1 ? "text_active" : ""}`}
                >
                  <p>
                    <h1>Ақ тағамдар</h1>
                    Ақ тағамдарға қымыз, шұбат, сиыр, қой-ешкі сүтінен жасалған
                    айран, құрт, ірімшік, сүзбе, қаймақ, малта, ежігей, ақлақ,
                    уыз, уызқағанақ, қатық, сүзбе, тосап, сүт көже, көбік,
                    көпіршік, ақірім, сарымай сияқты әр алуан тағамның түрлері
                    жатады. Сонымен қатар Ұлыстың ұлы күні дастарқанға ұннан
                    жасалған нан, қиықша, шелпек, таба нан, төп, бөртпе,
                    қазанжаппа, жарма, күлше, төңкерме, нан салма тағамдары
                    қойылады. Сондай-ақ әйелдер қазақша ет және еттің сорпасынан
                    наурыз көже жасайды.
                    <br />{" "}
                    <a
                      className="tolyq"
                      href="https://sputnik.kz/20190316/Nauryz-meyramy-tagam-9591447.html"
                    >
                      Tolyq oqu
                    </a>
                  </p>
                </div>
              </div>
              <div ref={desIn3} className={`des_in ${inView3 ? "active" : ""}`}>
                <img
                  ref={desimg3}
                  className={`${inViewIMG3 ? "img_active" : ""}`}
                  src={require("../../img/Oyin.jpeg")}
                  alt=""
                />
                <div
                  ref={desimg3}
                  className={`des_text ${inViewIMG3 ? "text_active" : ""}`}
                >
                  <p>
                    <h1>Қазақтың ұлттық ойындарының тәрбиелік мәні зор</h1>
                    Наурыз – көктем мерекесі, жыл басы. Ұлыстың ұлы күні – күн
                    мен түн теңеліп, жер көкке жан бітіп, тоң жібитін сәт.
                    Сондықтан қазақ халқы бұл мейрамда "Қыз қуу", "Көкпар",
                    "Жамбы ату","Аударыспақ", "Арқан тартыс", "Теңге ілу" сынды
                    түрлі ойын ойнаған. Сонымен қатар айлы түнде "Ақ сүйек"
                    ойналып, "Алтыбақан" тебілген.
                    <br />
                    <a
                      className="tolyq"
                      href="https://sputnik.kz/20190318/nauryz-ulttyq-oiyndar-9607034.html"
                    >
                      Tolyq oqu
                    </a>
                  </p>
                </div>
              </div>

              <div
                ref={desInTwo}
                className={`des_in ${inViewTwo ? "active" : ""}`}
              >
                <img
                  ref={desimg2}
                  className={`Aqin ${inViewIMG2 ? "img_active" : ""}`}
                  src={require("../../img/Mashhur.png")}
                  alt=""
                />
                <div
                  ref={desimg2}
                  className={`des_text ${inViewIMG2 ? "text_active" : ""}`}
                >
                  <p>
                    <h1>Наурыз тілегі</h1>
                    Біреуім екеу болып, мал қосылды, <br /> Қорама жүз-жүз лақ,
                    қозы толды. <br /> Ызғарлы, қыс-зымыстан,суық кетіп, <br />
                    Аспаннан күн күлімдеп, шырай [қонды] енді. <br /> Ұзамай қар
                    да кетер, жаз да болар,
                    <br /> Сай-сала күрілдесіп, суға толар! <br />
                    <a
                      className="tolyq"
                      href="https://bilim-all.kz/olen/6655-Nauryz-tilegi"
                    >
                      Tolyq oqu
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
