<template>
  <div class="inf_ban" style="width: 100%;padding: 80px 0;">
    <div class="container text-center pt-5 mt-3">
      <h1 class="font-weight-bold">INFORMATIZATION UPGRADE</h1>
      <h3 class="mt-5 mb-5">MEAD JOHNSON MARKETING MANAGEMENT SYSTEM</h3>
      <div id="lunbotu" class="carousel slide" data-ride="carousel" data-interval="3000">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img style="width: 100%; height: 80%;" src="../images/inf_banner.jpg" alt="">
            <p class="mt-2 col-md-10 mx-auto zz" style="color: #79808A;margin-top: 10px;">The Mead Johnson Marketing Management System achieves <span style="color: #3860D2;"> personalized audience segmentation and targeting, incorporating interactive points allocation,</span> which significantly enhances user engagement and brand loyalty. Through <span style="color: #3860D2;">  comprehensive data analysis and reporting capabilities,</span> enterprises can precisely identify market demands and user preferences, which helps them formulate more effective marketing strategies and increase sales.</p>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-4 text-left giegie">
                <li class="fade-in" style="background-image: url(src/images/inventory.png);background-size: 100% 100%;padding:30px 20px;width: 100%;color: #3860D2;">INVENTORY MANAGEMENT</li>
                <li class="fade-in" style="background-image: url(src/images/order.png);background-size: 100% 100%;padding:30px 20px;width: 100%;color: #3860D2;">ORDER PROCESSING</li>
                <li class="fade-in" style="background-image: url(src/images/logistics.png);background-size: 100% 100%;padding:30px 20px;width: 100%;color: #3860D2;">LOGISTICS TRACKING</li>
                <li class="fade-in" style="background-image: url(src/images/automated.png);background-size: 100% 100%;padding:30px 20px;width: 100%;color: #3860D2;">AUTOMATED OPERATIONS</li>
              </div>
              <div class="col-8">
                <img style="width: 100%;" src="../images/inf_right.jpg" alt="">
                <p class="mt-2 col-md-7 ml-auto text-left cl" style="color: #79808A;margin-top: 10px;">The customized WMS (Warehouse Management System) has replaced traditional manual recording and outdated SaaS systems, achieving a <span style="color: #3860D2;">100%</span> improvement in business process efficiency.</p>
                <p class="mt-2 col-md-7 ml-auto text-left cr" style="color: #79808A;margin-top: 10px;">The integrated inventory management, order processing, and logistics tracking features of the system provide <span style="color: #3860D2;">real-time data monitoring</span> and automated operations.It reduces human errors and greatly improves overall operational efficiency.</p>
              </div>
            </div>
          </div>
          <br>
          <ol class="carousel-indicators">
            <li data-target="#lunbotu" data-slide-to="0" class="active"></li>
            <li data-target="#lunbotu" data-slide-to="1"></li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InformatizationUpgrade'
}
</script>

<style scoped>
.inf_ban {
  background-image: url(../images/inf_ban.png);
  background-size: 100% 100%;
}

.carousel-indicators {
  bottom: -3%;
}

.carousel-indicators li {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: gray;
}

.carousel-indicators .active {
  background-color: #3860D2;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 1s;
  animation-fill-mode: forwards;
  opacity: 0;
}

.fade-in:nth-child(1) { animation-delay: 0.3s; }
.fade-in:nth-child(2) { animation-delay: 0.5s; }
.fade-in:nth-child(3) { animation-delay: 0.7s; }
.fade-in:nth-child(4) { animation-delay: 0.9s; }

.carousel-inner {
  height: 800px;
}

.cl, .cr, .zz {
  line-height: 40px;
}

@media (max-width: 768px) {
  .cl, .cr, .zz {
    line-height: 30px;
  }
  .carousel-inner {
    height: 750px;
  }
}
</style> 