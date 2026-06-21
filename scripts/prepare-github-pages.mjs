import { copyFile, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const distDir = "dist";
const indexPath = join(distDir, "index.html");
const fallbackPath = join(distDir, "404.html");
const serverDir = join(distDir, "server");

const indexHtml = await readFile(indexPath, "utf8");
const pagesHtml = indexHtml.replaceAll('"/./assets/', '"./assets/');

await writeFile(indexPath, pagesHtml);
await copyFile(indexPath, fallbackPath);
await rm(serverDir, { recursive: true, force: true });
