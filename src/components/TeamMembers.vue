<template>
  <div id="team">
    <div class="container text-center pt-5 mt-3">
      <h1 class="font-weight-bold">TEAM MEMBERS</h1>
      <p style="color: #79808A;">Our team members come from various prestigious universities and have rich project
        experience</p>
      <div class="carousel-container position-relative" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <!-- 左箭头 -->
        <div class="arrow left-arrow" @click="prevPage" @mouseenter="leftArrowHovered = true"
          @mouseleave="leftArrowHovered = false">
          <img :src="leftArrowHovered ? leftArrowLight : leftArrowGray" alt="Previous">
        </div>

        <div class="cards-wrapper">
          <div class="cards-slider" :style="sliderStyle">
            <CharacterCard v-for="member in teamMembers" :key="member.name" :pic="member.pic" :name="member.name"
              :introduction="member.introduction" :description="member.description"
              @toggle-description="handleToggleDescription" :ref="el => { if (el) cardRefs[member.name] = el }" />
          </div>
        </div>

        <!-- 右箭头 -->
        <div class="arrow right-arrow" @click="nextPage" @mouseenter="rightArrowHovered = true"
          @mouseleave="rightArrowHovered = false">
          <img :src="rightArrowHovered ? rightArrowLight : rightArrowGray" alt="Next">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CharacterCard from './CharacterCard.vue'
import wanghongqing from '../images/people/wanghongqing@2x.png'
import liantaoshi from '../images/people/liantaoshi@2x.png'
import junkitchaw from '../images/people/junkitchaw@2x.png'
import huangnannan from '../images/people/huangnannan@2x.png'
import DrMohammad from '../images/people/Dr.mohammad@2x.png'
import zhangweiyang from '../images/people/zhangweiyang@2x.png'

import leftArrowGray from '../images/background/left_arrow.png'
import rightArrowGray from '../images/background/right_arrow.png'
import leftArrowLight from '../images/background/left_arrow_light.png'
import rightArrowLight from '../images/background/right_arrow_light.png'

export default {
  name: 'TeamMembers',
  components: {
    CharacterCard
  },
  data() {
    return {
      cardRefs: {},
      currentIndex: 0,
      itemsPerPage: window.innerWidth < 768 ? 1 : 3,
      leftArrowHovered: false,
      rightArrowHovered: false,
      leftArrowGray,
      rightArrowGray,
      leftArrowLight,
      rightArrowLight,
      teamMembers: [
        // {
        //   pic: wanghongqing,
        //   name: 'Wang Hongqing',
        //   introduction: 'AI Large Language Model Technical Expert\nAlgorithm Engineer (Alibaba Group and Geely Group)\nEnterprise AI Solution Provider',
        //   description: 'JUN KIT CHAW(Chief AI Technology Consultant)\nWong Hongqing (Artificial Intelligence, Large Language Model Technical Expert)\nResearch Fellow at the Institute of Visual Informatics, Universiti Kebangsaan Malaysia.\nAs an HRDF Corp accredited trainer, he teaches courses on Python, Power BI, and Tableau. His main research interests include computer vision and deep learning. With extensive corporate collaboration and consulting experiences, he actively partners with industry leaders like Advantest and HILTI Asia IT Services, contributing to projects on manufacturing process optimization and computer vision applications.'
        // },
        {
          pic: junkitchaw,
          name: 'JUN KIT CHAW',
          introduction: 'Chief AI Technology Consultant\nResearch Fellow at the Institute of Visual Informatics, Universiti Kebangsaan Malaysia\nHRD Corp Accredited Trainer',
          description: 'JUN KIT CHAW(Chief AI Technology Consultant)\nWang Hongqing (Artificial Intelligence Large Language Model Technical Expert)\nResearch Fellow at the Institute of Visual Informatics, Universiti Kebangsaan Malaysia.\nAs an HRD Corp accredited trainer, he teaches courses on Python, Power BI, and Tableau. His main research interests include computer vision and deep learning. With extensive corporate collaboration and consulting experience, he actively partners with industry leaders like Advantech and HILTI Asia IT Services, contributing to projects on manufacturing process optimization and computer vision applications.'
        },
        {
          pic: liantaoshi,
          name: 'Lian Taoshi',
          introduction: 'Chief AI Vision Technology Researcher\n High-Level Academic Researcher\nComputer Vision and Engineering Practice Advocate',
          description: 'Graduated from Xiamen University (B.S.) and Liaoning University of Science and Technology (M.S.),\nLiantao possesses profound expertise in artificial intelligence vision.\nSpecializing in multimodal large models, embedded systems, and computer vision semantic segmentation,\nhe has published over 20 high-level academic papers.\nCommitted to applying cutting-edge technologies to engineering practice,\nhe drives innovation and development within the industry.'
        },
        {
          pic: huangnannan,
          name: 'Huang Nannan',
          introduction: 'International Operations Director\nExpert in Enterprise Process and Resource Management\nComputer Vision and Engineering Practice Advocate',
          description: 'With five years of professional investment experience,\nhe possesses extensive management expertise in enterprise process standardization and resource integration.\nSkilled at identifying and seizing strategic opportunities in the international market.\nCommitted to promoting the company\'s influence on the international stage and leading industry innovation and development.'
        },
        {
          pic: DrMohammad,
          name: 'Dr.mohammad nazir bin ahmad',
          introduction: 'Chief Technology Consultant\nLeader of High-Impact Funded Research Projects\nBridger of Academia, Business, and Industry Innovation',
          description: 'Dr. mohammad nazir bin ahmad (Chief AI Vision Technology Researcher)\nDr. Nazir is an Associate Professor at Universiti Kebangsaan Malaysia (UKM)\nwith extensive experience in ontology and knowledge management.\nHe has led numerous projects supported by over MYR 3 million in research grants,\nfocusing on applying innovative solutions to real-world problems.\nWith over 150 publications,\nhe actively bridges academia, business, and industry to drive innovation and contribute significantly to the community.'
        },
        {
          pic: zhangweiyang,
          name: 'Zhang Weiyang',
          introduction: 'International Partner and Technical Supply Chain Director\nSuccessfully led multiple AI technology projects with a focus on implementation and efficiency.\nSuccessfully led multiple AI technology projects with a focus on implementation and efficiency.',
          description: 'Zhang Weiyang possesses extensive expertise in artificial intelligence,\nwith years of experience leading AI projects.\nHe specializes in deep learning and natural language processing,\ndelivering innovative solutions and technical support to his teams.\nWith a strong command of supply chain management,\nhe drives global operational excellence and fosters technological innovation in enterprise solutions.'
        },
      ],
      wheelTimeout: null,
      isMouseInCarousel: false
    }
  },
  computed: {
    displayedMembers() {
      return this.teamMembers.slice(this.currentIndex, this.currentIndex + this.itemsPerPage)
    },
    canGoNext() {
      return this.currentIndex + this.itemsPerPage < this.teamMembers.length
    },
    canGoPrev() {
      return this.currentIndex > 0
    },
    sliderStyle() {
      const cardWidth = window.innerWidth < 768 ? 100 : (100/5)
      return {
        transform: `translateX(${-this.currentIndex * cardWidth}%)`
      }
    }
  },
  methods: {
    handleToggleDescription(memberName) {
      Object.entries(this.cardRefs).forEach(([name, card]) => {
        if (name !== memberName) {
          card.hideDescription()
        }
      })
    },
    prevPage() {
      if (this.canGoPrev) {
        this.currentIndex--
      }
    },
    nextPage() {
      if (this.canGoNext) {
        this.currentIndex++
      }
    },
    handleWheel(event) {
      if (this.isMouseInCarousel) {
        event.preventDefault()
        
        if (this.wheelTimeout) {
          return
        }
        
        this.wheelTimeout = setTimeout(() => {
          this.wheelTimeout = null
        }, 300)
        
        if (event.deltaY > 0 && this.canGoNext) {
          this.nextPage()
        }
        else if (event.deltaY < 0 && this.canGoPrev) {
          this.prevPage()
        }
      }
    },
    handleMouseEnter() {
      this.isMouseInCarousel = true
    },
    handleMouseLeave() {
      this.isMouseInCarousel = false
    },
    handleResize() {
      this.itemsPerPage = window.innerWidth < 768 ? 1 : 3
      // Reset currentIndex if it's out of bounds after resize
      if (this.currentIndex + this.itemsPerPage > this.teamMembers.length) {
        this.currentIndex = Math.max(0, this.teamMembers.length - this.itemsPerPage)
      }
    }
  },
  mounted() {
    window.addEventListener('wheel', this.handleWheel, { passive: false })
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  beforeUnmount() {
    this.cardRefs = {}
    window.removeEventListener('wheel', this.handleWheel)
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style scoped>
.carousel-container {
  position: relative;
  padding: 0 100px;
  overflow: hidden;
}

@media (max-width: 768px) {
  .carousel-container {
    padding: 0 50px;
  }
}

.cards-wrapper {
  overflow: hidden;
  margin: 0 -15px;
}

.cards-slider {
  display: flex;
  transition: transform 0.5s ease;
  width: 167%;
}

@media (max-width: 768px) {
  .cards-slider {
    width: 100%;
  }
}

/* 调整卡片样式 */
:deep(.col-md-4) {
  flex: 0 0 calc(100% / 5);
  max-width: calc(100% / 5);
  padding: 0 15px;
  transition: all 0.5s ease;
}

@media (max-width: 768px) {
  :deep(.col-md-4) {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 10px;
  z-index: 2;
}

.left-arrow {
  left: 0;
}

.right-arrow {
  right: 0;
}

.arrow img {
  width: 80px;
  height: 80px;
  transition: transform 0.3s ease;
}

.arrow:hover img {
  transform: scale(1.1);
}
</style>