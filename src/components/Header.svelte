<script>
  import 'iconify-icon';
  export let user = {
    id: '',
    name: ''
  }
</script>

<header class="flex justify-center">
  <!-- Navigation bar -->
  <nav
    class="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
    data-te-navbar-ref>
    
      <div class="flex items-center">
        <!-- Hamburger menu button -->
        <button
          class="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContentY"
          aria-controls="navbarSupportedContentY"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <!-- Hamburger menu icon -->
          <span class="[&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-7 w-7">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </span>
        </button>
      </div>

      <!-- Navigation links -->
      <div
        class="!visible hidden w-full lg:!flex lg:justify-between"
        id="navbarSupportedContentY">
        <div class="p-1 ml-4">
          <ul
            class="flex flex-col lg:flex-row lg:justify-center lg:items-center text-[18px] w-full"
            data-te-navbar-nav-ref>
            {#if !user.name }
              <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                  class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href="/register"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  >Register</a
                >
              </li>
              <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                  class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href="/login"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  >Login</a
                >
              </li>
            {:else}
              <li class="mb-4 lg:mb-0 lg:pr-2 flex justify-center items-center" data-te-nav-item-ref>
                <form action="/logout" method="POST">
                  <button class="flex justify-center items-center">
                    <iconify-icon icon="material-symbols:logout" class="text-[24px] text-blue-500"></iconify-icon>
                  </button>
                </form>
                <p
                  class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90 text-blue-500"
                >
                  Olá, {user?.name}
                </p>
              </li>
            {/if}
          </ul>
        </div>
        <div class="p-1">
          <ul
            class="flex flex-col lg:flex-row lg:justify-center lg:items-center text-[18px]"
            data-te-navbar-nav-ref>
            <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                href="/"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
                >Home</a
              >
            </li>
            <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                href="/entrada"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
                >Entradas</a
              >
            </li>
            <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                href="/saida"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
                >Saídas</a
              >
            </li>
          </ul>
        </div>
        <div class="!visible mr-10"></div>
      </div>
    
  </nav>
</header>

<style>
	
</style>
