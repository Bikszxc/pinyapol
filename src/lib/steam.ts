import { fetch } from 'undici';

const STEAM_API_KEY = process.env.STEAM_API_KEY;

export interface SteamWorkshopItem {
	publishedfileid: string;
	title: string;
	time_updated: number; // Unix timestamp in seconds
	preview_url: string;
	banned: number; // 0 = not banned, 1 = banned
    creator_app_id: number;
    file_url: string; // Direct download URL, might not always be present or accessible
    subscriptions: number;
    favorited: number;
    views: number;
}

export async function getWorkshopDetails(fileIds: string[]): Promise<SteamWorkshopItem[]> {
	if (!STEAM_API_KEY) {
		throw new Error('STEAM_API_KEY is not defined in environment variables.');
	}
    if (fileIds.length === 0) {
        return [];
    }

	const params = new URLSearchParams();
	params.append('itemcount', fileIds.length.toString());
	fileIds.forEach((id, index) => {
		params.append(`publishedfileids[${index}]`, id);
	});

	const response = await fetch('https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/', {
		method: 'POST',
		body: params,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});

	if (!response.ok) {
		throw new Error(`Steam API error: ${response.status}: ${response.statusText}`);
	}

	const data = (await response.json()) as any;
	
    if (!data.response || !data.response.publishedfiledetails || data.response.result !== 1) {
        // Steam API result 1 means success, others are errors or no data
        return [];
    }

    // Filter out banned items
    return data.response.publishedfiledetails.filter((item: SteamWorkshopItem) => item.banned === 0);
}
