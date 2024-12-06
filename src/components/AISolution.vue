<template>
  <div class="text-center pt-5 mt-3">
    <h1>AI SOLUTION</h1>
    <h3 class="mt-5 mb-5">PROVIDE COMPREHENSIVE AI SOLUTIONS</h3>
    <div class="solu_ban" style="width: 100%;padding: 80px 0;">
      <div class="container col-md-9 pt-5 pb-5">
        <div class="row solution_item1">
          <div class="col-md-8 text-left mb-5 solu_item1">
            <div class="col-md-8">
              <p style="color: #ffffff;">Case introduction</p>
              <p style="color: #ffffff;margin-bottom: 50px;line-height: 30px;">The Office Assistant is integrated into the DingTalk platform,offering <span style="color: rgb(202, 202, 105);">intelligent task management, scheduling, and meeting reminders. Utilizing Al technology to automate daily offce tasks, </span>the system enhances work effciency and collaboration. By reducing manual tasks and optimizing schedules, this project significantly boosts employee productivity and minimizes losses due to missed meetings or delayed tasks. Statistics show that since the project's launch, employee work efficiency has increased by 30.33%, and meeting attendance rates have improved by 25.67%.</p>
            </div>
          </div>
          <div class="col-md-8 text-left mb-5 solu_item2" style="display: none;">
            <div class="col-md-8">
              <p style="color: #ffffff;">Case introduction</p>
              <p style="color: #ffffff;margin-bottom: 50px;line-height: 30px;">The Intelligent Fitness provides personalized fitness advice and plans based on user health data. By using Al technology to analyze users' physical conditions and exercise habits, it recommends the most suitable fitness programs, helping users set and achieve their fitness goals. This has signifcantly improved fitness outcomes, with user satisfaction increasing by 40.13% and the number of platform subscribers growing by 20.68%.</p>
            </div>
          </div>
          <div class="col-md-8 text-left mb-5 solu_item3" style="display: none;">
            <div class="col-md-8">
              <p style="color: #ffffff;">Case introduction</p>
              <p style="color: #ffffff;margin-bottom: 50px;line-height: 30px;">The Intelligent Fitness provides personalized fitness advice and plans based on user health data. By using Al technology to analyze users' physical conditions and exercise habits, it recommends the most suitable fitness programs, helping users set and achieve their fitness goals. This has signifcantly improved fitness outcomes, with user satisfaction increasing by 40.13% and the number of platform subscribers growing by 20.68%.</p>
            </div>
          </div>
          <div class="col-md-8 text-left mb-5 solu_item4" style="display: none;">
            <div class="col-md-8">
              <p style="color: #ffffff;">Case introduction</p>
              <p style="color: #ffffff;margin-bottom: 50px;line-height: 30px;">The GTorque Game Guide Assistant uses image recognition and computer vision technology to provide users with game guides and tips. The system can identify key scenes and tasks in games, helping players better understand and navigate the game, thereby enhancing their gaming experience. By improving user engagement and satisfaction, this project has signifcantly increased the company's competitiveness in the gaming market.</p>
            </div>
          </div>
          <div class="col-md-8 text-left mb-5 solu_item5" style="display: none;">
            <div class="col-md-8">
              <p style="color: #ffffff;">Case introduction</p>
              <p style="color: #ffffff;margin-bottom: 50px;">The GTorque Game Guide Assistant uses image recognition and computer vision technology to provide users with game guides and tips. The system can identify key scenes and tasks in games, helping players better understand and navigate the game, thereby enhancing their gaming experience. By improving user engagement and satisfaction, this project has significantly increased the company's competitiveness in the gaming market.</p>
              <a  class="mb-4 mr-3" style="display: inline-block;background-color: #8894b7;color: #fff;padding: 5px 20px;border-radius: 10px;">Image recognitiion</a>
              <a  class="mb-4 mr-3" style="display: inline-block;background-color: #8894b7;color: #fff;padding: 5px 20px;border-radius: 10px;">Computer vision</a>
              <a  class="mb-4" style="display: inline-block;background-color: #8894b7;color: #fff;padding: 5px 20px;border-radius: 10px;">Game Guide guidance</a>
            </div>
          </div>
          <div class="col-md-8 text-left mb-5 solu_item6" style="display: none;">
            <div class="col-md-8">
              <p style="color: #ffffff;">Case introduction</p>
              <p style="color: #ffffff;margin-bottom: 50px;line-height: 30px;">The GTorque Game Guide Assistant uses image recognition and computer vision technology to provide users with game guides and tips. The system can identify key scenes and tasks ingames, helping players better understand and navigate the game, thereby enhancing their gaming experience. By improving user engagement and satisfaction, this project has signifcantly increased the company's competitiveness in the gaming market.</p>
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

    solu_btn1.onclick = function() {
      document.querySelector('.solu_item1').style.display = 'flex';
      document.querySelector('.solu_item2').style.display = 'none';
      document.querySelector('.solu_item3').style.display = 'none';
      document.querySelector('.solu_item4').style.display = 'none';
      document.querySelector('.solu_item5').style.display = 'none';
      document.querySelector('.solu_item6').style.display = 'none';
      document.querySelector('.solu_ban').style.backgroundImage = 'url(src/images/solu_ban1.png)';
    }
    solu_btn2.onclick = function() {
      document.querySelector('.solu_item1').style.display = 'none';
      document.querySelector('.solu_item2').style.display = 'flex';
      document.querySelector('.solu_item3').style.display = 'none';
      document.querySelector('.solu_item4').style.display = 'none';
      document.querySelector('.solu_item5').style.display = 'none';
      document.querySelector('.solu_item6').style.display = 'none';
      document.querySelector('.solu_ban').style.backgroundImage = 'url(src/images/solu_ban2.png)';
    }
    solu_btn3.onclick = function() {
      document.querySelector('.solu_item1').style.display = 'none';
      document.querySelector('.solu_item2').style.display = 'none';
      document.querySelector('.solu_item3').style.display = 'flex';
      document.querySelector('.solu_item4').style.display = 'none';
      document.querySelector('.solu_item5').style.display = 'none';
      document.querySelector('.solu_item6').style.display = 'none';
      document.querySelector('.solu_ban').style.backgroundImage = 'url(src/images/solu_ban3.png)';
    }
    solu_btn4.onclick = function() {
      document.querySelector('.solu_item1').style.display = 'none';
      document.querySelector('.solu_item2').style.display = 'none';
      document.querySelector('.solu_item3').style.display = 'none';
      document.querySelector('.solu_item4').style.display = 'flex';
      document.querySelector('.solu_item5').style.display = 'none';
      document.querySelector('.solu_item6').style.display = 'none';
      document.querySelector('.solu_ban').style.backgroundImage = 'url(src/images/solu_ban4.png)';
    }
    solu_btn5.onclick = function() {
      document.querySelector('.solu_item1').style.display = 'none';
      document.querySelector('.solu_item2').style.display = 'none';
      document.querySelector('.solu_item3').style.display = 'none';
      document.querySelector('.solu_item4').style.display = 'none';
      document.querySelector('.solu_item5').style.display = 'flex';
      document.querySelector('.solu_item6').style.display = 'none';
      document.querySelector('.solu_ban').style.backgroundImage = 'url(src/images/solu_ban5.png)';
    }
    solu_btn6.onclick = function() {
      document.querySelector('.solu_item1').style.display = 'none';
      document.querySelector('.solu_item2').style.display = 'none';
      document.querySelector('.solu_item3').style.display = 'none';
      document.querySelector('.solu_item4').style.display = 'none';
      document.querySelector('.solu_item5').style.display = 'none';
      document.querySelector('.solu_item6').style.display = 'flex';
      document.querySelector('.solu_ban').style.backgroundImage = 'url(src/images/solu_ban6.png)';
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
  background-image: url(../images/solu_ban1.png);
  background-size: 100% 100%;
}

.col-md-8 p {
  font-size:20px;
  line-height: 1.4;
}
</style> 