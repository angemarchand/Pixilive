<template>
<div >
  <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div class="container-fluid">
          <!-- <a class="navbar-brand" href="#">OUTING SPORTS</a> -->
          <router-link class="navbar-brand" to="/"> PIXILIVE </router-link> 
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                <router-link class="nav-link active" to="/"> HOME </router-link> 
              </li>
              <li class="nav-item">
                <!-- <a class="nav-link" href="#">Features</a> -->
                <router-link class="nav-link" to="/profile"> Profil </router-link> 
              </li>
              <li class="nav-item">
                <!-- <a class="nav-link" href="#">Pricing</a> -->
                <router-link class="nav-link" to="/register"> PRODUIT </router-link> 
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><router-link class="dropdown-item" to="/register"> Inscription </router-link></li>
                  <li><router-link class="dropdown-item" to="/login"> Connexion </router-link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </div>
  <router-view/>
  <div class="footer mt-5 p-5">
    <p class="text-white">&copy; 2021 Pixilive tous droits reservés</p>
  </div>
</div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(200, 222, 223);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #4a7db1;
}
.footer{
  background-color: rgb(181, 193, 194);
  margin-top: 20% !important;
}
</style>

