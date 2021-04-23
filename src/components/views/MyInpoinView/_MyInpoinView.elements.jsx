//
// last updated: 21/04/2021
// - commented out view sections, and adding clip txt css to display underconstruction 
// @author: mahenza
import React from "react";
import styled from "styled-components";
import device from "../../utils/device";

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-left: 5%;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Side = styled.div`
@media only screen and ${device.tabletL}{
  flex: 30%;
  padding: 5px;
  align-self: flex-end;
}
  flex: 60%;
  padding: 20px;
`;

export const Middle = styled.div`
@media only screen and ${device.tabletL}{
  flex: 30%;
}
  flex: 10%;
  align-self: flex-end;
  padding-bottom: 10%;
  text-align: center;
`;

export const Main = styled.div`
@media only screen and ${device.tabletL}{
  flex: 50%;
  align-self: flex-end;
  margin-bottom: 5%;
}
  flex: 30%;
  padding-right: 15px;
  align-self: flex-end;
`;

export const MyInpoinBlackTitle = styled.h2`
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 20px;
}
  font-family: "Work Sans", sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #303030;
  text-transform: uppercase;
  text-align: left;
`;

export const MyInpoinRedSubTitle = styled.span`
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 30px;
}
  font-family: "AlphaMack AOE";
  color: #ee2e31;
  font-size: 52px;
  font-weight: normal;
  font-style: normal;
  text-transform: capitalize;
  text-align: left;
`;

export const MyInpoinText = styled.p`
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 12px;
}
    font-size: 20px;
    text-align: left;
    padding: 15px 0 15px;
    line-height: 150%;
`;

export const DownloadButton = styled.a`
@media screen and ${device.tabletL} and (min-width: 426px){
  & img.my-inpoin{
   width: 60%;
 }
 & img.google-play{
    width: 60%;
 }
}
`;

export const Visual = styled.img`
@media screen and ${device.tabletL} and (min-width: 426px){
  max-width: 50%;
}
  max-width: 100%;
  height: auto;
    -webkit-user-select: none;
`;

export const WalletIcon = () => (
  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.6228 6.89742H22.3041C22.2635 3.08796 19.2372 0 15.5179 0C13.6447 0.0262083 11.9895 0.709167 10.7011 2.02113C9.42923 3.31304 8.72264 5.03354 8.69558 6.89742H8.37687C4.22907 6.89742 0.854004 10.3585 0.854004 14.6135V23.1173C0.854004 27.3723 4.22907 30.8333 8.37687 30.8333C8.99926 30.8333 9.5044 30.3153 9.5044 29.6771C9.5044 29.0388 8.99926 28.5208 8.37687 28.5208C5.47236 28.5208 3.10906 26.0973 3.10906 23.1173V14.6135C3.10906 11.6334 5.47236 9.20992 8.37687 9.20992H8.68807V11.6473C8.68807 12.2855 9.1932 12.8035 9.81559 12.8035C10.438 12.8035 10.9431 12.2855 10.9431 11.6473V6.95138C10.9476 5.70725 11.4257 4.53867 12.2871 3.66146C13.1516 2.78733 14.3047 2.38188 15.5134 2.3125C17.9924 2.3125 20.0084 4.36292 20.049 6.89742H15.1165C14.4941 6.89742 13.9889 7.41542 13.9889 8.05367C13.9889 8.69192 14.4941 9.20992 15.1165 9.20992H20.0566V11.6473C20.0566 12.2855 20.5617 12.8035 21.1841 12.8035C21.8065 12.8035 22.3116 12.2855 22.3116 11.6473V9.20992H22.6228C25.5273 9.20992 27.8906 11.6334 27.8906 14.6135V23.1173C27.8906 26.0973 25.5273 28.5208 22.6228 28.5208H14.5181C13.8957 28.5208 13.3906 29.0388 13.3906 29.6771C13.3906 30.3153 13.8957 30.8333 14.5181 30.8333H22.6228C26.7706 30.8333 30.1457 27.3723 30.1457 23.1173V14.6135C30.1457 10.3585 26.7706 6.89742 22.6228 6.89742Z" fill="#303030" />
  </svg>
)

export const ExchangeIcon = () => (
  <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.79895 27.0951C9.79895 27.7852 10.3527 28.3453 11.0349 28.3453C11.7172 28.3453 12.2709 27.7852 12.2709 27.0951V9.6952L16.2079 13.6926C16.6892 14.1827 17.4703 14.1827 17.9548 13.6959C18.4393 13.2092 18.441 12.4174 17.9581 11.9273L11.91 5.78448C11.5573 5.42441 11.0234 5.31939 10.5636 5.51109C10.1005 5.70446 9.79895 6.15955 9.79895 6.66631V27.0951ZM4.98619 14.0603C4.67143 14.0603 4.35502 13.9386 4.11441 13.6952C3.62991 13.2085 3.62826 12.4183 4.11112 11.9283L6.51717 9.4828C7.00002 8.99271 7.78117 8.99271 8.26567 9.47947C8.74853 9.96622 8.75018 10.758 8.26897 11.2481L5.86127 13.6919C5.62067 13.9386 5.30261 14.0603 4.98619 14.0603ZM25.2885 32.3217C25.4401 32.3851 25.6 32.4167 25.7598 32.4167C26.0828 32.4167 26.3992 32.29 26.6349 32.0483L31.8112 26.789C32.2924 26.2989 32.2907 25.5071 31.8079 25.0204C31.3234 24.5336 30.5406 24.5353 30.0594 25.0237L26.9958 28.1393V10.736C26.9958 10.0459 26.4437 9.4858 25.7598 9.4858C25.0775 9.4858 24.5238 10.0459 24.5238 10.736V31.1665C24.5238 31.6733 24.8254 32.1283 25.2885 32.3217ZM21.241 28.348C21.4833 28.5948 21.8013 28.7164 22.1178 28.7164C22.4325 28.7164 22.7489 28.5948 22.9895 28.3514C23.474 27.8646 23.4757 27.0745 22.9945 26.5844L20.5884 24.1389C20.1039 23.6488 19.3228 23.6488 18.8399 24.1356C18.3554 24.6224 18.3538 25.4142 18.835 25.9043L21.241 28.348Z" fill="#303030" />
  </svg>
)

export const RedeemIcon = () => (
  <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.3386 10.6358C30.7597 9.95273 29.9183 9.55985 29.0331 9.55985H13.3637C12.7599 9.55985 12.2699 10.0599 12.2699 10.676C12.2699 11.2921 12.7599 11.7921 13.3637 11.7921H29.0331C29.3758 11.7921 29.5887 11.9826 29.6849 12.0957C29.7812 12.2103 29.9358 12.4529 29.8862 12.7981L28.5022 22.5591C28.3929 23.324 27.7396 23.9014 26.9812 23.9014H11.0698C10.2633 23.9014 9.60563 23.2838 9.53855 22.4653L8.13421 5.39296C8.09338 4.88698 7.72151 4.47178 7.23153 4.38547L4.19681 3.84824C3.59453 3.75002 3.03455 4.15034 2.93247 4.759C2.83039 5.36618 3.2285 5.94359 3.82349 6.04925L6.02551 6.43766L7.3584 22.6513C7.52173 24.6366 9.1171 26.1337 11.0698 26.1337H26.9812C28.8202 26.1337 30.4039 24.7348 30.6664 22.879L32.0517 13.1181C32.1786 12.2222 31.9176 11.3189 31.3386 10.6358ZM8.6156 30.747C8.6156 29.5044 9.60724 28.4924 10.8249 28.4924C12.0426 28.4924 13.0328 29.5044 13.0328 30.747C13.0328 31.9896 12.0426 33.0001 10.8249 33.0001C9.60724 33.0001 8.6156 31.9896 8.6156 30.747ZM25.0258 30.747C25.0258 29.5044 26.016 28.4924 27.2337 28.4924C28.4513 28.4924 29.443 29.5044 29.443 30.747C29.443 31.9896 28.4513 33.0001 27.2337 33.0001C26.016 33.0001 25.0258 31.9896 25.0258 30.747ZM25.7376 16.1772C25.7376 16.7933 25.2476 17.2933 24.6439 17.2933H20.6C19.9948 17.2933 19.5063 16.7933 19.5063 16.1772C19.5063 15.5611 19.9948 15.0611 20.6 15.0611H24.6439C25.2476 15.0611 25.7376 15.5611 25.7376 16.1772Z" fill="#303030" />
  </svg>
)

export const MobileWalletIcon = () => (
  <svg width="15" height="15" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.6228 6.89742H22.3041C22.2635 3.08796 19.2372 0 15.5179 0C13.6447 0.0262083 11.9895 0.709167 10.7011 2.02113C9.42923 3.31304 8.72264 5.03354 8.69558 6.89742H8.37687C4.22907 6.89742 0.854004 10.3585 0.854004 14.6135V23.1173C0.854004 27.3723 4.22907 30.8333 8.37687 30.8333C8.99926 30.8333 9.5044 30.3153 9.5044 29.6771C9.5044 29.0388 8.99926 28.5208 8.37687 28.5208C5.47236 28.5208 3.10906 26.0973 3.10906 23.1173V14.6135C3.10906 11.6334 5.47236 9.20992 8.37687 9.20992H8.68807V11.6473C8.68807 12.2855 9.1932 12.8035 9.81559 12.8035C10.438 12.8035 10.9431 12.2855 10.9431 11.6473V6.95138C10.9476 5.70725 11.4257 4.53867 12.2871 3.66146C13.1516 2.78733 14.3047 2.38188 15.5134 2.3125C17.9924 2.3125 20.0084 4.36292 20.049 6.89742H15.1165C14.4941 6.89742 13.9889 7.41542 13.9889 8.05367C13.9889 8.69192 14.4941 9.20992 15.1165 9.20992H20.0566V11.6473C20.0566 12.2855 20.5617 12.8035 21.1841 12.8035C21.8065 12.8035 22.3116 12.2855 22.3116 11.6473V9.20992H22.6228C25.5273 9.20992 27.8906 11.6334 27.8906 14.6135V23.1173C27.8906 26.0973 25.5273 28.5208 22.6228 28.5208H14.5181C13.8957 28.5208 13.3906 29.0388 13.3906 29.6771C13.3906 30.3153 13.8957 30.8333 14.5181 30.8333H22.6228C26.7706 30.8333 30.1457 27.3723 30.1457 23.1173V14.6135C30.1457 10.3585 26.7706 6.89742 22.6228 6.89742Z" fill="#303030" />
  </svg>
)

export const MobileExchangeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.79895 27.0951C9.79895 27.7852 10.3527 28.3453 11.0349 28.3453C11.7172 28.3453 12.2709 27.7852 12.2709 27.0951V9.6952L16.2079 13.6926C16.6892 14.1827 17.4703 14.1827 17.9548 13.6959C18.4393 13.2092 18.441 12.4174 17.9581 11.9273L11.91 5.78448C11.5573 5.42441 11.0234 5.31939 10.5636 5.51109C10.1005 5.70446 9.79895 6.15955 9.79895 6.66631V27.0951ZM4.98619 14.0603C4.67143 14.0603 4.35502 13.9386 4.11441 13.6952C3.62991 13.2085 3.62826 12.4183 4.11112 11.9283L6.51717 9.4828C7.00002 8.99271 7.78117 8.99271 8.26567 9.47947C8.74853 9.96622 8.75018 10.758 8.26897 11.2481L5.86127 13.6919C5.62067 13.9386 5.30261 14.0603 4.98619 14.0603ZM25.2885 32.3217C25.4401 32.3851 25.6 32.4167 25.7598 32.4167C26.0828 32.4167 26.3992 32.29 26.6349 32.0483L31.8112 26.789C32.2924 26.2989 32.2907 25.5071 31.8079 25.0204C31.3234 24.5336 30.5406 24.5353 30.0594 25.0237L26.9958 28.1393V10.736C26.9958 10.0459 26.4437 9.4858 25.7598 9.4858C25.0775 9.4858 24.5238 10.0459 24.5238 10.736V31.1665C24.5238 31.6733 24.8254 32.1283 25.2885 32.3217ZM21.241 28.348C21.4833 28.5948 21.8013 28.7164 22.1178 28.7164C22.4325 28.7164 22.7489 28.5948 22.9895 28.3514C23.474 27.8646 23.4757 27.0745 22.9945 26.5844L20.5884 24.1389C20.1039 23.6488 19.3228 23.6488 18.8399 24.1356C18.3554 24.6224 18.3538 25.4142 18.835 25.9043L21.241 28.348Z" fill="#303030" />
  </svg>
)

export const MobileRedeemIcon = () => (
  <svg width="18" height="18" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.3386 10.6358C30.7597 9.95273 29.9183 9.55985 29.0331 9.55985H13.3637C12.7599 9.55985 12.2699 10.0599 12.2699 10.676C12.2699 11.2921 12.7599 11.7921 13.3637 11.7921H29.0331C29.3758 11.7921 29.5887 11.9826 29.6849 12.0957C29.7812 12.2103 29.9358 12.4529 29.8862 12.7981L28.5022 22.5591C28.3929 23.324 27.7396 23.9014 26.9812 23.9014H11.0698C10.2633 23.9014 9.60563 23.2838 9.53855 22.4653L8.13421 5.39296C8.09338 4.88698 7.72151 4.47178 7.23153 4.38547L4.19681 3.84824C3.59453 3.75002 3.03455 4.15034 2.93247 4.759C2.83039 5.36618 3.2285 5.94359 3.82349 6.04925L6.02551 6.43766L7.3584 22.6513C7.52173 24.6366 9.1171 26.1337 11.0698 26.1337H26.9812C28.8202 26.1337 30.4039 24.7348 30.6664 22.879L32.0517 13.1181C32.1786 12.2222 31.9176 11.3189 31.3386 10.6358ZM8.6156 30.747C8.6156 29.5044 9.60724 28.4924 10.8249 28.4924C12.0426 28.4924 13.0328 29.5044 13.0328 30.747C13.0328 31.9896 12.0426 33.0001 10.8249 33.0001C9.60724 33.0001 8.6156 31.9896 8.6156 30.747ZM25.0258 30.747C25.0258 29.5044 26.016 28.4924 27.2337 28.4924C28.4513 28.4924 29.443 29.5044 29.443 30.747C29.443 31.9896 28.4513 33.0001 27.2337 33.0001C26.016 33.0001 25.0258 31.9896 25.0258 30.747ZM25.7376 16.1772C25.7376 16.7933 25.2476 17.2933 24.6439 17.2933H20.6C19.9948 17.2933 19.5063 16.7933 19.5063 16.1772C19.5063 15.5611 19.9948 15.0611 20.6 15.0611H24.6439C25.2476 15.0611 25.7376 15.5611 25.7376 16.1772Z" fill="#303030" />
  </svg>
)

export const IconTitle = styled.span`
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 16px;
}
    font-family: "Work Sans", sans-serif;  
    font-weight: bold;
    font-size: 24px;
    color: #303030;
  &:before {
      content: " ";
  }
  line-height: 150%;
`;

export const MyInpoinList = styled.div`
@media screen and ${device.tabletL} and (min-width: 426px){
  display: none;
}
    list-style: none;
    color: #303030;
    font-size: 20px;
    text-align: justify;
`;

export const MobileMyInpoinList = styled.div`
@media screen and ${device.tabletL} and (min-width: 426px){
  display: block;
}
  list-style: none;
  color: #303030;
  font-size: 20px;
  text-align: justify;
  display: none;
`;

export const Item = styled.li`{
  @media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 12px;
}
  &:before {
      color: black;
      font-weight: bold;
      display: block;
      width: 1em;
      margin-left: -1em;
      margin-top: 20px !important;
      
  }
  &:first-child {
      margin-top:0;
  }
}`;
