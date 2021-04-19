//
// last updated: 13/04/2021
// @author: mahenza
import React from 'react';
import styled from "styled-components"
import device from "../../utils/device"
import Icon from "./Icon"

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 5%;
  padding-left: 5%;
`;

export const Row = styled.div`
  display: flex;
`;

export const Side = styled.div`
  flex: 50%;
@media only screen and ${device.tabletL}{
  flex: 50%;
  padding: 5px;
}
`;

export const Main = styled.div`
  flex: 50%;
  align-self: center;
@media only screen and ${device.tabletL}{
  flex: 50%;
  padding: 5px;
}
`;

export const Services = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const OurServicesTitle = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const OurServiceGroup = styled.div`
  display: flex;
  margin-top: -15px;
`;

export const OurServicesBlackTitle = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: #303030;
  text-transform: uppercase;
  text-align: left;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 30px;
}
`;

export const OurServicesRedTitle = styled.span`
  font-family: "AlphaMack AOE";
  color: #ee2e31;
  font-size: 90px;
  font-weight: normal;
  font-style: normal;
  text-transform: capitalize;
  text-align: left;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 50px;
}
`;

export const ServiceDescription = styled.li`
  font-family: "Work Sans", sans-serif;
  color: color: #000000DE;
  margin: 10px 40px;
  &::before {
    content: "•";
    color: red;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
@media screen and ${device.tabletL} and (min-width: 426px){
  margin: 5px 0;
}
`;

export const ServiceList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  font-size: 20px;
  text-align: left !important;
  padding: 20px;
  line-height: 150%;
@media screen and ${device.tabletL} and (min-width: 426px){
  display: none;
}
`;

export const MobileServiceList = styled.ul`
  display: none;
@media screen and ${device.tabletL} and (min-width: 426px){
  display: block;
  font-size: 10px;
  list-style: none;
  font-size: 12px;
  padding-top: 10px;
  line-height: 150%;
}
`;

export const IconGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
@media screen and ${device.tabletL} and (min-width: 426px){
  display: none;
}
`;

export const MobileIconGroup = styled.div`
  display: flex;
  flex-direction: column;
  display: none;
@media screen and ${device.tabletL} and (min-width: 426px){
  display: block;
}
`;

export const Icons = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 25px;
@media screen and ${device.tabletL} and (min-width: 426px){
  padding-top: 10px;
}
`;

// const Svg = styled(Icon)` 
//   width: 50px; 
//   height: 50px;
// `;

export const DesignIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 83 83"
    fill="none"
  >
    <path
      d="M35.0324 82.9401C32.2179 81.0238 30.9603 78.3889 31.0202 74.9156C31.0202 72.9394 31.6789 72.64 33.4155 72.6999C38.7453 72.8196 44.1349 72.8196 49.5245 72.6999C51.4408 72.64 51.7402 73.2987 51.8001 75.0952C51.9798 78.868 50.6623 81.5628 47.0692 83C43.057 82.9401 39.0447 82.9401 35.0324 82.9401Z"
      fill="#EC2D31"
    />
    <path
      d="M0.299408 40.4221C3.47329 38.386 6.94659 39.3442 10.3001 39.4639C11.3781 39.5238 12.1565 40.6616 12.1565 41.8593C12.1565 43.1768 11.3182 44.3146 10.0606 44.3745C6.76694 44.4942 3.4134 45.2727 0.299408 43.4762C0.299408 42.3983 0.299408 41.4401 0.299408 40.4221Z"
      fill="#EC2D31"
    />
    <path
      d="M41.2005 67.4899C40.0028 67.4899 38.8052 67.43 37.6075 67.4899C33.8347 67.7295 30.1818 68.0888 28.8643 63.1183C28.5649 61.9207 26.8282 61.0224 25.7503 60.0043C17.8456 53.0577 15.2106 42.039 19.2828 32.5173C23.2352 23.2352 32.7568 17.2468 42.518 17.9055C53.4769 18.684 62.1601 25.6905 64.6154 36.1703C66.7712 45.5123 64.1363 53.4769 57.0101 59.9445C54.974 61.741 52.9379 63.5375 52.1594 66.2323C51.8001 67.5498 50.9018 67.4899 49.8838 67.4899C47.0093 67.4899 44.1349 67.4899 41.2005 67.4899ZM56.7106 40.0628C56.531 33.0563 50.2431 26.7684 43.2366 26.5289C41.5 26.469 39.943 26.7684 39.7633 28.8644C39.6435 30.7208 40.9011 31.3196 42.5779 31.6191C48.207 32.4574 50.9018 35.1523 51.6204 40.6616C51.86 42.3983 52.4588 43.596 54.3153 43.5361C56.4112 43.3564 56.8903 41.8593 56.7106 40.0628Z"
      fill="#EC2D31"
    />
    <path
      d="M71.1428 14.3124C71.1428 15.3903 70.8434 15.9892 70.3643 16.5282C68.8073 18.0852 67.3102 19.6421 65.6933 21.1393C64.4956 22.2172 63.1782 22.2771 61.9805 21.0794C60.9026 19.9416 61.0223 18.684 61.9805 17.6061C63.5375 15.9293 65.1544 14.3723 66.8311 12.7554C67.7294 11.8572 68.8672 11.8572 69.8853 12.456C70.7236 12.8752 71.2027 13.6537 71.1428 14.3124Z"
      fill="#EC2D31"
    />
    <path
      d="M21.4386 64.3759C21.4386 65.0945 21.1392 65.6934 20.6601 66.2323C19.1032 67.7893 17.606 69.3463 15.9892 70.8435C14.7915 71.9214 13.474 71.9813 12.2763 70.7836C11.1984 69.6458 11.3182 68.3882 12.3362 67.3103C13.8932 65.6335 15.5101 64.0765 17.1868 62.4596C18.0851 61.6212 19.163 61.5613 20.241 62.1602C21.0195 62.6393 21.4985 63.4178 21.4386 64.3759Z"
      fill="#EC2D31"
    />
    <path
      d="M43.9553 6.88672C43.9553 7.96464 44.0152 9.10245 43.9553 10.1804C43.8355 11.6775 42.8175 12.5758 41.4401 12.6356C40.0029 12.6955 38.925 11.7374 38.8052 10.3001C38.6256 8.02453 38.6854 5.74891 38.8052 3.4733C38.8651 1.9163 39.7634 0.898264 41.5 0.958149C43.2367 1.01803 43.9553 2.09596 44.0152 3.65295C44.0152 4.73088 44.0152 5.8088 43.9553 6.88672C44.0152 6.88672 44.0152 6.88672 43.9553 6.88672Z"
      fill="#EC2D31"
    />
    <path
      d="M76.5923 39.2843C77.6702 39.2843 78.808 39.2244 79.886 39.2843C81.3232 39.404 82.3412 40.1227 82.4011 41.6797C82.5209 43.4163 81.5029 44.3146 79.9459 44.4343C77.79 44.614 75.5743 44.5541 73.4184 44.4942C71.8016 44.4343 70.6638 43.4762 70.6638 41.9192C70.6638 40.2424 71.8614 39.2843 73.658 39.2843C74.5562 39.2843 75.5743 39.2843 76.5923 39.2843Z"
      fill="#EC2D31"
    />
    <path
      d="M21.4386 19.4625C21.3788 21.259 19.2828 22.6962 17.8456 21.6183C15.6897 19.9415 13.7135 17.9055 11.9769 15.8095C10.8391 14.3723 12.1565 12.2763 13.9531 12.1565C15.7496 11.9769 21.4386 17.6659 21.4386 19.4625Z"
      fill="#EC2D31"
    />
    <path
      d="M71.1428 69.0469C71.0829 71.1429 68.9271 72.4603 67.3701 71.2027C65.334 69.526 63.4776 67.5498 61.7409 65.5736C61.0822 64.7951 61.2619 63.7172 61.9206 62.8189C62.6991 61.8608 63.8968 61.4416 64.795 62.0404C67.2503 63.7172 69.3463 65.8131 71.023 68.2684C71.1428 68.5079 71.0829 68.8672 71.1428 69.0469Z"
      fill="#EC2D31"
    />
  </svg>
)

export const MobileDesignIcon = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 83 83"
    fill="none"
  >
    <path
      d="M35.0324 82.9401C32.2179 81.0238 30.9603 78.3889 31.0202 74.9156C31.0202 72.9394 31.6789 72.64 33.4155 72.6999C38.7453 72.8196 44.1349 72.8196 49.5245 72.6999C51.4408 72.64 51.7402 73.2987 51.8001 75.0952C51.9798 78.868 50.6623 81.5628 47.0692 83C43.057 82.9401 39.0447 82.9401 35.0324 82.9401Z"
      fill="#EC2D31"
    />
    <path
      d="M0.299408 40.4221C3.47329 38.386 6.94659 39.3442 10.3001 39.4639C11.3781 39.5238 12.1565 40.6616 12.1565 41.8593C12.1565 43.1768 11.3182 44.3146 10.0606 44.3745C6.76694 44.4942 3.4134 45.2727 0.299408 43.4762C0.299408 42.3983 0.299408 41.4401 0.299408 40.4221Z"
      fill="#EC2D31"
    />
    <path
      d="M41.2005 67.4899C40.0028 67.4899 38.8052 67.43 37.6075 67.4899C33.8347 67.7295 30.1818 68.0888 28.8643 63.1183C28.5649 61.9207 26.8282 61.0224 25.7503 60.0043C17.8456 53.0577 15.2106 42.039 19.2828 32.5173C23.2352 23.2352 32.7568 17.2468 42.518 17.9055C53.4769 18.684 62.1601 25.6905 64.6154 36.1703C66.7712 45.5123 64.1363 53.4769 57.0101 59.9445C54.974 61.741 52.9379 63.5375 52.1594 66.2323C51.8001 67.5498 50.9018 67.4899 49.8838 67.4899C47.0093 67.4899 44.1349 67.4899 41.2005 67.4899ZM56.7106 40.0628C56.531 33.0563 50.2431 26.7684 43.2366 26.5289C41.5 26.469 39.943 26.7684 39.7633 28.8644C39.6435 30.7208 40.9011 31.3196 42.5779 31.6191C48.207 32.4574 50.9018 35.1523 51.6204 40.6616C51.86 42.3983 52.4588 43.596 54.3153 43.5361C56.4112 43.3564 56.8903 41.8593 56.7106 40.0628Z"
      fill="#EC2D31"
    />
    <path
      d="M71.1428 14.3124C71.1428 15.3903 70.8434 15.9892 70.3643 16.5282C68.8073 18.0852 67.3102 19.6421 65.6933 21.1393C64.4956 22.2172 63.1782 22.2771 61.9805 21.0794C60.9026 19.9416 61.0223 18.684 61.9805 17.6061C63.5375 15.9293 65.1544 14.3723 66.8311 12.7554C67.7294 11.8572 68.8672 11.8572 69.8853 12.456C70.7236 12.8752 71.2027 13.6537 71.1428 14.3124Z"
      fill="#EC2D31"
    />
    <path
      d="M21.4386 64.3759C21.4386 65.0945 21.1392 65.6934 20.6601 66.2323C19.1032 67.7893 17.606 69.3463 15.9892 70.8435C14.7915 71.9214 13.474 71.9813 12.2763 70.7836C11.1984 69.6458 11.3182 68.3882 12.3362 67.3103C13.8932 65.6335 15.5101 64.0765 17.1868 62.4596C18.0851 61.6212 19.163 61.5613 20.241 62.1602C21.0195 62.6393 21.4985 63.4178 21.4386 64.3759Z"
      fill="#EC2D31"
    />
    <path
      d="M43.9553 6.88672C43.9553 7.96464 44.0152 9.10245 43.9553 10.1804C43.8355 11.6775 42.8175 12.5758 41.4401 12.6356C40.0029 12.6955 38.925 11.7374 38.8052 10.3001C38.6256 8.02453 38.6854 5.74891 38.8052 3.4733C38.8651 1.9163 39.7634 0.898264 41.5 0.958149C43.2367 1.01803 43.9553 2.09596 44.0152 3.65295C44.0152 4.73088 44.0152 5.8088 43.9553 6.88672C44.0152 6.88672 44.0152 6.88672 43.9553 6.88672Z"
      fill="#EC2D31"
    />
    <path
      d="M76.5923 39.2843C77.6702 39.2843 78.808 39.2244 79.886 39.2843C81.3232 39.404 82.3412 40.1227 82.4011 41.6797C82.5209 43.4163 81.5029 44.3146 79.9459 44.4343C77.79 44.614 75.5743 44.5541 73.4184 44.4942C71.8016 44.4343 70.6638 43.4762 70.6638 41.9192C70.6638 40.2424 71.8614 39.2843 73.658 39.2843C74.5562 39.2843 75.5743 39.2843 76.5923 39.2843Z"
      fill="#EC2D31"
    />
    <path
      d="M21.4386 19.4625C21.3788 21.259 19.2828 22.6962 17.8456 21.6183C15.6897 19.9415 13.7135 17.9055 11.9769 15.8095C10.8391 14.3723 12.1565 12.2763 13.9531 12.1565C15.7496 11.9769 21.4386 17.6659 21.4386 19.4625Z"
      fill="#EC2D31"
    />
    <path
      d="M71.1428 69.0469C71.0829 71.1429 68.9271 72.4603 67.3701 71.2027C65.334 69.526 63.4776 67.5498 61.7409 65.5736C61.0822 64.7951 61.2619 63.7172 61.9206 62.8189C62.6991 61.8608 63.8968 61.4416 64.795 62.0404C67.2503 63.7172 69.3463 65.8131 71.023 68.2684C71.1428 68.5079 71.0829 68.8672 71.1428 69.0469Z"
      fill="#EC2D31"
    />
  </svg>
)

export const PlatformIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 74 74"
    fill="none"
  >
    <path
      d="M49.8633 22.1158C44.6909 23.5285 42.2008 29.4727 44.8812 34.1467L49.8633 29.1645V22.1158Z"
      fill="#EC2D31"
    />
    <path
      d="M50.875 67.207H48.0866L47.2194 62.0039H26.7806L25.9134 67.207H23.125C21.9277 67.207 20.957 68.1777 20.957 69.375C20.957 70.5723 21.9277 71.543 23.125 71.543H50.875C52.0723 71.543 53.043 70.5723 53.043 69.375C53.043 68.1777 52.0723 67.207 50.875 67.207Z"
      fill="#EC2D31"
    />
    <path
      d="M47.9471 37.2126C52.6147 39.8893 58.5631 37.4105 59.978 32.2305H52.9292L47.9471 37.2126Z"
      fill="#EC2D31"
    />
    <path
      d="M67.4961 2.45703H39.168V9.25C39.168 10.4473 38.1973 11.418 37 11.418C35.8027 11.418 34.832 10.4473 34.832 9.25V2.45703H6.50391C2.91765 2.45703 0 5.37468 0 8.96094V51.1641C0 54.7503 2.91765 57.668 6.50391 57.668H67.4961C71.0823 57.668 74 54.7503 74 51.1641V8.96094C74 5.37468 71.0823 2.45703 67.4961 2.45703ZM32.2305 41.625C32.2305 42.8223 31.2598 43.793 30.0625 43.793H11.5625C10.3652 43.793 9.39453 42.8223 9.39453 41.625V18.5C9.39453 17.3027 10.3652 16.332 11.5625 16.332C12.7598 16.332 13.7305 17.3027 13.7305 18.5V39.457H18.6445V25.4375C18.6445 24.2402 19.6152 23.2695 20.8125 23.2695C22.0098 23.2695 22.9805 24.2402 22.9805 25.4375V39.457H27.8945V32.375C27.8945 31.1777 28.8652 30.207 30.0625 30.207C31.2598 30.207 32.2305 31.1777 32.2305 32.375V41.625ZM52.0312 42.6367C45.0995 42.6367 39.457 36.9942 39.457 30.0625C39.457 23.129 45.0978 17.4883 52.0312 17.4883C58.9647 17.4883 64.6055 23.129 64.6055 30.0625C64.6055 36.996 58.9647 42.6367 52.0312 42.6367Z"
      fill="#EC2D31"
    />
    <path
      d="M54.1992 22.1158V27.8945H59.978C59.2126 25.0919 57.0018 22.8812 54.1992 22.1158Z"
      fill="#EC2D31"
    />
  </svg>
)

export const MobilePlatformIcon = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 74 74"
    fill="none"
  >
    <path
      d="M49.8633 22.1158C44.6909 23.5285 42.2008 29.4727 44.8812 34.1467L49.8633 29.1645V22.1158Z"
      fill="#EC2D31"
    />
    <path
      d="M50.875 67.207H48.0866L47.2194 62.0039H26.7806L25.9134 67.207H23.125C21.9277 67.207 20.957 68.1777 20.957 69.375C20.957 70.5723 21.9277 71.543 23.125 71.543H50.875C52.0723 71.543 53.043 70.5723 53.043 69.375C53.043 68.1777 52.0723 67.207 50.875 67.207Z"
      fill="#EC2D31"
    />
    <path
      d="M47.9471 37.2126C52.6147 39.8893 58.5631 37.4105 59.978 32.2305H52.9292L47.9471 37.2126Z"
      fill="#EC2D31"
    />
    <path
      d="M67.4961 2.45703H39.168V9.25C39.168 10.4473 38.1973 11.418 37 11.418C35.8027 11.418 34.832 10.4473 34.832 9.25V2.45703H6.50391C2.91765 2.45703 0 5.37468 0 8.96094V51.1641C0 54.7503 2.91765 57.668 6.50391 57.668H67.4961C71.0823 57.668 74 54.7503 74 51.1641V8.96094C74 5.37468 71.0823 2.45703 67.4961 2.45703ZM32.2305 41.625C32.2305 42.8223 31.2598 43.793 30.0625 43.793H11.5625C10.3652 43.793 9.39453 42.8223 9.39453 41.625V18.5C9.39453 17.3027 10.3652 16.332 11.5625 16.332C12.7598 16.332 13.7305 17.3027 13.7305 18.5V39.457H18.6445V25.4375C18.6445 24.2402 19.6152 23.2695 20.8125 23.2695C22.0098 23.2695 22.9805 24.2402 22.9805 25.4375V39.457H27.8945V32.375C27.8945 31.1777 28.8652 30.207 30.0625 30.207C31.2598 30.207 32.2305 31.1777 32.2305 32.375V41.625ZM52.0312 42.6367C45.0995 42.6367 39.457 36.9942 39.457 30.0625C39.457 23.129 45.0978 17.4883 52.0312 17.4883C58.9647 17.4883 64.6055 23.129 64.6055 30.0625C64.6055 36.996 58.9647 42.6367 52.0312 42.6367Z"
      fill="#EC2D31"
    />
    <path
      d="M54.1992 22.1158V27.8945H59.978C59.2126 25.0919 57.0018 22.8812 54.1992 22.1158Z"
      fill="#EC2D31"
    />
  </svg>
)

export const IntegrationIcon = () =>(
  <svg
    width="50"
    height="50"
    viewBox="0 0 76 76"
    fill="none"
  >
    <path
      d="M31.3203 76V69.1719C26.4084 69.1719 22.4141 65.1776 22.4141 60.2656C22.4141 55.3537 26.4084 51.3594 31.3203 51.3594V44.6797H18.8741L19.9331 41.7051C20.1027 41.2333 20.1875 40.7354 20.1875 40.2266C20.1875 37.7717 18.1892 35.7734 15.7344 35.7734C13.2795 35.7734 11.2812 37.7717 11.2812 40.2266C11.2812 40.7354 11.366 41.2333 11.5357 41.7051L12.5946 44.6797H0C1.10482 61.3183 14.6817 74.8952 31.3203 76Z"
      fill="#EC2D31"
    />
    <path
      d="M15.7344 31.3203C20.6463 31.3203 24.6406 35.3146 24.6406 40.2266H31.3203V27.7804L34.2949 28.8393C37.0368 29.8156 40.2243 27.6021 40.2266 24.6406C40.2243 21.6769 37.0389 19.4461 34.2949 20.4419L31.3203 21.5009V9.16751C14.6817 10.2723 1.10482 23.5879 0 40.2266H6.82812C6.82812 35.3146 10.8224 31.3203 15.7344 31.3203Z"
      fill="#EC2D31"
    />
    <path
      d="M66.8325 44.6797H60.2656C60.2656 49.5916 56.2713 53.5859 51.3594 53.5859C46.4474 53.5859 42.4531 49.5916 42.4531 44.6797H35.7734V57.1259L32.7989 56.0669C30.0461 55.0776 26.865 57.3019 26.8672 60.2656C26.865 63.2293 30.0484 65.4537 32.7989 64.4643L35.7734 63.4054V76C52.4121 74.8952 65.7277 61.3183 66.8325 44.6797Z"
      fill="#EC2D31"
    />
    <path
      d="M66.9453 17.9609V9.05469H58.0391C58.0391 4.14274 54.0448 0 49.1328 0C44.2209 0 40.2266 4.14274 40.2266 9.05469H35.7734V15.7344C40.6854 15.7344 44.6797 19.7287 44.6797 24.6406C44.6797 29.5526 40.6854 33.5469 35.7734 33.5469V40.2266H48.2196L47.1607 43.2011C46.991 43.673 46.9062 44.1708 46.9062 44.6797C46.9062 47.1345 48.9045 49.1328 51.3594 49.1328C53.8142 49.1328 55.8125 47.1345 55.8125 44.6797C55.8125 44.1708 55.7277 43.673 55.5581 43.2011L54.4991 40.2266H66.9453V35.7734C71.8573 35.7734 76 31.7791 76 26.8672C76 21.9552 71.8573 17.9609 66.9453 17.9609Z"
      fill="#EC2D31"
    />
  </svg>
)

export const MobileIntegrationIcon = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 76 76"
    fill="none"
  >
    <path
      d="M31.3203 76V69.1719C26.4084 69.1719 22.4141 65.1776 22.4141 60.2656C22.4141 55.3537 26.4084 51.3594 31.3203 51.3594V44.6797H18.8741L19.9331 41.7051C20.1027 41.2333 20.1875 40.7354 20.1875 40.2266C20.1875 37.7717 18.1892 35.7734 15.7344 35.7734C13.2795 35.7734 11.2812 37.7717 11.2812 40.2266C11.2812 40.7354 11.366 41.2333 11.5357 41.7051L12.5946 44.6797H0C1.10482 61.3183 14.6817 74.8952 31.3203 76Z"
      fill="#EC2D31"
    />
    <path
      d="M15.7344 31.3203C20.6463 31.3203 24.6406 35.3146 24.6406 40.2266H31.3203V27.7804L34.2949 28.8393C37.0368 29.8156 40.2243 27.6021 40.2266 24.6406C40.2243 21.6769 37.0389 19.4461 34.2949 20.4419L31.3203 21.5009V9.16751C14.6817 10.2723 1.10482 23.5879 0 40.2266H6.82812C6.82812 35.3146 10.8224 31.3203 15.7344 31.3203Z"
      fill="#EC2D31"
    />
    <path
      d="M66.8325 44.6797H60.2656C60.2656 49.5916 56.2713 53.5859 51.3594 53.5859C46.4474 53.5859 42.4531 49.5916 42.4531 44.6797H35.7734V57.1259L32.7989 56.0669C30.0461 55.0776 26.865 57.3019 26.8672 60.2656C26.865 63.2293 30.0484 65.4537 32.7989 64.4643L35.7734 63.4054V76C52.4121 74.8952 65.7277 61.3183 66.8325 44.6797Z"
      fill="#EC2D31"
    />
    <path
      d="M66.9453 17.9609V9.05469H58.0391C58.0391 4.14274 54.0448 0 49.1328 0C44.2209 0 40.2266 4.14274 40.2266 9.05469H35.7734V15.7344C40.6854 15.7344 44.6797 19.7287 44.6797 24.6406C44.6797 29.5526 40.6854 33.5469 35.7734 33.5469V40.2266H48.2196L47.1607 43.2011C46.991 43.673 46.9062 44.1708 46.9062 44.6797C46.9062 47.1345 48.9045 49.1328 51.3594 49.1328C53.8142 49.1328 55.8125 47.1345 55.8125 44.6797C55.8125 44.1708 55.7277 43.673 55.5581 43.2011L54.4991 40.2266H66.9453V35.7734C71.8573 35.7734 76 31.7791 76 26.8672C76 21.9552 71.8573 17.9609 66.9453 17.9609Z"
      fill="#EC2D31"
    />
  </svg>
)

export const IconsTitle = styled.span`
  font-family: "AlphaMack AOE";
  color: #000000DE;
  font-size: 40px;
  font-weight: normal;
  font-style: normal;
  text-transform: capitalize;
  text-align: left;
  line-height: 150%;
@media screen and ${device.tabletL} and (min-width: 426px){
  font-size: 18px;
}
`;

export const VideoFrame = styled.iframe`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 50vh;
  border: none;
@media screen and ${device.tabletL} and (min-width: 426px){
  height: 70vh;
}
`;