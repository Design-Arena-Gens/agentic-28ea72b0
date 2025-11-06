import { test, expect } from '@playwright/test';

test('homepage has title and link to docs', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('title')).toHaveText('Playwright Starter');
  await expect(page.getByTestId('docs-link')).toHaveText('Documentation');
});
