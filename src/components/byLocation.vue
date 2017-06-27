<template>
    <div>
        <div v-show="!(lat && lon)">
            <h4>Sorry, I couldn't determine your location.</h4>
            <p>Some possible causes:</p>

            <p> Your security settings are preventing yourdevice from sending its location.</p>
            <p>You are using a desktop computer or device that can't determine your location.</p>
            
        </div>
        <findAddress :data="apiData"></findAddress>
    </div>
</template>

<script>
    import FindAddress from '@/components/FindAddress.vue'
    /* POST to this with {latlon: {lat: lon:}} */
    var API_URL = "https://i7oo910i54.execute-api.us-east-1.amazonaws.com/prod/stops_near_location"


    export default {
        name: "byLocation",
        data (){
            return {
                apiData: {}
            }
        },
        methods: {
            fetchData: function(){ 
                this.$http.post(API_URL, {"latlon":{"lat": this.lat, "lon": this.lon}})
                .then((response) => {
                    this.apiData = response.body
                    this.$emit("dataLoaded")
                })
            }
        },
        components: {
            'findAddress': FindAddress
        },
        watch: {
            // call again the method if the route changes
            'lat': 'fetchData',
            'lon': 'fetchData'
        },
        created: function() {
            this.fetchData()
        },
        props: ['lat', 'lon']

    }
</script>
