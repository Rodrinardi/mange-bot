<script setup lang="ts">
import { Part } from '@/models/Parts';
import { BASE_URL } from '@/services/services.config';
import { type Ref, ref } from 'vue';

type PropType = {
    parts: Array<Part>;
    position: "left"|"right"|"center"|"top"|"bottom"
}

const props = defineProps<PropType>();

const model = defineModel<Part>();
model.value = new Part();

const selectedIndex = ref(0);

const changePart = (isNext: boolean)=>{

    const newIndex = isNext? selectedIndex.value + 1 : 
                             selectedIndex.value - 1;
    
    //se já estiver na primeira peça, volta para a última
    if(newIndex < 0){
        selectedIndex.value = (props.parts.length - 1);
    }
    //se já estiver na última peça, volta para a primeira
    else if(newIndex > (props.parts.length - 1)){
        selectedIndex.value = 0;
    }
    //não está no limite inferior nem no superior
    else{
        selectedIndex.value = newIndex;
    }
    
    /*if(isNext){
        selectedIndex.value = 
        selectedIndex.value >= (props.parts.length - 1)?
        (props.parts.length - 1) : selectedIndex.value + 1;
    }
    else{
        selectedIndex.value = selectedIndex.value <= 0?
        0 : selectedIndex.value - 1;
    }*/

   //transmite para o pai do componente via v-model qual
   //a peça que está selecionada no momento!
   model.value = props.parts[selectedIndex.value];
}
</script>
<template>
    <div :class="`part ${props.position}`" v-if="props.parts[selectedIndex]">          
        <img :src="BASE_URL + props.parts[selectedIndex]?.src" alt="">
        <button @click="changePart(false)" class="prev-selector"></button>
        <button @click="changePart(true)" class="next-selector"></button>
    </div>
</template>

<style scoped lang="scss">
$part-width: 165px;
$part-height: 165px;

.part{
    position: relative;
    width: $part-width;
    height: $part-height;
    border: 3px solid var(--app-part-border);

    img{
        width: calc($part-width - 1px);
        height: calc($part-height - 1px);
    }
    button{
        position: absolute;
        z-index: 1;
        top: -3px;
        width: 25px;
        height: 171px;
    }

    .next-selector{
        right: -28px;
    }

    .prev-selector{
        left: -28px;
    }
}

.top{
    border-bottom: none;
}

.left{
    border-right: none;
    img{
        transform: rotate(-90deg);
    }

    .next-selector{
        top: auto;
        bottom: -28px;
        left: -3px;
        width: 144px;
        height: 25px;
    }
    .prev-selector{
        top: -28px;
        left: -3px;
        width: 144px;
        height: 25px;
    }
}

.right{
    border-left: none;
    img{
        transform: rotate(90deg);
    }

    .next-selector{
        top: auto;
        bottom: -28px;
        left: 24px;
        width: 144px;
        height: 25px;
    }
    .prev-selector{
        top: -28px;
        left: 24px;
        width: 144px;
        height: 25px;
    }
}

.bottom{
    border-top: none;
}

.center{
    border: none;
    .next-selector,
    .prev-selector{
        opacity: 0.8;
    }
}

.left .prev-selector::after,
.right .prev-selector::after{
    content: "\25B2";
}

.left .next-selector::after,
.right .next-selector::after{
    content: "\25BC";
}

.top .prev-selector::after,
.bottom .prev-selector::after,
.center .prev-selector::after{
    content: "\25C4";
}

.top .next-selector::after,
.bottom .next-selector::after,
.center .next-selector::after{
    content: "\25BA";
}

</style>