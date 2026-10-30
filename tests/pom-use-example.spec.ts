import { test, expect } from "@playwright/test";
import { TodoPage as todoPage } from "./todo-page";
import { SettingsPage } from "./settings-page";

test("TODO page test", async ({ page }) => {
  const todoPageInstance = new todoPage(page);
  await todoPageInstance.goto();
  await todoPageInstance.addToDo("my todo");

  const todoItem = await todoPageInstance.getToDoItem("my todo");

  if (!todoItem) {
    throw new Error("Todo item not found");
  }

  await expect(todoItem).toBeVisible();
});
