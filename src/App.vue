<template>
<div id="app">
  <div class="bdy">
    <div class="page">
      <div id="menu">
        <div id="brand">
          <router-link to="/">
            <img src="./assets/film.png">
          </router-link>
        </div>
        <div class="company-name">
        <h1>See A Film</h1>
        </div>
          <router-link to="/">
            <div class="menu-item">
              <p>Movies</p>
            </div>
          </router-link>
          <router-link to="/theatres">
            <div class="menu-item">
              <p>Theatres</p>
            </div>
          </router-link>
      </div>
      <router-view />
    </div>
    <footer><p>Code for this project can be found <a href="https://github.com/bwinte19/theatre-site" target="_blank">here</a></p></footer>
  </div>
</div>

</template>

<style>
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  margin: 0px;
}

#menu {
  display: flex;
  background-color: #FFE900;
  padding: 20px;
  margin-bottom: 50px;
}

#brand img {
  height: 50px;
  margin-right: 20px;
}

.company-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: auto;
}

.menu-item {
  display: flex;
  padding: 15px 20px;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
}

.menu-item:hover {
  background-color: rgb(155, 154, 154);
  color: white;
}

.menu-item p {
  margin: 0px;
}

a {
  text-decoration: none;
  color: blue;
}

html, body {
  height: 100%;
}

.bdy {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}
.page {
  flex: 1 0 auto;
}

footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  margin-top: 50px;
  height: 100px;
  flex-shrink: 0;
  background-color: #FFE900;
}
</style>
