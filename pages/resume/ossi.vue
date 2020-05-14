<template lang="html">
  <b-container>
    <b-row>
      <b-col md="auto">
        <img src="~/static/profile.jpeg" alt="Ossi Pesämaa" />
      </b-col>
      <b-col>
        <h1>Ossi Pesämaa</h1>
        <h4>Associate professor at Luleå University of Technology in Sweden</h4>
        <b-row class="mt-5">
          <b-col >
            <b-icon-phone></b-icon-phone><span class="contact-data">+46 70 1234567</span>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-icon-envelope></b-icon-envelope><span class="contact-data"><a href="mailto:ossi.pesamaa@e-professor.se">ossi.pesamaa@e-professor.se</a></span>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col>1 of 3</b-col>
      <b-col>2 of 3</b-col>arrow-up
      <b-col>3 of 3</b-col>
    </b-row>
  </b-container>
</template>

<script>

  import { BIconPhone, BIconEnvelope } from 'bootstrap-vue'

  export default {
    components: {
      BIconPhone,
      BIconEnvelope
    },
  }

</script>

<style>

  h4 {
    color: gray;
  }

  .contact-data {
    margin-left: 20px;
  }

</style>
