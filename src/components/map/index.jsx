import React from 'react'

const Map = () => {
  return (
    <iframe
      className="h-[492px] mt-[40px] mb-[40px] rounded-[15px]"
      src="https://yandex.uz/map-widget/v1/?ll=69.344224%2C41.368629&z=16&l=map&pt=69.344224,41.368629,pm2rdm"
      width="100%"
      allowFullScreen
      title="Yandex Map"
    />
  );
}

export default Map