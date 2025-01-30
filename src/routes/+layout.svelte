<script lang="ts">
    import { i18n } from '$lib/i18n';
    import { ParaglideJS } from '@inlang/paraglide-sveltekit';
    import Sidebar from '$lib/Sidebar.svelte';
    let { children } = $props();
    import '../app.css';
</script>

<svelte:head>
    <title>Maria Marante</title>
    <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'YOUR_TRACKING_ID');
    </script>
</svelte:head>

<div class="flex h-screen bg-linear-to-br from-gray-100 via-primary to-gray-100">
    <Sidebar />
    <main class="flex-1 overflow-auto">
        <ParaglideJS {i18n}>
            {@render children()}
        </ParaglideJS>
    </main>
</div>