import { test, expect } from '@playwright/test';

test('standard user can log in and sees the products page', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();
  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.getByTestId('title')).toHaveText('Products');
});

test('wrong password shows an error message', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').fill('wrong');
  await page.getByTestId('login-button').click();
  await expect(page.getByTestId('error')).toHaveText(/do not match/);
});

test('locked out user cannot log in', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('username').fill('locked_out_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();
  await expect(page.getByTestId('error')).toHaveText(/locked out/);
  await expect(page).not.toHaveURL(/inventory\.html/);
});