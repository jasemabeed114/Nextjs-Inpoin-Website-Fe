import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Autoplay]);


function SwiperComponent({ children, hideBullet, ...swiperProps }) {
  const paginationRef = useRef(null);
  const config = {
    slidesPerView: 1,
    pagination: {
      bulletActiveClass: 'swiper-pagination-bullet-active',
      bulletClass: 'swiper-pagination-bullet',
      type: 'bullets',
      clickable: true
    },
    autoplay: { delay: 3000, disableOnInteraction: false },
    ...swiperProps
  }
  return (
    <div style={{ width: '100%' }}>
      <Swiper
        onInit={(swiper) => {
          swiper.params.pagination.el = paginationRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        {...config}
      >
        {children}
        <span slot="container-end">
          <div style={{ position: 'relative', display: hideBullet ? 'none' : 'block' }}>
            <div ref={paginationRef} />
          </div>
        </span>
      </Swiper>
    </div>
  );
};

SwiperComponent.defaultProps = {
  hideBullet: false
};

SwiperComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]).isRequired,
  hideBullet: PropTypes.bool,
};

export default SwiperComponent;