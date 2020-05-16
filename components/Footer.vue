<template>
  <div class="footer">
    <b-container>
      <ul>
        <li>
          {{this.$store.state.siteInfo.sitename}} {{new Date().getFullYear()}} -
          <span class="text-muted">{{this.$store.state.siteInfo.sitedescription}}</span>
        </li>
        <li>
          <a href="https://se.linkedin.com/">
            <i class="fa fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/">
            <i class="fa fa-facebook"></i> Facebook
          </a>
        </li>
        <li>
          <a href="/admin">
            <i class="fas fa-align-left"></i> Admin
          </a>
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
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
  margin: 10px;
  margin-bottom: 15px;
}

.footer ul li a {
  white-space: nowrap;
}
</style>
