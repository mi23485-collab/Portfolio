import { test, expect } from "@playwright/test";

test("home page shows my name", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Maimuna" })).toBeVisible();
});

test("projects section lists at least one project", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Projects", exact: true }).click();
  await expect(page.getByRole("heading", { name: "This portfolio" })).toBeVisible();
});

test("contact email is on the page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Contact" }).click();
  await expect(page.getByRole("link", { name: "hello@example.com" })).toBeVisible();
});
