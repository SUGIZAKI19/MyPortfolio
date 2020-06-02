<template>

  <div class="common_inner" >
    <div class="header_set">
        <div class="logo m-4">
          <router-link
            to="/"
            active-class="link--active"
            title="profile"
            exact
            class="nav-link"
          >
            <i><v-fa :icon="['fab', 'twitter']" />  SUGIZAKI</i>
          </router-link>
        </div>
        <div class="header_menu">
            <div class="header_menu_inner">
                <a href="https://twitter.com/SUGIZAKI19" target="_blank">
                    <i class="fa-2x my-4 mx-4"><v-fa :icon="['fab', 'twitter']" /></i>
                </a>
                <a href="https://sugizaki.work/" target="_blank">
                    <i class="fa-2x my-4 mx-4"><v-fa icon="coffee"/></i>
                </a>
            </div>
        </div>
    </div>

    <div>
      <b-navbar toggleable="md" type="light" variant="light">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="mr-auto">
            <b-nav-item>
              <router-link
                to="/"
                active-class="link--active"
                exact
                class="nav-link"
              > <v-fa icon="home"/> HOME
              </router-link>
            </b-nav-item>

            <b-nav-item >
            <router-link
              to="/about"
              active-class="link--active"
              title="profile"
              exact
              class="nav-link"
            ><v-fa icon="user-circle"/> PROFILE
            </router-link>
            </b-nav-item>

            <b-nav-item >
            <router-link
              to="/works"
              active-class="link--active"
              title="Works"
              exact
              class="nav-link"
            ><v-fa icon="laptop-code"/> WORKS</router-link>
            </b-nav-item>

            <b-nav-item >
            <router-link
              to="/contact"
              active-class="link--active"
              exact
              class="nav-link"
            ><v-fa icon="paper-plane"/> CONTACT</router-link>
            </b-nav-item>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>

</template>



<style scoped>

  .link--active{
    font-weight:bold;
    border-bottom:solid 1px;
  }

  .common_inner .header_set{
      min-width:250px;
      margin: 0 auto;
      width:100%;
      min-width:350px;
      background:rgb(29,27,27);
      color:#eee;
      display: flex;
  }

  .logo{
      font-size:30px;
      margin:auto;
  }


  .header_menu {
      flex: 1;
      align-self: center;
  }

  .header_menu_inner {
      display: flex;
      justify-content: flex-end;
  }

  i{
      display: inline-block;
      color:#eee;
      cursor:pointor;
  }

  i:hover{
    color:#8f1313;
  }

  .navbar{
      min-width:350px;
  }

  #Navber li:hover{
      font-weight:bold;
  }

  ul.navbar-nav >li {
      list-style: none;
  }

</style>
