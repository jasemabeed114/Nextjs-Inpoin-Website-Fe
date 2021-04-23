//
// last updated: 16/04/2021
// @author: mahenza
import React, { Component } from "react";
import Tilt from 'react-tilt';

import {
    ContentWrapper,
    Row,
    Side,
    Main,
    DashboardFrame,
    VideoFrame,
    DashboardNarrativeTitle,
    ExperienceDashboardBlackTitle,
    ExperienceDashboardRedTitle,
    ExperienceDashboardTitle,
    MobileExperienceDashboardTitle,
    ExperienceDashboardGroup,
    ExperienceDashboardList,
    ExperienceDashboardDescription,
    ExperienceDashboard,
} from "./_ExperienceDashboardView.elements";

class _ExperienceDashboardView extends Component {
    state = {
        isLoaded: false,
    }
    render() {
        return (
            <ContentWrapper>
                <Row>
                    <Side>
                        <ExperienceDashboard>
                            <Tilt className="Tilt" options={{ max: 35 }} >
                            <ExperienceDashboardTitle>
                                <ExperienceDashboardBlackTitle>
                                    Take a look on our
                                    <ExperienceDashboardRedTitle>
                                        Dashboard
                                    </ExperienceDashboardRedTitle>
                                </ExperienceDashboardBlackTitle>
                            </ExperienceDashboardTitle>
                            <MobileExperienceDashboardTitle>
                                <ExperienceDashboardBlackTitle>
                                    Take a look<br/> on our <br/>
                                    <ExperienceDashboardRedTitle>
                                        Dashboard
                                    </ExperienceDashboardRedTitle>
                                </ExperienceDashboardBlackTitle>
                            </MobileExperienceDashboardTitle>
                            </Tilt>
                            <ExperienceDashboardGroup>
                                <ExperienceDashboardList>
                                    <DashboardNarrativeTitle>
                                        Overview
                                    </DashboardNarrativeTitle>
                                    {/* <ExperienceDashboardDescription>                               
                                        Halaman overview menampilkan informasi singkat mengenai aktivitas gamification yang dilakukan user. Dilengkapi dengan grafik Daily Active User (DAU),  total jumlah user serta jumlah redeem dan earning point.
                                    </ExperienceDashboardDescription> */}
                                    <DashboardNarrativeTitle>
                                        Rule Reports
                                    </DashboardNarrativeTitle>
                                    {/* <ExperienceDashboardDescription>
                                        Halaman ini menampilkan data performa rules untuk setiap rule yang dijalankan user. Untuk mengakses laporan rules, silahkan pilih menu rule reports dan tentukan periode tanggal sesuai kebutuhan Anda.
                                    </ExperienceDashboardDescription> */}
                                    <DashboardNarrativeTitle>
                                        Level Reports
                                    </DashboardNarrativeTitle>
                                    {/* <ExperienceDashboardDescription>                                
                                        Halaman ini menampilkan informasi data user pada setiap tier/level. Untuk mengakses laporan performa user pada setiap level, silahkan pilih menu level reports dan tentukan periode tanggal sesuai kebutuhan Anda.
                                    </ExperienceDashboardDescription> */}
                                    <DashboardNarrativeTitle>
                                        User Activity Reports
                                    </DashboardNarrativeTitle>
                                    {/* <ExperienceDashboardDescription>                               
                                        Melihat dan mendownload laporan aktivitas gamification user  menjadi lebih mudah melalui menu User Activity Reports. Pilih jenis aktivitas, kemudian pilih aktivitas serta periode sesuai kebutuhan Anda.
                                    </ExperienceDashboardDescription> */}
                                    <DashboardNarrativeTitle>
                                        Pengaturan Level
                                    </DashboardNarrativeTitle>
                                    {/* <ExperienceDashboardDescription>                               
                                        Pilih menu level untuk melakukan pengaturan level bagi user sebagai tahapan awal. Berikan rewards yang menarik sesuai dengan tingkat level untuk memotivasi dan mendorong user melakukan lebih banyak aktivitas.
                                    </ExperienceDashboardDescription> */}
                                    <DashboardNarrativeTitle>
                                        Pengaturan Rule
                                    </DashboardNarrativeTitle>
                                    {/* <ExperienceDashboardDescription>                               
                                        Pilih menu rule untuk melakukan pengaturan rule (aturan main) dari aktivitas gamification. Anda dapat mencari, menambahkan, mengedit atau menghapus rule sesuai kebutuhan.
                                    </ExperienceDashboardDescription> */}
                                </ExperienceDashboardList>
                            </ExperienceDashboardGroup>   
                        </ExperienceDashboard>         
                    </Side>
                    <Main>
                        <DashboardFrame src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9wIN5Va1vYaeq7GAW6VKAN%2FInpoin-Gamification%3Fkind%3D%26node-id%3D1542%253A27031%26scaling%3Dscale-down-width" allowfullscreen></DashboardFrame>
                        <VideoFrame src="http://in-poin.mahenza.com/wp-content/uploads/2021/03/Dashboard-Inpoin-High.gif" />
                    </Main>
                </Row>
            </ContentWrapper>
        );
    }
}

export default _ExperienceDashboardView