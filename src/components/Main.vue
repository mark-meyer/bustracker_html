<template>
  <div>
    <h1 v-fit id="headline">When’s the<br>next bus?</h1>
    <form v-on:submit="sendQuery">
        <input id="inputForm" v-model="searchinput" ref="mainInput" placeholder="bus stop number or address">
        <button type="submit" v-bind:class="{pulse: loading}">
            <span v-show="loading">Loading…</span>
            <span v-show="!loading">Get Routes</span>
        </button>
    </form>
    <button id="location" v-on:click="getLocation()"> 
        <span class="pointer">⊕</span> 
        <span class="location">Find stops near you</span>
    </button>
    
    <div id="content" v-bind:class="{loading: loading}">       
        <router-view v-on:dataLoaded="loading = false" v-on:ajaxStarted="loading = true"></router-view>
    </div>
    <p>
        <router-link :to="{name: 'Hello'}">About this service</router-link>
    </p>

    <div id="footer">
        <div>
            <a href="http://codeforanchorage.org"><img class="logo" src="/static/cfa.png" width="40px" height="40px" ></a>
        </div>
        <div>Code For Anchorage</div>
    </div>
  </div>
</template>

<script>
       export default { 
        name: 'app',
        data () {
            return {
                searchinput:undefined,
                loading: false,
            }
        },
        methods:{
            sendQuery: function(e){
                e.preventDefault()
                if (this.searchinput === this.$route.params.query) return // don't search aagain for current term.
                if (!this.searchinput) return this.$router.push({name: 'empty'})
                this.$router.push({name: "find", params: {query: this.searchinput}})
            },
            getLocation: function() {
                this.loading = true;
                navigator.geolocation.getCurrentPosition(
                    (pos) => { 
                       this.$router.push({
                           name: "bylocation", 
                           params: {lat:pos.coords.latitude, lon: pos.coords.longitude }
                        })
                    },
                    (error) => { 
                        this.loading = false;
                        this.$router.push({name: "emptylocation"})
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 10000,
                        maximumAge: 60000,
                    }
                )
            }
        },
        watch: {
            $route: function(){ 
               this.searchinput = this.$route.params.query
            } 
        },
        mounted: function() {
            this.searchinput = this.$route.params.query // updates input box when deep linking
        }
    
    }
</script>

<style>
.loading {
    opacity: .3;
    transition: opacity .75s;
}
.pulse {
    animation: pulse 3s infinite ease-in-out
}
@keyframes pulse {
    0% {opacity: 0.5; transform:scale(0.99)}
    50% {opacity: 1.0; transform:scale(1)}
    100% {opacity: .5; transform:scale(0.99)}
}

</style>