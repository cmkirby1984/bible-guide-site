const fs = require('fs');
const path = require('path');

function addFrontmatter(filePath, id, title) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Check if frontmatter already exists
  if (content.startsWith('---')) {
    console.log(`Skipping ${filePath} - frontmatter already exists`);
    return;
  }

  const frontmatter = `---
id: ${id}
title: ${title}
sidebar_label: ${title}
---

${content}`;

  fs.writeFileSync(filePath, frontmatter, 'utf8');
  console.log(`Added frontmatter to ${filePath}`);
}

// Process Old Testament
const otDir = './docs/old-testament';
const otFiles = fs.readdirSync(otDir);
otFiles.forEach(file => {
  if (file.endsWith('.md')) {
    const id = file.replace('.md', '');
    const content = fs.readFileSync(path.join(otDir, file), 'utf8');
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : id;
    addFrontmatter(path.join(otDir, file), id, title);
  }
});

// Process New Testament
const ntDir = './docs/new-testament';
const ntFiles = fs.readdirSync(ntDir);
ntFiles.forEach(file => {
  if (file.endsWith('.md')) {
    const id = file.replace('.md', '');
    const content = fs.readFileSync(path.join(ntDir, file), 'utf8');
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : id;
    addFrontmatter(path.join(ntDir, file), id, title);
  }
});

// Process Resources
const resourcesDir = './docs/resources';
const resourceFiles = fs.readdirSync(resourcesDir);
resourceFiles.forEach(file => {
  if (file.endsWith('.md')) {
    const id = file.replace('.md', '');
    const content = fs.readFileSync(path.join(resourcesDir, file), 'utf8');
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : id;
    addFrontmatter(path.join(resourcesDir, file), id, title);
  }
});

// Process Indexes
const indexesDir = './docs/indexes';
const indexFiles = fs.readdirSync(indexesDir);
indexFiles.forEach(file => {
  if (file.endsWith('.md')) {
    const id = file.replace('.md', '');
    const content = fs.readFileSync(path.join(indexesDir, file), 'utf8');
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : id;
    addFrontmatter(path.join(indexesDir, file), id, title);
  }
});

// Process Quick Reference
const quickRefDir = './docs/quick-reference';
const quickRefFiles = fs.readdirSync(quickRefDir);
quickRefFiles.forEach(file => {
  if (file.endsWith('.md')) {
    const id = file.replace('.md', '');
    const content = fs.readFileSync(path.join(quickRefDir, file), 'utf8');
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : id;
    addFrontmatter(path.join(quickRefDir, file), id, title);
  }
});

console.log('Frontmatter added to all files!');
