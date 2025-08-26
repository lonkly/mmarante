<script lang="ts">
	interface Props {
		title: string;
		description: string;
		keywords?: string;
		canonical?: string;
		noindex?: boolean;
	}

	let { title, description, keywords, canonical, noindex = false }: Props = $props();
	
	const fullTitle = `${title} | Мария Маранте - Психолог`;
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}
	{#if canonical}
		<link rel="canonical" href={canonical} />
	{/if}
	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{/if}
</svelte:head>