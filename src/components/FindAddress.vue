<template>
    <div>
        
        <template v-if="stopData && stopData.stops.length">
            <div id="stop-list">
                <h4>Enter one of these stop numbers for details:</h4>
                <ul>
                    <li v-for="route in stopData.stops" :key="route.stopData">
                        <div><router-link :to="{ name: 'find', params: { query: route.stopId }}">{{route.stopId}}</router-link></div>
                        <div>
                            {{route.route}} ({{route.distance.toFixed(1)}} miles)
                            <a v-bind:href="'https://maps.google.com/?q='+route.ll">map</a>

                        </div>
                    </li>
                </ul>
            {{stopData.stopId}}
            </div>
        </template>
        <template v-else>
            {{data.message}}
        </template>
        
    </div>
</template>

<script>
    export default {
        name: "findAddress",
        props: ['data'],
        methods: {
            
        },
        computed:{
            stopData: function(){
                return this.data.data
            }
        }
    }
</script>

<style scoped>
    a {text-decoration: none}  
</style>
