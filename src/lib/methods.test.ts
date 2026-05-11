import { describe, it, expect } from 'vitest';
import { fetchUser, fetchSearchResults, fetchReleases } from './methods';
import { CollectionTypes } from './constants';

describe('ComicGeeks Methods', () => {
    it.skip('should fetch user details correctly', async () => {
        const user = await fetchUser('marufamd');
        expect(user).toBeDefined();
        expect(user.id).toBeTypeOf('number');
        expect(user.name).toBeTypeOf('string');
        expect(user.url).toContain('profile/marufamd');
    }, 15000);

    it('should fetch search results correctly', async () => {
        const results = await fetchSearchResults('batman', CollectionTypes.Issue);
        expect(results).toBeDefined();
        expect(Array.isArray(results)).toBe(true);
        expect(results.length).toBeGreaterThan(0);
        expect(results.some(r => r.name.toLowerCase().includes('batman'))).toBe(true);
    }, 15000);

    it('should fetch new releases correctly', async () => {
        // Use a known past date to avoid empty weeks
        const results = await fetchReleases('2024-01-10');
        expect(results).toBeDefined();
        expect(Array.isArray(results)).toBe(true);
        expect(results.length).toBeGreaterThan(0);
    }, 15000);
});
