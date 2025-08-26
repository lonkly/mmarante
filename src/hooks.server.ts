import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { i18n } from '$lib/i18n';

const handleParaglide: Handle = i18n.handle();

const handleGeoBlocking: Handle = async ({ event, resolve }) => {
	// Get country from Cloudflare CF-IPCountry header (common on many hosting platforms)
	// Netlify provides similar geo headers
	const country = event.request.headers.get('CF-IPCountry') || 
		event.request.headers.get('X-Country') ||
		event.request.headers.get('X-Nf-Country-Code');
	
	// Block USA (US) and Kazakhstan (KZ)
	if (country === 'US' || country === 'KZ') {
		return new Response('', {
			status: 200,
			headers: {
				'Content-Type': 'text/html'
			}
		});
	}
	
	return resolve(event);
};

export const handle: Handle = sequence(handleGeoBlocking, handleParaglide);
