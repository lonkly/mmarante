<script>
    const navigation = [
        { name: "Методы", slug: "/methods" },
        { name: "Обо мне", slug: "/" },
        { name: "Запросы", slug: "/requests" },
        { name: "Образование", slug: "/education" },
        { name: "Сертификаты", slug: "/certificates" },
        { name: "Консультации", slug: "/client" },
        { name: "Опросник ТДО", slug: "/questionarie" },
        { name: "Контакты", slug: "/contacts" },
    ];
</script>

<div class="w-64 h-screen bg-transparent flex flex-col justify-between p-6">
    <!-- Navigation Links -->
    <nav class="space-y-4">
        {#each navigation as link}
            <a
                    href={link.slug}
                    class="block text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg px-4 py-2 transition"
            >
                {link.name}
            </a>
        {/each}
    </nav>

    <!-- Footer -->
    <footer class="text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} by Мария Маранте.
    </footer>
</div>
