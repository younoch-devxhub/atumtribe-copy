<template>
  <nav class="fixed top-0 z-50 w-full mx-auto bg-white shadow-lg h-18">
    <div class="container">
      <div
        class="flex items-center duration-200 ease-in gap-x-10"
        :class="navBarSize ? 'h-20' : 'h-16'"
      >
        <div class="flex items-center space-x-7">
          <!-- Website Logo -->
          <!-- :class="logoSize ? 'smallSize' : 'lagreSize'" -->
          <a href="/" class="flex items-center py-1">
            <img
              :src="logo"
              alt="Logo"
              class="
                w-full
                pb-1
                transition-all
                duration-1000
                ease-in-out
                smallSize
              "
            />
          </a>
        </div>
        <!-- <div class="h-8 border-l border-gray-300"></div> -->
        <!-- Primary Navbar items -->
        <div
          class="
            items-center
            justify-between
            flex-grow
            hidden
            navebar-design
            lg:flex
          "
        >
          <ul class="flex-grow justify-center">
            <span v-for="(menuItem, index) in menuItems" :key="index">
              <li
                @mouseenter="activeClassAdd($event)"
                @mouseleave="activeClassAdd($event)"
              >
                <nuxt-link :target="menuItem.target" :to="menuItem.link">{{
                  menuItem.menuName
                }}</nuxt-link>
              </li>
            </span>
          </ul>

          <div class="flex justify-end md:ml-10 login-section">
            <div class="flex">
              <div class="icon-con">
                <a href="https://twitter.com/AtumToken" target="_blank">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7623 3.29122C15.2057 3.53789 14.6077 3.70456 13.979 3.77989C14.6277 3.39175 15.113 2.78087 15.3443 2.06122C14.7349 2.42321 14.0679 2.67802 13.3723 2.81456C12.9046 2.31513 12.285 1.98411 11.6099 1.87287C10.9347 1.76164 10.2417 1.87642 9.63849 2.19939C9.03525 2.52236 8.55552 3.03546 8.27377 3.65902C7.99202 4.28259 7.92402 4.98172 8.08033 5.64789C6.84546 5.58589 5.63742 5.26492 4.53462 4.70583C3.43181 4.14673 2.45889 3.362 1.679 2.40256C1.41233 2.86256 1.259 3.39589 1.259 3.96389C1.2587 4.47522 1.38462 4.97872 1.62559 5.42971C1.86655 5.8807 2.21511 6.26525 2.64033 6.54922C2.14718 6.53353 1.66492 6.40028 1.23367 6.16056V6.20055C1.23362 6.91772 1.48169 7.61281 1.93579 8.16789C2.38989 8.72297 3.02205 9.10384 3.725 9.24589C3.26752 9.3697 2.78789 9.38794 2.32233 9.29922C2.52066 9.9163 2.907 10.4559 3.42724 10.8425C3.94749 11.2291 4.57561 11.4433 5.22367 11.4552C4.12356 12.3188 2.76492 12.7873 1.36633 12.7852C1.11859 12.7853 0.871051 12.7708 0.625 12.7419C2.04465 13.6547 3.69723 14.1391 5.385 14.1372C11.0983 14.1372 14.2217 9.40522 14.2217 5.30122C14.2217 5.16789 14.2183 5.03322 14.2123 4.89989C14.8199 4.46054 15.3443 3.91649 15.761 3.29322L15.7623 3.29122Z"
                      fill="#A25FFD"
                    />
                  </svg>
                </a>
              </div>
              <div class="icon-con">
                <a href="https://t.me/+MNqqdGzXa602MWZh" target="_blank">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.8079 6.23981L4.51194 11.5198C4.07994 11.6638 4.12794 12.2878 4.55994 12.4318L7.91994 13.4878L9.26394 17.7118C9.35994 18.0478 9.79194 18.1438 10.0319 17.9038L11.9999 16.0798L15.7439 18.8158C16.0319 19.0078 16.4159 18.8638 16.5119 18.5278L19.1039 7.39181C19.2479 6.57581 18.5279 5.95181 17.8079 6.23981ZM10.0319 14.3038L9.59994 16.7998L8.63994 13.3438L17.9999 7.19981L10.0319 14.3038Z"
                      fill="#A25FFD"
                    />
                  </svg>
                </a>
              </div>
              <div class="icon-con">
                <a href="https://discord.gg/86MV3enNKN" target="_blank">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.87897 2.83984C9.74657 3.07697 9.62858 3.32186 9.52563 3.57318C8.51414 3.41321 7.48379 3.41321 6.4723 3.57318C6.36936 3.32186 6.25137 3.07697 6.11897 2.83984C5.16616 3.00264 4.2399 3.2942 3.36564 3.70651C1.80226 5.9627 1.09326 8.70181 1.36563 11.4332C2.38446 12.1991 3.52794 12.7832 4.74563 13.1598C5.02291 12.7936 5.27037 12.4057 5.48563 11.9998C5.08835 11.8534 4.7065 11.668 4.34563 11.4465C4.44461 11.3807 4.53823 11.3071 4.62563 11.2265C5.67794 11.7334 6.83095 11.9966 7.99897 11.9966C9.16699 11.9966 10.32 11.7334 11.3723 11.2265C11.4656 11.3065 11.559 11.3798 11.6523 11.4465C11.2895 11.6663 10.908 11.8537 10.5123 12.0065C10.7186 12.4215 10.9595 12.8185 11.2323 13.1932C12.4485 12.8179 13.59 12.2336 14.6056 11.4665C14.8846 8.73465 14.175 5.9933 12.6056 3.73984C11.7412 3.319 10.8241 3.01629 9.87897 2.83984ZM5.78563 9.87318C5.45202 9.84923 5.14066 9.69697 4.91692 9.44836C4.69317 9.19975 4.57443 8.87413 4.58563 8.53984C4.57274 8.20512 4.69089 7.87857 4.91498 7.62958C5.13906 7.3806 5.45141 7.22882 5.78563 7.20651C6.11986 7.22882 6.43221 7.3806 6.65629 7.62958C6.88038 7.87857 6.99853 8.20512 6.98563 8.53984C6.99853 8.87457 6.88038 9.20112 6.65629 9.4501C6.43221 9.69908 6.11986 9.85086 5.78563 9.87318ZM10.2123 9.87318C9.87869 9.84923 9.56733 9.69697 9.34358 9.44836C9.11983 9.19975 9.0011 8.87413 9.0123 8.53984C8.99941 8.20512 9.11756 7.87857 9.34164 7.62958C9.56573 7.3806 9.87807 7.22882 10.2123 7.20651C10.5471 7.22716 10.8605 7.37844 11.0849 7.62781C11.3094 7.87717 11.4269 8.20468 11.4123 8.53984C11.4269 8.87501 11.3094 9.20252 11.0849 9.45188C10.8605 9.70124 10.5471 9.85253 10.2123 9.87318Z"
                      fill="#A25FFD"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center lg:hidden">
          <button class="outline-none mobile-menu-button" @click="show = !show">
            <svg
              v-if="!show"
              class="w-6 h-6 text-blue-900 hover:text-blue-900"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <img v-if="show" src="~/assets/Icons/delete.svg" />
          </button>
        </div>
      </div>

      <!-- mobile menu -->
      <div v-if="show" class="pb-10 mobile-menu lg:hidden">
        <ul>
          <li
            class="py-2 my-1 border-b-2 border-blue-900"
            v-for="(menuItem, index) in menuItems"
            :key="index"
          >
            <nuxt-link :target="menuItem.target" :to="menuItem.link">{{
              menuItem.menuName
            }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from '~/assets/logo/logo.svg'

export default {
  data() {
    return {
      logo: logo,
      scrollPosition: 0,
      navBarSize: true,
      show: false,
      menuItems: [
        {
          menuName: 'Home',
          link: '/',
          target: '',
        },
        {
          menuName: 'Atum Tokens',
          link: '/atum-token',
          target: '',
        },
        {
          menuName: 'Atum Risks',
          link: '/atum-risks',
          target: '',
        },
        {
          menuName: 'Whitepaper',
          link: '/pdf',
          target: `_blank`,
        },
        {
          menuName: 'Contact',
          link: '/contact',
          target: '',
        },
      ],
    }
  },

  methods: {
    updateScroll() {
      if (window.scrollY > 80) {
        this.navBarSize = false
      } else {
        this.navBarSize = true
      }
    },
    activeClassAdd($event) {
      // console.log($event)
      $event.target.classList.toggle('active')
      // console.log($event.target)
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
}
</script>

<style scoped>
.navebar-design ul {
  @apply flex;
}
.navebar-design ul li {
  @apply py-4 pr-3 xl:px-5 cursor-pointer relative;
}
.navebar-design ul li:hover {
  color: #1e3a8a;
}

/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #1e3a8a;
}
.active::before {
  content: '';
  display: inline-block;
  position: absolute;
  bottom: 10px;
  left: 50%;
  margin-left: -3px;
  background: #a25ffd;
  height: 6px;
  width: 6px;
  border-radius: 90px;
  -webkit-transition: all 250ms ease-in-out 0s;
  -moz-transition: all 250ms ease-in-out 0s;
  -ms-transition: all 250ms ease-in-out 0s;
  -o-transition: all 250ms ease-in-out 0s;
  transition: all 250ms ease-in-out 0s;
}
@media screen and (min-width: 1024px) {
  a.nuxt-link-exact-active::before {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left: -3px;
    background: #a25ffd;
    height: 6px;
    width: 6px;
    border-radius: 90px;
    -webkit-transition: all 250ms ease-in-out 0s;
    -moz-transition: all 250ms ease-in-out 0s;
    -ms-transition: all 250ms ease-in-out 0s;
    -o-transition: all 250ms ease-in-out 0s;
    transition: all 250ms ease-in-out 0s;
  }
}

.smallSize {
  height: 50px !important;
}
.largeSize {
  height: 76px !important;
}
.icon-con {
  @apply flex items-center justify-center m-2;
  border-radius: 5px;
  height: 28px;
  width: 28px;
  border: 2px solid #2842ef;
}
.icon-con:hover {
  background: #2842ef;
}

.icon-con:hover svg path {
  fill: white;
}
</style>
