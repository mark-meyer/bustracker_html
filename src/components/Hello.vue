<template>
<div>
<p>
  <h3>How this works:</h3>
  <div v-html="message"></div>
</p>
</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      message: `<p><b>Get bus ETAs:</b><br />Enter a bus stop number into the field above to see when the next bus arrives. </p>
                <p><b>Don't know the bus stop number?</b><br />Enter the closest street address or cross streets and get up to 5
                    closest stops within a mile. Then enter the bus stop number.</p>
                <p>Also! You can text a bus stop number or intersection to <br /><b><a href="sms:907-312-2060">907-312-2060</a></b></p>
                `
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
