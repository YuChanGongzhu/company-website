<template>
  <div id="business">
    <div class="container text-center pt-5 mt-3">
      <h1 class="font-weight-bold">BUSINESS</h1>
      <p style="color: #79808A; font-size: 22px;">Our main business is divided into three aspects: firstly, customized software, tailoring software solutions according to specific customer needs; Secondly, AI solutions provide comprehensive AI solutions; Thirdly, information technology upgrade to assist customers in comprehensive information technology upgrade</p>
      <div class="row mt-5 mb-5 business_btn">
        <a class="col-4 text-center font-weight-bold pb-3 business_btn1" href="javascript:;" style="font-size: 20px; line-height: 20px; padding-top: 5px;">Customized software</a>
        <a class="col-4 text-center font-weight-bold pb-3 business_btn2 active" href="javascript:;" style="font-size: 28px; line-height: 28px; padding-bottom: 5px;">AI solution</a>
        <a class="col-4 text-center font-weight-bold pb-3 business_btn3" href="javascript:;" style="font-size: 16px; line-height: 16px; padding-top: 10px;">Informatization upgrade</a>
      </div>
      <div class="row business_item1" style="display: none;">
        <div class="col-md-6 d-flex align-items-center justify-content-center">
          <img style="width: 100%;" src="../images/about_left1.jpg" alt="">
        </div>
        <div class="col-md-6 pt-5 text-left d-flex flex-column justify-content-center">
          <h1>PC、Mobile、Web<br>application development</h1>
          <p style="color: #79808A;">PC application development include <span style="color: #3860D2;"> Customer Relationship Management Systems、Enterprise Resource Planning Systems、Data Visualization Tools and Customized WorkflowManagement Systems</span></p>
          <p style="color: #79808A;">Mobile application development Profcient in using <span style="color: #3860D2;"> programming languages and frameworks such as Swift, KotlinJava, React Native,</span> and Flutter, we develop high-performanceiOS and Android applications.Our expertise spans <span style="color: #3860D2;"> e-commerce applications, social media applications, mobile ofhceapplications, health monitoring applications,</span> and customizedenterprise applications, Through intuitive user interface design.innovative interaction experiences,optimized performancetuning,and cross-platform compatibility.</p>
          <p style="color: #79808A;">Web application development covers web applicationdevelopment, providing efhcient, stable, and user-friendly webapplication solutions tailored to the specifc business needs oiour clients.We possess a comprehensive technology stack todeliver these solutions.</p>
          <p style="color: #79808A;"><span style="color: #3860D2;">HTML CSS JavaScript TypeScript Java(SpringBoot) Python(Django Flask) Node.is React AngularVue.is Content management system,e-commerceplatform, single page application, enterprise portal, datavisualization platform.</span></p>
          <p style="color: #79808A;">Through responsive desian.modular architecture,front-endand back-end separation,and high-security assurance.</p>
          <p style="color: #79808A;">Our solutions not only meet the specifc needs of our clientsbut also enhance operational effciency and user satisfaction.helping enterprises achieve digital and intelligent management.</p>
        </div>
      </div>
      <div class="row business_item2">
        <div class="col-md-6 d-flex align-items-center justify-content-center">
          <img style="width: 100%;" src="../images/about_left2.jpg" alt="">
        </div>
        <div class="col-md-6 pt-5 text-left d-flex flex-column justify-content-center">
          <h1>Provide comprehensive AI solutions</h1>
          <p style="color: #79808A;">AI solutions include three categories: data analysis application development, machine learning application development, and big language model application development.</p>
          <p style="color: #79808A;">Data analysis applications involves developing data analysis applications that utilize various technologies such as <span style="color: #3860D2;">descriptive analytics, diagnostic analytics, predictive analytics, and prescriptive analytics </span>  to provide comprehensive data-driven solutions tailored to customers' specific business needs.</p>
          <p style="color: #79808A;">Machine learning applications covers the development of machine learning applications and utilizes various technologies, including <span style="color: #3860D2;"> supervised learning, unsupervised learning, semi-supervised learning, and reinforcement learning.</span> </p>
          <p style="color: #79808A;">Large Language Model Applications covers the development of machine learning applications and utilizes various technologies, including supervised learning, unsupervised learning, semi-supervised learning, and reinforcement learning. </p>
        </div>
      </div>
      <div class="row business_item3" style="display: none;">
        <div class="col-md-6 d-flex align-items-center justify-content-center">
          <img style="width: 100%;" src="../images/about_left3.jpg" alt="">
        </div>
        <div class="col-md-6 pt-5 text-left d-flex flex-column justify-content-center">
          <h1>ERP system, CRM systemand SCM system</h1>
          <p style="color: #79808A;">We provide comprehensive information upgrade services,including ERP system, CRM system and SCM system, to helpenterprises achieve digital transformation and improveoperational effciency.</p>
          <p style="color: #79808A;">We provide comprehensive information upgrade services and support <span style="color: #3860D2;"> seamless integration </span> and <span style="color: #3860D2;"> expansion of systems with aflexible architecture. By introducing advanced businessintelligence (Bl) tools,</span> we are able to implement real-time dataanalysis and reporting capabilities to help enterprises maketimely data-driven decisions.In addition. our solutions aredesigned to optimize the allocation and management ofenterprise resources,thereby increasing overall operationaleffciency and enabling overall business improvement andinnovation.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BusinessPart',
  mounted() {
    const business_btn = document.querySelectorAll('.business_btn a');
    business_btn.forEach(a => {
      a.addEventListener('click', function() {
        business_btn.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
    });

    var business_btn1 = document.querySelector('.business_btn1');
    var business_btn2 = document.querySelector('.business_btn2');
    var business_btn3 = document.querySelector('.business_btn3');
    
    business_btn1.onclick = function() {
      document.querySelector('.business_item1').style.display = 'flex';
      document.querySelector('.business_item2').style.display = 'none';
      document.querySelector('.business_item3').style.display = 'none';
    }
    business_btn2.onclick = function() {
      document.querySelector('.business_item1').style.display = 'none';
      document.querySelector('.business_item2').style.display = 'flex';
      document.querySelector('.business_item3').style.display = 'none';
    }
    business_btn3.onclick = function() {
      document.querySelector('.business_item1').style.display = 'none';
      document.querySelector('.business_item2').style.display = 'none';
      document.querySelector('.business_item3').style.display = 'flex';
    }
  }
}
</script>

<style scoped>
.business_btn a {
  border-bottom: 1px solid rgb(198, 196, 196);
  color: #000;
}
.business_btn a:hover {
  border-bottom: 2px solid rgb(0, 0, 0);
}
.business_btn a.active {
  border-bottom: 2px solid rgb(74, 108, 247);
  color: #3860D2;
}

.col-md-6 p {
  font-size: 20px;
  line-height: 1.3;
}

.col-md-6 h1 {
  font-size: 32px;
  line-height: 1.2;
}
</style>