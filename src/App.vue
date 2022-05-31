<template>
  <div id="app">
   <!-- <img src="./assets/logo.png">-->
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo"><img alt="" id="logo" src="./assets/logo.png"></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>

          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view/>

    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#logo{
  width: 50px;
  margin: 5px;
}
</style>
