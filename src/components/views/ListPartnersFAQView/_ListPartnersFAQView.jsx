import React, { Component } from "react";

import { 
    ContentWrapper,
    Row,
    Side,
    Main,
    Description,
    Spacing,
    FAQWrapper,
    Accordion,
    Pannel,
    Slider,
    Logo,
    LogoWrapper,
    ListPartnerFAQ,
    ListPartnerFAQTitle,
    ListPartnerFAQBlackTitle,
    ListPartnerFAQRedTitle,
    ListPartnerFAQGroup,
} from "./_ListPartnersFAQView.elements";


class _ListPartnersFAQView extends Component{
    render(){
        return(
            <ContentWrapper>
                <Row>
                    <Side>
                        <ListPartnerFAQ>
                                <ListPartnerFAQBlackTitle>
                                Project
                                    <ListPartnerFAQRedTitle>
                                    Portfolio
                                </ListPartnerFAQRedTitle>
                                </ListPartnerFAQBlackTitle>
                                                                                    
                                <Description>
                                    Fulfilling their business objectives <br />and increase their customer loyalty, <br />Inpoin has the previlege of working with <br />some of the most customer centric companies
                                </Description> 
                                
                            
                        </ListPartnerFAQ>
                        <ListPartnerFAQ>
                            <ListPartnerFAQBlackTitle>
                                FAQ
                            </ListPartnerFAQBlackTitle>
                            <Description>
                                Peoples usually ask about
                            </Description>
                        </ListPartnerFAQ>
                    </Side>
                    <Main>
                        <ListPartnerFAQGroup>
                            <LogoWrapper>
                                <Logo src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/8.-Visual-Logo-Project-Portofolio-1-MyPertamina.png"></Logo>
                            </LogoWrapper>
                            <LogoWrapper>
                                <Logo src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/10.-Visual-Logo-Project-Portofolio-2-myIndiHome-Partner.png"></Logo>
                            </LogoWrapper>
                            <LogoWrapper>
                                <Logo src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/10.-Visual-Logo-Project-Portofolio-3-QRen.png"></Logo>
                            </LogoWrapper>
                            <LogoWrapper>
                                <Logo src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/11.-Visual-Logo-Project-Portofolio-4-myIndiHome.png"></Logo>
                            </LogoWrapper>
                        </ListPartnerFAQGroup>
                    
                        {/* <FAQWrapper>
                            <Accordion>Apa itu inpoin?</Accordion>
                            <Pannel>Inpoin sebagai suatu platform, merupakan solusi yang memiliki keunggulan untuk membangun pelanggan setia, mendorong hubungan pelanggan yang berkelanjutan, pemberian reward (point/coin/miles) yang menarik melalui pendekatan gamification yang beragam.</Pannel>
                            <Accordion>
                                Apa keuntungan menggunakan platform inpoin?
                            </Accordion>
                            <Pannel>
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
                            </Pannel>
                            <Accordion>
                                Bagaimana cara mendapatkan akun di dashboard inpoin?
                        </Accordion>
                            <Pannel>
                                Silahkan hubungi tim inpoin untuk membantu Anda membuatkan akun di dashboard inpoin untuk melakukan pengaturan dan monitoring program gamification
                        </Pannel>
                            <Accordion>
                                Bagaimana cara login ke dashboard inpoin?
                        </Accordion>
                            <Pannel>
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
                                <p>Jika username dan password yang dimasukkan sudah benar, Anda akan langsung masuk ke halaman dashboard inpoin</p>
                            </Pannel>
                            <Accordion>
                                Jika lupa dengan username dan password, bagaimana cara mengembalikannya?
                        </Accordion>
                            <Pannel>
                                <ol>
                                    <li>Klik lupa password </li>
                                    <li>Masukkan email yang telah terdaftar di inpoin </li>
                                    <li>Klik kirim. Sistem kami akan mengirimkan link ke email Anda untuk mendapatkan password baru.</li>
                                </ol>
                                <p>Jika mengalami kesulitan dalam memulihkan username dan password Anda, silahkan hubungi admin inpoin </p>
                            </Pannel>
                            <Accordion>
                                Bagaimana cara melakukan pengaturan gamification di dashboard inpoin?
                        </Accordion>
                            <Pannel>
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
                            </Pannel>
                            <Accordion>
                                Bagaimana cara melakukan konfigurasi level group di dashboard inpoin?
                        </Accordion>
                            <Pannel>
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
                            </Pannel>
                        </FAQWrapper> */}
                    
                    
                    </Main>
                </Row>    
            </ContentWrapper>
        );
    }
}

export default _ListPartnersFAQView;