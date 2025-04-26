<script lang="ts">
    import { i18n } from '$lib/i18n';
    import { ParaglideJS } from '@inlang/paraglide-sveltekit';
    import Sidebar from '$lib/Sidebar.svelte';
    import { sidebarOpen } from '$lib/stores'; // <- we'll create this store
    let { children } = $props();
    import '../app.css';
</script>

<svelte:head>
    <title>Maria Marante</title>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-TKMTHR85CF"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-TKMTHR85CF');
    </script>
</svelte:head>

<div class="flex h-screen bg-white overflow-hidden">
    <Sidebar />
    <main class={`flex-1 p-8 transition-all duration-300 ${$sidebarOpen ? 'overflow-hidden' : 'overflow-auto'}`}>
        <ParaglideJS {i18n}>
            {@render children()}
        </ParaglideJS>
    </main>
</div>