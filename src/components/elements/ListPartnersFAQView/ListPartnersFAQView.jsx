import React, { Component } from "react";
import { 
    ContentWrapper,
    Description,
    FAQWrapper,
    Logo,
    LogoWrapper,
    ListParnerFAQ,
    ListParnerFAQTitle,
    ListParnerFAQBlackTitle,
    ListParnerFAQRedTitle,
    ListParnerFAQGroup,
    SectionWrapper,
    SectionPartner,
} from "../ListPartnersFAQView/ListPartnersFAQView.elements";

import Accordion from '../../elements/Accordion/Accordion';

import Swiper from '../Swiper/Swiper';
import SwiperSlide from '../Swiper/SwiperSlide';


class ListPartnersFAQView extends Component{
  render(){

    const sliderBreakpoints = {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 10
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }

    const faq = [
      { 
        title: 'Apa itu inpoin?',
        description: 'Inpoin sebagai suatu platform, merupakan solusi yang memiliki keunggulan untuk membangun pelanggan setia, mendorong hubungan pelanggan yang berkelanjutan, pemberian reward (point/coin/miles) yang menarik melalui pendekatan gamification yang beragam.' 
      },
      {
        title: 'Apa keuntungan menggunakan platform inpoin?',
        description: (
          <ul>
            <li>
              Fitur gamification yang lengkap mulai dari elemen dasar seperti point, experience point, level, badges, leaderboard, rules, target, mission dan berbagai permainan keberuntungan (lucky spin)
            </li>
              <li>
                Proses integrasi yang mudah dan cepat karena setiap service inpoin disediakan dalam bentuk API untuk dapat diintegrasikan dengan API atau service di sisi pelanggan
              </li>
            <li>
               Mudah dalam melakukan pengaturan dan monitoring gamification. Inpoin menyediakan web dashboard sebagai sarana untuk dapat merumuskan rancangan gamification serta melihat produktivitas setiap user, rule yang paling banyak diminati, dan user yang memiliki value terbesar.
            </li>
          </ul>
        )
      },
      {
        title: 'Bagaimana cara mendapatkan akun di dashboard inpoin?',
        description: 'Silahkan hubungi tim inpoin untuk membantu Anda membuatkan akun di dashboard inpoin untuk melakukan pengaturan dan monitoring program gamification'
      },
      {
        title: 'Bagaimana cara login ke dashboard inpoin?',
        description: (
          <>
            <ol>
                <li>
                  Kunjungi link https://dashboard-gamification.inpoin.id/login
                </li>
                <li>
                  Masukkan username dan password yang telah diberikan admin inpoin
                </li>
                  <li>
                    Klik Masuk.
                  </li>
              </ol>
              <p>Jika username dan password yang dimasukkan sudah benar, Anda akan langsung masuk ke halaman dashboard inpoin </p>
          </>
        )
      },
      {
        title: 'Jika lupa dengan username dan password, bagaimana cara mengembalikannya?',
        description: (
          <>
            <ol>
              <li>Klik lupa password </li>
              <li>Masukkan email yang telah terdaftar di inpoin </li>
              <li>Klik kirim. Sistem kami akan mengirimkan link ke email Anda untuk mendapatkan password baru.</li>
            </ol>
            <p>Jika mengalami kesulitan dalam memulihkan username dan password Anda, silahkan hubungi admin inpoin </p>
          </>
        )
      },
      {
        title: 'Bagaimana cara melakukan pengaturan gamification di dashboard inpoin?',
        description: (
          <>
            <p>
              Untuk dapat menjalankan gamification pada aplikasi/website Anda, lakukan pengaturan di dashboard inpoin. Tahapan pengaturan dilakukan sebagai berikut :
            </p>
            <ol>
              <li>
                Konfigurasi Level Group dan Level Detail
              </li>
              <li>
                Konfigurasi Rule
              </li>
              <li>
                Konfigurasi Target
              </li>
              <li>
                Konfigurasi Mission
              </li>
              <li>
                Konfigurasi Karma System
              </li>
              <li>
                Konfigurasi Rewards
              </li>
            </ol>
          </>
        )
      },
      {
        title: 'Bagaimana cara melakukan konfigurasi level group di dashboard inpoin?',
        description: (
          <>
            <ol>
              <li>
                Pilih menu level
              </li>
              <li>
                Klik tombol “Tambah Level Group”
              </li>
              <li>
                Isi informasi level group
              </li>
                <li>
                  Upload gambar
              </li>
              <li>
                Klik “Simpan”
              </li>
            </ol>
          </>
        )
      },
    ]

    return(
      <ContentWrapper>
        <ListParnerFAQ>
          <SectionWrapper>
            <SectionPartner>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <ListParnerFAQBlackTitle>
                  Project
                </ListParnerFAQBlackTitle>
                <ListParnerFAQRedTitle>
                  Portfolio
                </ListParnerFAQRedTitle>
              </div>

              <Description>
                Fulfilling their business objectives and increase their costumer loyalty, Inpoin has the previlege of working with some of the most costumer centric companies
              </Description>
            </SectionPartner>
            <SectionPartner>
              <ListParnerFAQGroup>
                <Swiper breakpoints={sliderBreakpoints} hideBullet slidesPerView={'auto'} spaceBetween={10}>
                  <SwiperSlide>
                    <LogoWrapper>
                      <Logo src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/8.-Visual-Logo-Project-Portofolio-1-MyPertamina.png"></Logo>
                    </LogoWrapper>
                  </SwiperSlide>
                  <SwiperSlide>
                    <LogoWrapper>
                      <Logo src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/10.-Visual-Logo-Project-Portofolio-2-myIndiHome-Partner.png"></Logo>
                    </LogoWrapper>
                  </SwiperSlide>
                  <SwiperSlide>
                    <LogoWrapper>
                      <Logo src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/10.-Visual-Logo-Project-Portofolio-3-QRen.png"></Logo>
                    </LogoWrapper>
                  </SwiperSlide>
                  <SwiperSlide>
                    <LogoWrapper>
                      <Logo src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/11.-Visual-Logo-Project-Portofolio-4-myIndiHome.png"></Logo>
                    </LogoWrapper>
                  </SwiperSlide>
                  <SwiperSlide>
                    <LogoWrapper>
                      <Logo src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/8.-Visual-Logo-Project-Portofolio-1-MyPertamina.png"></Logo>
                    </LogoWrapper>
                  </SwiperSlide>
                  <SwiperSlide>
                    <LogoWrapper>
                      <Logo src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/10.-Visual-Logo-Project-Portofolio-2-myIndiHome-Partner.png"></Logo>
                    </LogoWrapper>
                  </SwiperSlide>
                  <SwiperSlide>
                    <LogoWrapper>
                      <Logo src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/10.-Visual-Logo-Project-Portofolio-3-QRen.png"></Logo>
                    </LogoWrapper>
                  </SwiperSlide>
                  <SwiperSlide>
                    <LogoWrapper>
                      <Logo src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/11.-Visual-Logo-Project-Portofolio-4-myIndiHome.png"></Logo>
                    </LogoWrapper>
                  </SwiperSlide>
                </Swiper>
              </ListParnerFAQGroup>  
            </SectionPartner>
          </SectionWrapper>
          <SectionWrapper>
            <div style={{ flex: 1, alignSelf: 'center' }}>
              <ListParnerFAQBlackTitle>
                FAQ
              </ListParnerFAQBlackTitle>
              <Description>
                Peoples usually ask about
              </Description>
            </div>

            <div style={{ flex: 1 }}>
              <ListParnerFAQTitle>
                <FAQWrapper>
                  <Accordion data={faq} />
                </FAQWrapper>
              </ListParnerFAQTitle>
            </div>


          </SectionWrapper>
        </ListParnerFAQ>             
      </ContentWrapper>
    );
  }
}

export default ListPartnersFAQView;