<template>
<footer class>
    <div class="footer_wrapper px-4 py-3 row">
        <div class="col-md-6" >
            <h3 class="border-bottom  border-light p-2">
              <v-fa icon="list"/> Menu
            </h3>
            <ul class="menu_list px-2">
              <li>
                <router-link
                  to="/"
                  active-class="link--active"
                  exact
                  class="nav-link"
                >HOME
                </router-link>
              </li>
              <li>
              <router-link
                to="/about"
                active-class="link--active"
                exact
                class="nav-link"
              >PROFILE
              </router-link>

              </li>
              <li>
                <router-link
                  to="/works"
                  active-class="link--active"
                  exact
                  class="nav-link"
                >WORKS
                </router-link>
              </li>
              <li>
                <router-link
                  to="/contact"
                  active-class="link--active"
                  exact
                  class="nav-link"
                >CONTACT
                </router-link>
              </li>
            </ul>
        </div>

        <div class="col-md-6 mb-3" >
            <h3 class="border-bottom  border-light p-2">
              <v-fa icon="external-link-square-alt"/> Link
            </h3>
            <ul class="menu_list px-2">
              <li class="my-3">
                <i class="ml-3 mr-2"><v-fa :icon="['fab', 'twitter']" /></i>Twitter:
                <a href="https://twitter.com/SUGIZAKI19" target="_blank">
                  @SUGIZAKI19
                </a>
              </li>
              <li lass="my-3">
              <i class="ml-3 mr-2"><v-fa icon="coffee"/></i>Blog:
                <a href="https://sugizaki.work/" target="_blank">
                    Sugi-log
                </a>
              </li>
            </ul>
        </div>
    </div>
</footer>
</template>

<style scoped>
.link {
  margin-right: 10px;
}
.link--active {
  font-size: 20px;
  font-weight:bold;
}

footer{
    background:rgb(29,27,27);
    min-width:375px;
}

.footer_wrapper{
    color: #eee;
}

h3 {
font-size:20px;
}

.menu_list li{
  list-style:none;
  font-size:20px;
}

</style>
