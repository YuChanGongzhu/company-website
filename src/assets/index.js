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
        var business_item1 = document.querySelector('.business_item1').style.display = 'flex';
        var business_item2 = document.querySelector('.business_item2').style.display = 'none';
        var business_item3 = document.querySelector('.business_item3').style.display = 'none';
    }
    business_btn2.onclick = function() {
        var business_item1 = document.querySelector('.business_item1').style.display = 'none';
        var business_item2 = document.querySelector('.business_item2').style.display = 'flex';
        var business_item3 = document.querySelector('.business_item3').style.display = 'none';
    }
    business_btn3.onclick = function() {
        var business_item1 = document.querySelector('.business_item1').style.display = 'none';
        var business_item2 = document.querySelector('.business_item2').style.display = 'none';
        var business_item3 = document.querySelector('.business_item3').style.display = 'flex';
    }

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
        var solu_item1 = document.querySelector('.solu_item1').style.display = 'flex';
        var solu_item2 = document.querySelector('.solu_item2').style.display = 'none';
        var solu_item3 = document.querySelector('.solu_item3').style.display = 'none';
        var solu_item4 = document.querySelector('.solu_item4').style.display = 'none';
        var solu_item5 = document.querySelector('.solu_item5').style.display = 'none';
        var solu_item6 = document.querySelector('.solu_item6').style.display = 'none';
        var solu_ban = document.querySelector('.solu_ban').style.backgroundImage = 'url(./T13.1-7.22/src/images/solu_ban1.png)';
    }
    solu_btn2.onclick = function() {
        var solu_item1 = document.querySelector('.solu_item1').style.display = 'none';
        var solu_item2 = document.querySelector('.solu_item2').style.display = 'flex';
        var solu_item3 = document.querySelector('.solu_item3').style.display = 'none';
        var solu_item4 = document.querySelector('.solu_item4').style.display = 'none';
        var solu_item5 = document.querySelector('.solu_item5').style.display = 'none';
        var solu_item6 = document.querySelector('.solu_item6').style.display = 'none';
        var solu_ban = document.querySelector('.solu_ban').style.backgroundImage = 'url(./T13.1-7.22/src/images/solu_ban2.png)';
    }
    solu_btn3.onclick = function() {
        var solu_item1 = document.querySelector('.solu_item1').style.display = 'none';
        var solu_item2 = document.querySelector('.solu_item2').style.display = 'none';
        var solu_item3 = document.querySelector('.solu_item3').style.display = 'flex';
        var solu_item4 = document.querySelector('.solu_item4').style.display = 'none';
        var solu_item5 = document.querySelector('.solu_item5').style.display = 'none';
        var solu_item6 = document.querySelector('.solu_item6').style.display = 'none';
        var solu_ban = document.querySelector('.solu_ban').style.backgroundImage = 'url(./T13.1-7.22/src/images/solu_ban3.png)';
    }
    solu_btn4.onclick = function() {
        var solu_item1 = document.querySelector('.solu_item1').style.display = 'none';
        var solu_item2 = document.querySelector('.solu_item2').style.display = 'none';
        var solu_item3 = document.querySelector('.solu_item3').style.display = 'none';
        var solu_item4 = document.querySelector('.solu_item4').style.display = 'flex';
        var solu_item5 = document.querySelector('.solu_item5').style.display = 'none';
        var solu_item6 = document.querySelector('.solu_item6').style.display = 'none';
        var solu_ban = document.querySelector('.solu_ban').style.backgroundImage = 'url(./T13.1-7.22/src/images/solu_ban4.png)';
    }
    solu_btn5.onclick = function() {
        var solu_item1 = document.querySelector('.solu_item1').style.display = 'none';
        var solu_item2 = document.querySelector('.solu_item2').style.display = 'none';
        var solu_item3 = document.querySelector('.solu_item3').style.display = 'none';
        var solu_item4 = document.querySelector('.solu_item4').style.display = 'none';
        var solu_item5 = document.querySelector('.solu_item5').style.display = 'flex';
        var solu_item6 = document.querySelector('.solu_item6').style.display = 'none';
        var solu_ban = document.querySelector('.solu_ban').style.backgroundImage = 'url(./T13.1-7.22/src/images/solu_ban5.png)';
    }
    solu_btn6.onclick = function() {
        var solu_item1 = document.querySelector('.solu_item1').style.display = 'none';
        var solu_item2 = document.querySelector('.solu_item2').style.display = 'none';
        var solu_item3 = document.querySelector('.solu_item3').style.display = 'none';
        var solu_item4 = document.querySelector('.solu_item4').style.display = 'none';
        var solu_item5 = document.querySelector('.solu_item5').style.display = 'none';
        var solu_item6 = document.querySelector('.solu_item6').style.display = 'flex';
        var solu_ban = document.querySelector('.solu_ban').style.backgroundImage = 'url(./T13.1-7.22/src/images/solu_ban6.png)';
    }

    document.addEventListener('DOMContentLoaded', function() {
    var currentIndex = 1;
    var totalItems = 5;

    var leftButton = document.getElementById('left');
    var rightButton = document.getElementById('right');
    var items = document.querySelectorAll('.cust_item1, .cust_item2, .cust_item3, .cust_item4, .cust_item5');
    var currentDisplay = items[currentIndex - 1].classList.add('active');

    leftButton.addEventListener('click', function() {
        if (currentIndex > 1) {
            currentIndex--;
            updateContentAndButtons();
        }
    });

    rightButton.addEventListener('click', function() {
        if (currentIndex < totalItems) {
            currentIndex++;
            updateContentAndButtons();
        }
    });

    function updateContentAndButtons() {
        items.forEach(function(item, index) {
            if (index === currentIndex - 1) {
                item.style.display = 'flex';
                item.classList.add('active');
            } else {
                item.style.display = 'none';
                item.classList.remove('active');
            }
        });

        // 更新按钮样式
        if (currentIndex === 1) {
            leftButton.style.backgroundColor = 'rgb(189, 189, 189)';
            leftButton.disabled = true;
        } else {
            leftButton.style.backgroundColor = 'rgb(56, 96, 210)';
            leftButton.disabled = false;
        }

        if (currentIndex === totalItems) {
            rightButton.style.backgroundColor = 'rgb(189, 189, 189)';
            rightButton.disabled = true;
        } else {
            rightButton.style.backgroundColor = 'rgb(56, 96, 210)'; 
            rightButton.disabled = false;
        }

        // 更新数字显示
        document.querySelector('span span').textContent = currentIndex;
    }

    // 初始调用更新内容和按钮
    updateContentAndButtons();
});