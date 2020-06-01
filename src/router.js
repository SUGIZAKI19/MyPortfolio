import Vue from'vue';
import Router from 'vue-router';

const HeaderHome =() =>import("./views/HeaderHome.vue");
const FooterHome =() =>import("./views/FooterHome.vue");
const Home =() =>import("./views/Home.vue");
const Profile =() =>import("./views/Profile.vue");
const Works =() =>import("./views/Works.vue");
const Contact =() =>import("./views/Contact.vue");
const Thanks =() =>import("./views/Thanks.vue");

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        footer :FooterHome,
        header: HeaderHome,
      }
    },
    {
      path: '/about',
      components: {
        default: Profile,
        header: HeaderHome,
        footer :FooterHome,
      }
    },
    {
      path: '/works',
      components: {
        default: Works,
        header: HeaderHome,
        footer :FooterHome,
      }
    },
    {
      path: '/contact',
      components: {
        default: Contact,
        header: HeaderHome,
        footer :FooterHome,
      }
    },
    {
      path: '/thanks',
      components: {
        default: Thanks,
        header: HeaderHome,
        footer :FooterHome,
      }
    }
    ,
    {
      path: '*',
      redirect: "/"
    }
  ],
  scrollBehavior(to, from, savedPosition){
    return new Promise(resolve =>{
      this.app.$root.$once('triggerScroll',()=>{
        let position = {x:0, y:0}
        if(savedPosition){
          position = savedPosition;
         }
         if(to.hash){
           position = {
             selector: to.hash
           };
         }
         resolve(position);
      });
    })
  }
});
