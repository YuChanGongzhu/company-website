<template>
  <div id="home">
    <div class="container-fluid">
      <div class="container-fluid d-none d-md-block banner-bg">
        <video src="../images/banner-move.mov" autoplay muted loop playsinline preload="auto" style="object-fit: fill; image-rendering: -webkit-optimize-contrast;"></video>
        <div class="row col-md-10 mx-auto">
          <div class="col-md-12" style="padding: 100px; padding-top: 120px;">
            <div class="typewriter-container">
              <h1 style="font-weight: bold;font-size: 50px;">
                <span class="line-1">ONE STOP</span>
                <br>
                <span class="line-2">NETWORK DEVELOPMENT</span>
              </h1>
            </div>
            <p style="background-color: #3860d2;display: inline-block;padding: 10px;border-radius: 30px;font-weight: bold;color: #fff;"><span style="color: #FFF;margin: 0 5px;">●</span>THREE YEARS TO SHARPEN SWORD</p>
            <p style="text-align: justify;color: #79808A;">from a sustainable company into a world-changing force.</p>
          </div>
        </div>
      </div>
      <div class="container-fluid d-block d-md-none" style="padding-bottom: 50px;padding-bottom: 50px; background-image:url('/src/images/banner.png'); background-size: cover;">
        <div class="row col-md-10 mx-auto">
          <div class="col-md-6" style="padding: 30px;">
            <p style="background-color: #3860d2;display: inline-block;padding: 10px;border-radius: 30px;font-weight: bold;color: #fff;"><span style="color: #FFF;margin: 0 5px;">●</span>THREE YEARS TO SHARPEN SWORD</p>
            <h1 style="font-weight: bold;">ONE STOP NETWORK DEVELOPMENT</h1>
            <p style="text-align: justify;color: #79808A;">hope to become a company that can change the world.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RollPart'
}
</script>

<style scoped>
.typewriter-container h1 {
  overflow: hidden;
}

.line-1, .line-2 {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
}

.line-1 {
  animation: typing 5s steps(27) forwards;
}

.line-2 {
  animation: typing 5s steps(27) forwards;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

.banner-bg {
  padding-bottom: 50px;
  position: relative;
  overflow: hidden;
}

.banner-bg video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  z-index: -1;
}
</style>