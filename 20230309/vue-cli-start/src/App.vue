<template>
  <div id="app">
    <Header> </Header>
    <Test></Test>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
  </div>
</template>
<script>
//컴포넌트를 사용할때
// 1.가져와야한다(import from 가져온다)
// 2. 가져온 컴포넌트를 사용할수 있게 components:{}에 등록해야한다
// 3. template에서 활용
import Header from "./components/Header.vue";
import Test from "./components/Test.vue";
export default {
  components: {
    //header:header
    Header,
    Test,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
