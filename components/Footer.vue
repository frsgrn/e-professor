<template>
    <div class="footer">
      <b-container>
        <ul>
          <li>{{this.$store.state.siteInfo.sitename}} {{new Date().getFullYear()}}</li>
          <li><a href="/admin">admin</a></li>
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
  text-align: center;
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
  margin: 15px;
}

</style>
