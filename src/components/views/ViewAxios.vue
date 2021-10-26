<template>
  <div id="trump-card" class="card">
    <div class="card-content">
      <p class="title">
        “{{trumpQuote}}”
      </p>
      <p class="subtitle">
        Tronald Dump
      </p>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <span>
          Check more on <a target="_blank" rel="noopener noreferrer" :href="tronalddumpURL">@Tronald Dump</a>
        </span>
      </p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'dump-fact',
  data(){
    return{
      tronalddumpURL:"https://www.tronalddump.io/",
      apiURL:"https://api.tronalddump.io/search/quote?query=",
      query:"apologize",
      trumpQuote:""
    }
  },
  methods: {
    /**
     * [Get] dumb quote from Donald Trump
     * 
     * @param {String} url url of the api
     * @param {String} query query send to the api (word)
     * @returns {Promise<String>} quote from the API || default string if quote not found || default string if error
     * @catch error from the request 
     */
    async getTrumpTweet(url,query){

      const response = await axios.get(url+query)

      // response status handling: success & error
      if (response.status == 200 && response.data.count>0){
        // Get & return first quote
        return response.data._embedded.quotes[0].value;
      }

      if (response.status == 404){
        throw "Didn't find any answers";
      }
      else {
        throw "Ouch an unknown error occurred";
      } 
    },    
  },
  async mounted() {
    try {
      this.trumpQuote = await this.getTrumpTweet(this.apiURL,this.query)
    } catch(e) {
      console.error(e);
    }
  }
}
</script>

<style scoped>
#trump-card{
  width: 50%;
  margin: auto;
}
</style>
