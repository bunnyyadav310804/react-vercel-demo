#!/usr/bin/env node

// Simple link checker for project files.
// Scans .js, .jsx, .html files under src/ and public/ for http/https URLs
// Prints any links that return non-2xx status codes.

import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const roots = [path.join(process.cwd(), 'src'), path.join(process.cwd(), 'public')];
const urlRegex = /https?:\/\/[\w\-\.\/%&?=~:#]+/g;

async function checkUrl(url) {
  try {
    const res = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    return res.status;
  } catch (err) {
    return `ERROR: ${err.message}`;
  }
}

function collectFiles(dir, extensions) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(collectFiles(full, extensions));
    } else {
      if (extensions.includes(path.extname(full))) {
        results.push(full);
      }
    }
  });
  return results;
}

async function main() {
  const allFiles = [];
  roots.forEach((root) => {
    if (fs.existsSync(root)) {
      allFiles.push(...collectFiles(root, ['.js', '.jsx', '.html']));
    }
  });

  const links = new Set();
  allFiles.forEach((file) => {
    const text = fs.readFileSync(file, 'utf8');
    const matches = text.match(urlRegex);
    if (matches) {
      matches.forEach((u) => links.add(u));
    }
  });

  if (links.size === 0) {
    console.log('No links found in project files.');
    return;
  }

  console.log(`Checking ${links.size} unique URLs...`);
  for (const url of links) {
    const status = await checkUrl(url);
    if (typeof status === 'number' && (status < 200 || status >= 400)) {
      console.log(`Broken link: ${url} (status ${status})`);
    } else if (typeof status === 'string' && status.startsWith('ERROR')) {
      console.log(`Error checking ${url}: ${status}`);
    }
  }
  console.log('Link check complete.');
}

main().catch((e) => {
  console.error('Link checker failed:', e);
});