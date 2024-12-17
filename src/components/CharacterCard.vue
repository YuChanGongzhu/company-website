<template>
    <div class="col-md-4">
        <div class="card-container" :class="{ 'show-overlay': showDescription }">
            <div class="image-container" :class="{ 'hover': isHovered }" @mouseenter="isHovered = true"
                @mouseleave="isHovered = false">
                <div class="image-wrapper">
                    <img class="background-image" :src="currentBg" alt="background">
                    <img class="person-image" :src="pic" :alt="name">
                </div>
            </div>
            <div class="content">
                <h3 class="name">{{ name }}</h3>
                <p class="title">{{ introduction }}</p>
                <button class="more-btn" @click.stop="toggleDescription">more</button>
            </div>
            <div v-if="showDescription" class="description-overlay" @click.stop>
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import grayBg from '../images/background/gray.png'
import blueBg from '../images/background/blue.png'

export default {
    name: 'CharacterCard',
    props: {
        pic: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        introduction: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isHovered: false,
            showDescription: false,
            grayBg,
            blueBg
        }
    },
    computed: {
        currentBg() {
            return this.isHovered ? this.blueBg : this.grayBg
        }
    },
    methods: {
        toggleDescription() {
            this.$emit('toggle-description', this.name)
            this.showDescription = !this.showDescription
        },
        hideDescription() {
            this.showDescription = false
        }
    },
    mounted() {
        document.addEventListener('click', this.hideDescription)
    },
    beforeUnmount() {
        document.removeEventListener('click', this.hideDescription)
    }
}
</script>

<style scoped>
.card-container {
    background: #FFFFFF;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    height: 600px;
    width: 280px;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 5px;
}

.image-container {
    position: relative;
    flex: 1;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-wrapper {
    position: relative;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    overflow: hidden;
}

.background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s ease;
}

.person-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
}

.content {
    flex: 1;
    padding: 10px 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    position: relative;
}

.name {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #333;
}

.title {
    font-size: 15px;
    color: #666;
    margin: 10px 0;
    line-height: 1.4;
    flex-grow: 1;
    margin-bottom: 40px;
    white-space: pre-line;
}

.more-btn {
    background: #4169E1;
    color: white;
    border: none;
    padding: 15px 12px;
    border-radius: 0;
    cursor: pointer;
    transition: background-color 0.3s ease;
    position: absolute;
    bottom: 5px;
    right: 2px;
}

.more-btn:hover {
    background: #3157D5;
}

.image-container:hover .background-image {
    transition: all 0.3s ease;
}

.description-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(65, 105, 225, 0.9);
    color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    z-index: 10;
    animation: fadeIn 0.3s ease;
}

.description-overlay p {
    font-size: 16px;
    line-height: 1.4;
    margin: 0;
    white-space: pre-line;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>