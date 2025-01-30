<script>
    import { Menu, X } from 'lucide-svelte';
    import  Logo  from './Logo.svelte';

    let isOpen = false;

    const navigation = [
        { name: "Обо мне", slug: "/" },
        { name: "Методы", slug: "/methods" },
        { name: "Запросы", slug: "/requests" },
        { name: "Образование", slug: "/education" },
        { name: "Сертификаты", slug: "/certificates" },
        { name: "Консультации", slug: "/client" },
        { name: "Опросник ТДО", slug: "/questionarie" },
        { name: "Контакты", slug: "/contacts" },
    ];

    function navigate(slug) {
        isOpen = false;              // close the mobile menu
        window.location.href = slug; // then navigate
    }
</script>

<!-- Desktop Sidebar (always visible from md breakpoint and up) -->
<aside class="hidden md:flex md:flex-col md:w-64 md:h-screen md:shadow-md md:p-6">

    <nav class="space-y-4">
        <Logo/>
        {#each navigation as link}
            <a
              on:click={() => navigate(link.slug)}
              class="block text-2xl font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg px-4 py-2 transition hover:md:shadow-md"
            >
                {link.name}
            </a>
        {/each}
    </nav>

    <!-- Footer in Desktop Sidebar -->
    <footer class="mt-auto text-sm text-center text-gray-700">
        &copy; {new Date().getFullYear()} by Мария Маранте.
    </footer>
</aside>

<!-- Mobile Navigation (hidden on md and above) -->
<div class="md:hidden">
    <!-- Hamburger / Close Button -->
    <button
      class="fixed mt-4 mr-2 top-4 right-6 z-50 bg-white p-4 rounded-full shadow-md"
      on:click={() => (isOpen = !isOpen)}
      aria-label="Toggle navigation menu"
    >
        {#if isOpen}
            <X class="w-6 h-6" />
        {:else}
            <Menu class="w-6 h-6" />
        {/if}
    </button>

    {#if isOpen}

        <!-- Fullscreen overlay covering the entire screen -->
        <div class="fixed inset-0 z-40 bg-linear-to-br from-primary to-gray-100 p-6 flex flex-col text-center">
            <!-- Navigation links -->
            <nav class="space-y-4">
                <div class="flex justify-center"><Logo/></div>
                {#each navigation as link}
                    <a
                      on:click={() => navigate(link.slug)}
                      class="block text-2xl font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg px-4 py-2 transition"
                    >
                        {link.name}
                    </a>
                {/each}
            </nav>

            <!-- Footer in Mobile Overlay -->
            <footer class="mt-auto text-sm text-center text-gray-500">
                &copy; {new Date().getFullYear()} by Мария Маранте.
            </footer>
        </div>
    {/if}
</div>
