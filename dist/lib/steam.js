"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkshopDetails = getWorkshopDetails;
const undici_1 = require("undici");
const STEAM_API_KEY = process.env.STEAM_API_KEY;
async function getWorkshopDetails(fileIds) {
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
    const response = await (0, undici_1.fetch)('https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/', {
        method: 'POST',
        body: params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    if (!response.ok) {
        throw new Error(`Steam API error: ${response.status}: ${response.statusText}`);
    }
    const data = (await response.json());
    if (!data.response || !data.response.publishedfiledetails || data.response.result !== 1) {
        // Steam API result 1 means success, others are errors or no data
        return [];
    }
    // Filter out banned items
    return data.response.publishedfiledetails.filter((item) => item.banned === 0);
}
//# sourceMappingURL=steam.js.map