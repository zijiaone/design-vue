// 复制类型声明文件从es目录到lib目录
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const esDir = path.join(rootDir, 'es');
const libDir = path.join(rootDir, 'lib');

// 确保lib目录存在
if (!fs.existsSync(libDir)) {
  fs.mkdirSync(libDir, { recursive: true });
}

/**
 * 递归复制目录中的.d.ts文件
 * @param {string} src 源目录
 * @param {string} dest 目标目录
 */
function copyTypeDefinitions(src, dest) {
  // 确保目标目录存在
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // 读取源目录中的所有文件和子目录
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // 递归处理子目录
      copyTypeDefinitions(srcPath, destPath);
    } else if (entry.name.endsWith('.d.ts')) {
      // 复制.d.ts文件
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${srcPath} -> ${destPath}`);
    }
  }
}

console.log('Copying type definitions from es/ to lib/');
copyTypeDefinitions(esDir, libDir);
console.log('Type definitions copied successfully!');
