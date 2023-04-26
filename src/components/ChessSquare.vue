<script lang="ts">
import State from './State';

export default {
    data() {
        return {
            clicked: false,
            State
        }
    },
    props: {
        dark: { type: Boolean, required: true },
        rank: { type: Number, required: true },
        file: { type: String, required: true }
    },
    methods: {
        onClicked() {
            if (!this.clicked) {
                this.State.clickedSquares.push('' + this.file + this.rank);
                this.clicked = true;
            }
        }
    }
}
</script>


<template>
    <div class="square" :class="{ dark, light: !dark, clicked }"
    @click="onClicked()"
    >
        <span class="file-label">{{ rank == 1 ? file:'' }}</span>
        <span class="rank-label">{{ file == 'a' ? rank:'' }}</span>
    </div>
</template>

<style scoped>
.square {
    flex-grow: 1;
    text-align: center;
}
.square.light {
    background-color: bisque;
    color: black;
}
.square.light:hover {
    background-color: white;
}
.square.dark {
    background-color: black;
    color: bisque;
}
.square.dark:hover {
    background-color: white;
}
.square.clicked.light {
    background-color:aquamarine;
}
.square.clicked.dark {
    background-color:blue;
}
.square .file-label {
    position: absolute;
    bottom: 0;
    right: 5px;
}
.square .rank-label {
    position: absolute;
    left: 5px;
    top: 0;
}
</style>