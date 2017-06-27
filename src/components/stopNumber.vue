<template>
    <div>
        <template v-if="routeData">
        <div id="routeInformation">
            <div id="stop">
                <h2 id="stop-number"> stop<br> {{routeData.stopId}}</h2>
                <h3 id="stop-name">{{routeData.stop}}</h3>
            </div>
            <ul>
                <li v-for="stop in routeData.stops" :key="stop.routeStop">
                    <div>{{stop.number}}</div>
                    <div>{{stop.name}} {{stop.times[0]}}</div>
                </li>
            </ul>
        </div>
        </template>
        <template v-else>
            {{data.message}}
        </template>
    </div>
</template>

<script>
    export default {
        name: "stopNumber",
        props: ['data'],
        computed:{
            routeData: function(){
                return this.data.data 
            }
        }
    }
</script>
<style scoped>


</style>