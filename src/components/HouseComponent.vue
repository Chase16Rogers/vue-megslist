<template>
  <div class="col-4">
    <router-link :to="{name: 'HouseDetails', params: {id: house._id}}">
      <div class="card">
        <img class="card-img-top img-fluid" :src="house.imgUrl" alt="|``| o|```|">
        <div class="card-body">
          <h5>{{ house.bedrooms }} bed | {{ house.bathrooms }} bath</h5>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HouseComponent',
  props: {
    house: {
      type: Object,
      required: true
    }
  },
  setup(props) {

  }
}
</script>
<style scoped>
  /* img{
    max-height: 10em;
    max-width: 10em;
  } */
</style>
