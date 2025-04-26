<script lang="ts">
    import { Menu, X } from 'lucide-svelte';
    import Logo from './Logo.svelte';
    import { page } from '$app/stores'; // optional if you want active link highlight

    let isOpen = false;

    const navigation = [
        { name: "Обо мне", slug: "/" },
        { name: "Методы", slug: "/methods" },
        { name: "Запросы", slug: "/requests" },
        { name: "Образование", slug: "/education" },
        { name: "Сертификаты", slug: "/certificates" },
        { name: "Консультации", slug: "/client" },
        { name: "Опросник НДО", slug: "/questionarie" },
        { name: "Контакты", slug: "/contacts" },
    ];

    function handleLinkClick() {
        isOpen = false; // close the mobile menu after click
    }
</script>

<aside class="hidden md:flex md:flex-col md:w-64 md:h-screen md:shadow-md md:p-6 cursor-default">
    <nav class="space-y-4">
        <Logo/>
        {#each navigation as link}
            <a
                    href={link.slug}
                    class="block text-2xl font-medium text-primary-light hover:bg-gray-50 hover:text-gray-900 rounded-lg px-4 py-2 transition hover:md:shadow-md"
            >
                {link.name}
            </a>
        {/each}
    </nav>

    <footer class="mt-auto text-sm text-center text-gray-700">
        &copy; {new Date().getFullYear()} by Мария Маранте.
    </footer>
</aside>

<div class="md:hidden">
    <button
            class="fixed mt-4 mr-2 top-4 right-4 z-50 bg-white p-4 rounded-full shadow-md"
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
        <div class="fixed inset-0 z-40 bg-gray-100 p-6 flex flex-col text-center">
            <nav class="space-y-4 mt-12 cursor-default">
                <div class="flex justify-center"><Logo/></div>
                {#each navigation as link}
                    <a
                            href={link.slug}
                            on:click={handleLinkClick}
                            class="block text-2xl font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg px-4 py-2 transition hover:md:shadow-md"
                    >
                        {link.name}
                    </a>
                {/each}
            </nav>

            <footer class="mt-auto text-sm text-center text-gray-500">
                &copy; {new Date().getFullYear()} by Мария Маранте.
            </footer>
        </div>
    {/if}
</div>
