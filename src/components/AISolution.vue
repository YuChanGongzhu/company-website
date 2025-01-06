<template>
  <div class="text-center pt-5 mt-3">
    <h1>AI SOLUTION</h1>
    <h3 class="mt-5 mb-5">PROVIDE COMPREHENSIVE AI SOLUTIONS</h3>
    <div class="solu_ban" :class="currentBannerClass" style="width: 80%; margin: 0 auto; padding: 80px 0;">
      <div class="container pt-5 pb-5">
        <div class="row solution_item1">
          <div class="col-md-8 text-left mb-5 solu_item1">
            <div class="col-md-8">
              <p style="color: #ffffff;">Case introduction</p>
              <p style="color: #ffffff;margin-bottom: 50px;line-height: 30px;">The Office Assistant is integrated into the DingTalk platform,offering <span style="color:#C7FF33; font-weight: bold">intelligent task management</span>, scheduling, and meeting reminders. Utilizing <span style="color:#C7FF33; font-weight: bold">Al technology</span> to <span style="color:#C7FF33; font-weight: bold">automate daily offce tasks</span>, the system enhances work effciency and <span style="color:#C7FF33; font-weight: bold">collaboration</span>. By reducing manual tasks and optimizing schedules, this project significantly boosts <span style="color:#C7FF33; font-weight: bold">employee productivity</span> and minimizes losses due to missed meetings or delayed tasks. Statistics show that since the project's launch, employee work efficiency has increased by 30.33%, and meeting attendance rates have improved by 25.67%.</p>
            </div>
          </div>
          <div class="col-md-8 text-left mb-5 solu_item2" style="display: none;">
            <div class="col-md-8">
              <p style="color: #ffffff;">Case introduction</p>
              <p style="color: #ffffff;margin-bottom: 50px;line-height: 30px;">The Intelligent Fitness <span style="color:#C7FF33; font-weight: bold">provides personalized fitness advice</span> and<span style="color:#C7FF33; font-weight: bold"> plans</span> based on user health data. By using Al technology to analyze users' physical conditions and exercise habits, <span style="color:#C7FF33; font-weight: bold">it recommends the most suitable fitness programs</span>, helping users set and achieve their fitness goals. This has signifcantly improved fitness outcomes, with user satisfaction increasing by <span style="color:#C7FF33; font-weight: bold">40.13% </span>and the number of platform subscribers growing by <span style="color:#C7FF33; font-weight: bold">20.68%</span>.</p>
            </div>
          </div>
          <div class="col-md-8 text-left mb-5 solu_item3" style="display: none;">
            <div class="col-md-8">
              <p style="color: #ffffff;">Case introduction</p>
              <p style="color: #ffffff;margin-bottom: 50px;line-height: 30px;">The AI Art Platform uses<span style="color:#C7FF33; font-weight: bold"> AI technology to generate artistic paintings</span>, allowing users to create unique art pieces by inputting descriptions or selecting specific styles. User-generated content has increased by <span style="color:#C7FF33; font-weight: bold">50.68%</span>, and platform user engagement has risen by<span style="color:#C7FF33; font-weight: bold"> 35.31%</span>. The system supports<span style="color:#C7FF33; font-weight: bold"> various painting styles and themes</span>, meeting users' personalized creative needs.
              </p>
            </div>
          </div>
          <div class="col-md-8 text-left mb-5 solu_item4" style="display: none;">
            <div class="col-md-8">
              <p style="color: #ffffff;">Case introduction</p>
              <p style="color: #ffffff;margin-bottom: 50px;line-height: 30px;">The AI Door Guardian utilizes <span style="color:#C7FF33; font-weight: bold">advanced facial recognition technology to achieve identity verification</span> and <span style="color:#C7FF33; font-weight: bold">access control</span>. The system is widely used in security monitoring and access control management scenarios, providing efficient security and user experience. This project has successfully improved the efficiency of the company's security management and reduced security costs.
              </p>
            </div>
          </div>
          <div class="col-md-8 text-left mb-5 solu_item5" style="display: none;">
            <div class="col-md-8">
              <p style="color: #ffffff;">Case introduction</p>
              <p style="color: #ffffff;margin-bottom: 50px;">The GTorque Game Guide Assistant uses image recognition and computer vision technology to provide users with game guides and tips. The system can identify key scenes and tasks in games, helping players better understand and navigate the game, thereby enhancing their gaming experience. By improving user engagement and satisfaction, this project has significantly increased the company's competitiveness in the gaming market.</p>
              <a  class="mb-4 mr-3" style="display: inline-block;background-color: #8894b7;color: #fff;padding: 5px 20px;border-radius: 10px;"><span style="color:#C7FF33; font-weight: bold">Image recognitiion</span></a>
              <a  class="mb-4 mr-3" style="display: inline-block;background-color: #8894b7;color: #fff;padding: 5px 20px;border-radius: 10px;"><span style="color:#C7FF33; font-weight: bold">Computer vision</span></a>
              <a  class="mb-4" style="display: inline-block;background-color: #8894b7;color: #fff;padding: 5px 20px;border-radius: 10px;"><span style="color:#C7FF33; font-weight: bold">Guidance for Game</span></a>
            </div>
          </div>
          <div class="col-md-8 text-left mb-5 solu_item6" style="display: none;">
            <div class="col-md-8">
              <p style="color: #ffffff;">Case introduction</p>
              <p style="color: #ffffff;margin-bottom: 50px;line-height: 30px;">This project aims to implement precision marketing and customer management on the computerized TikTok platform through an automated system. The system automatically collects and downloads video links, <span style="color:#C7FF33; font-weight: bold">captures comment data</span>, and <span style="color:#C7FF33; font-weight: bold">uses AI technology to analyze comments</span> and <span style="color:#C7FF33; font-weight: bold">identify potential leads</span>. It then automatically tracks these leads and sends preset messages to interact effectively with them. Through this automated process, the company's customer conversion rate has increased by approximately<span style="color:#C7FF33; font-weight: bold"> 30%</span>, significantly improving marketing efficiency and competitiveness.
              </p>
            </div>
          </div>
          <div class="col-md-4 mx-auto">
            <ul class="shadow solution_btn col-md-9" style="list-style: none;text-align: left;background-color: #fff;padding: 0;padding-top: 20px;border-radius: 5px;">
              <li class="p-3 pl-5 solu_btn2">INTELLIGENT FITNESS ASSISTANT</li>
              <li class="p-3 pl-5 solu_btn3">AI IMAGE GENERATION</li>
              <li class="p-3 pl-5 solu_btn1 active">AI OFFICE ASSISTANT</li>
              <li class="p-3 pl-5 solu_btn4">AI DOOR GUARDIAN</li>
              <li class="p-3 pl-5 solu_btn5">GTORQUE GAME GUIDE ASSISTANT</li>
              <li class="p-3 pl-5 solu_btn6">CHARACTERISTIC SALES</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AISolution',
  data() {
    return {
      currentBannerClass: 'banner-1'
    }
  },
  mounted() {
    const solution_btn = document.querySelectorAll('.solution_btn li');
    solution_btn.forEach(li => {
      li.addEventListener('click', function() {
        solution_btn.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
    });

    var solu_btn1 = document.querySelector('.solu_btn1');
    var solu_btn2 = document.querySelector('.solu_btn2');
    var solu_btn3 = document.querySelector('.solu_btn3');
    var solu_btn4 = document.querySelector('.solu_btn4');
    var solu_btn5 = document.querySelector('.solu_btn5');
    var solu_btn6 = document.querySelector('.solu_btn6');

    solu_btn1.onclick = () => {
      document.querySelector('.solu_item1').style.display = 'flex';
      document.querySelector('.solu_item2').style.display = 'none';
      document.querySelector('.solu_item3').style.display = 'none';
      document.querySelector('.solu_item4').style.display = 'none';
      document.querySelector('.solu_item5').style.display = 'none';
      document.querySelector('.solu_item6').style.display = 'none';
      this.currentBannerClass = 'banner-1';
    }
    
    solu_btn2.onclick = () => {
      document.querySelector('.solu_item1').style.display = 'none';
      document.querySelector('.solu_item2').style.display = 'flex';
      document.querySelector('.solu_item3').style.display = 'none';
      document.querySelector('.solu_item4').style.display = 'none';
      document.querySelector('.solu_item5').style.display = 'none';
      document.querySelector('.solu_item6').style.display = 'none';
      this.currentBannerClass = 'banner-2';
    }
    
    solu_btn3.onclick = () => {
      document.querySelector('.solu_item1').style.display = 'none';
      document.querySelector('.solu_item2').style.display = 'none';
      document.querySelector('.solu_item3').style.display = 'flex';
      document.querySelector('.solu_item4').style.display = 'none';
      document.querySelector('.solu_item5').style.display = 'none';
      document.querySelector('.solu_item6').style.display = 'none';
      this.currentBannerClass = 'banner-3';
    }
    
    solu_btn4.onclick = () => {
      document.querySelector('.solu_item1').style.display = 'none';
      document.querySelector('.solu_item2').style.display = 'none';
      document.querySelector('.solu_item3').style.display = 'none';
      document.querySelector('.solu_item4').style.display = 'flex';
      document.querySelector('.solu_item5').style.display = 'none';
      document.querySelector('.solu_item6').style.display = 'none';
      this.currentBannerClass = 'banner-4';
    }
    
    solu_btn5.onclick = () => {
      document.querySelector('.solu_item1').style.display = 'none';
      document.querySelector('.solu_item2').style.display = 'none';
      document.querySelector('.solu_item3').style.display = 'none';
      document.querySelector('.solu_item4').style.display = 'none';
      document.querySelector('.solu_item5').style.display = 'flex';
      document.querySelector('.solu_item6').style.display = 'none';
      this.currentBannerClass = 'banner-5';
    }
    
    solu_btn6.onclick = () => {
      document.querySelector('.solu_item1').style.display = 'none';
      document.querySelector('.solu_item2').style.display = 'none';
      document.querySelector('.solu_item3').style.display = 'none';
      document.querySelector('.solu_item4').style.display = 'none';
      document.querySelector('.solu_item5').style.display = 'none';
      document.querySelector('.solu_item6').style.display = 'flex';
      this.currentBannerClass = 'banner-6';
    }
  }
}
</script>

<style scoped>
.solution_btn li {
  cursor: pointer;
}
.solution_btn li.active {
  background-color: #3860d2;
  color: #fff;
}
.solution_btn li:hover {
  background-color: #b5c2e8;
}
.solu_ban {
  background-size: 100% 100%;
}

.banner-1 {
  background-image: url(../images/solu_ban1.png);
}

.banner-2 {
  background-image: url(../images/solu_ban2.png);
}

.banner-3 {
  background-image: url(../images/solu_ban3.png);
}

.banner-4 {
  background-image: url(../images/solu_ban4.png);
}

.banner-5 {
  background-image: url(../images/solu_ban5.png);
}

.banner-6 {
  background-image: url(../images/solu_ban6.png);
}

.col-md-8 p {
  font-size:20px;
  line-height: 1.4;
}
</style>