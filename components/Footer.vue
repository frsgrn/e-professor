<template>
    <div class="footer">
      <b-container>
        <ul>
          <li>{{this.$store.state.siteInfo.sitename}} {{new Date().getFullYear()}}</li>
          <li><a href="/admin">admin</a></li>
          <li><a href="https://se.linkedin.com/">LinkedIn</a></li>
          <li><a href="https://www.facebook.com/">Facebook</a></li>
        </ul>
      </b-container>
    </div>
</template>

<script>

  export default {
    data() {
      return {
      };
    },
  };

</script>

<style>

.footer {
  background-color: #eee;
  padding: 30px;
}

.footer a {
  border-bottom: 2px solid black;
}

.footer ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

.footer ul li {
  display: inline;
  margin: 10px;
}

</style>
