<template>
  <!-- Bulma: menu tabs -->
  <div id="trump-card" class="card">
    <div class="card-content">
      <p class="title">
        “{{trumpquote}}”
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
  <!-- end Bulma: menu tabs -->
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      tronalddumpURL:"https://www.tronalddump.io/",
      apiURL:"https://api.tronalddump.io/search/quote?query=",
      query:"apologize",
      trumpquote:""
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
    async getTrumptweet(url,query){
      let response = await axios.get(url+query)
      .catch(error => {
        console.error(error);
        return 0
      })
      //request error
      if(response == 0){
        return "Ouch an error occurred"
      }
      // don't find an answer
      if(response.data.count == 0){
        return "Didn't found any answers"
      }
      // Get first quote
      return response.data._embedded.quotes[0].value;
    }
  },
  async mounted() {
    this.trumpquote = await this.getTrumptweet(this.apiURL,this.query)
  },
}
</script>

<style scoped>
#trump-card{
  width: 50%;
  margin: auto;
}
</style>
