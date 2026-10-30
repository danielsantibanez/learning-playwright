import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

test.describe("Playwright site tests", () => {
  test("has title", async ({ page }) => {
    await page.waitForTimeout(2000);

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwrightjkgkug/);
  });

  test("get started link", async ({ page }) => {
    // Click the get started link.
    await page.getByRole("link", { name: "Get started" }).click();

    await page.pause();

    // Expects page to have a heading with the name of Installation.
    await expect(
      page.getByRole("heading", { name: "Installation" }),
    ).toBeVisible();
  });
});
