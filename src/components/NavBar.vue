<template>
  <nav class="navbar navbar-expand-sm navbar-dark fixed-top" style="background-color: #3860D2;">
    <a class="navbar-brand ml-4 mr-5" href="#">
      <img src="../images/logo.png" alt="KOALA SYNC TECH" height="40">
    </a>
    <div class="btn-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navtop">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse ml-3" id="navtop">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#home" @click.prevent="scrollToSection('home')">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#advantages" @click.prevent="scrollToSection('advantages')">ADVANTAGES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#business" @click.prevent="scrollToSection('business')">BUSINESS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#team" @click.prevent="scrollToSection('team')">TEAM MEMBERS</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
      scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        // 获取导航栏高度
        const navHeight = document.querySelector('.navbar').offsetHeight;
        // 获取元素距离顶部的距离
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        // 计算滚动位置（减去导航栏高度和额外的偏移量）
          const offsetPosition = elementPosition - navHeight -20;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  padding: 0.5rem 1rem;
}

.nav-link {
  color: white !important;
  padding: 1rem 1.5rem !important;
  transition: color 0.3s ease;
  font-size: 20px !important;
}

.nav-link:hover {
  color: #cccccc !important;
}

.navbar-nav {
  margin-left: 2rem;
}

.nav-item {
  display: flex;
  align-items: center;
}

.btn {
  margin-right: 2rem;
}
</style> 