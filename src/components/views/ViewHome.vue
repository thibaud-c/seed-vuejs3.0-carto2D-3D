<template>
  <p class="title"> {{ hellomessage }} </p>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
      hellomessage:"Hello World !!"
    }
  }
}
</script>