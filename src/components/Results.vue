<template>
    <div id="output">
        <component :is="intent" :data="apiData"></component>
    </div>
</template>

<script>
    import FindAddress from "./FindAddress.vue"
    import stopNumber from "./stopNumber.vue"
    import Message from "./Message.vue"

    var API_URL = "https://w6c3yoocsl.execute-api.us-east-1.amazonaws.com/Prod/find/"
    // TODO: set local API when running dev
    //var API_URL = "http://localhost:8000/find/"
    export default {
        name: "results",
        data () {
            return {
                apiData:{},
            }
        },
        methods:{
             queryApi: function(q){
                this.$emit("ajaxStarted")
                this.$http.post(API_URL, 'Body='+q)
                .then((response) => {
                    let data = response.body
                    console.log("data: ", data)
                    this.apiData = {
                        message: data.message,
                        data: (data.sessionAttributes && data.sessionAttributes.data) && data.sessionAttributes.data,
                        intentName: data.intentName
                    }
                    console.log("api data", this.apiData)
                    this.$emit("dataLoaded")
                })
            },
        },
        components: {
            'findAddress': FindAddress ,
            'stopNumber' : stopNumber,
            'message': Message
        },
        computed:{
            intent: function() {
                // Map the intents returned from lex to components
                // Lex's intents can be quite narrow so different intent names
                // will often map to the same component
                var intentMap = {
                    findAddress: "findAddress",
                    RawAddress: "findAddress",
                    Intersection: "findAddress",
                    findStreets: "findAddress",
                    stopNumber: "stopNumber",
                    When_is_the_bus_at_stop: "stopNumber"
                }
              return (this.apiData && intentMap[this.apiData.intentName]) || "message"
            },
        },
        watch: {
            'query': function(val){
                if (this.query) {
                this.queryApi(this.query)
                }
            }
        },
        created: function(){
            if (this.query) {
                this.queryApi(this.query)
            }
        },
        props: ['query']
    }
</script>

<style>

</style>