import { test, expect } from '@playwright/test';

test('Search Test', async ({ page }) => {
  test.slow();
  await page.goto('/');
});