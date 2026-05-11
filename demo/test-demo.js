const { fetchReleases, fetchSearchResults } = require('comicgeeks');

async function runDemo() {
    console.log('--- Starting ComicGeeks Local Demo (via npm link) ---');
    
    try {
        console.log('\n1. Fetching search results for "batman"...');
        const searchResults = await fetchSearchResults('batman');
        console.log(`Found ${searchResults.length} search results.`);
        if (searchResults.length > 0) {
            console.log('First search result sample:', {
                name: searchResults[0].name,
                publisher: searchResults[0].publisher,
                url: searchResults[0].url
            });
        }

        console.log('\n2. Fetching comic releases for a known past week (2024-01-10)...');
        const releases = await fetchReleases('2024-01-10');
        console.log(`Found ${releases.length} releases.`);
        if (releases.length > 0) {
            console.log('First release sample:', {
                name: releases[0].name,
                publisher: releases[0].publisher,
                price: releases[0].price
            });
        }

        console.log('\nDemo completed successfully using impit browser impersonation! 🎉');
    } catch (error) {
        console.error('Error during demo execution:', error);
    }
}

runDemo();
