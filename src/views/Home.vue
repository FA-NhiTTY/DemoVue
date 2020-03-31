<template>
  <a-carousel>
    <div>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.dhht.vn%2Fwp-content%2Fuploads%2F2018%2F10%2Fbanner-Casio.jpg"
        alt="banner1"
      />
    </div>
    <div>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.dhht.vn%2Fwp-content%2Fuploads%2F2017%2F03%2Fdoxa-banner.jpg"
        alt="banner2"
      />
    </div>
    <div>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn3.dhht.vn%2Fwp-content%2Fuploads%2F2015%2F11%2FDANIEL-WELLINGTON-Banner.jpg"
        alt="banner3"
      />
    </div>
  </a-carousel>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
/* For demo */
.ant-card-meta-title {
  white-space: normal !important;
}

.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 300px;
  line-height: 300px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide img {
  max-width: 100%;
  height: 100%;
  margin: auto;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
