const fs = require('fs');
const content = fs.readFileSync('src/data/content.ts', 'utf8');

const target = 'slug: "pm-fuel-relief-scheme-updates"';
const idx = content.indexOf(target);
if (idx !== -1) {
  console.log('FOUND ARTICLE SLUG:');
  console.log(content.slice(idx, idx + 500));
} else {
  console.log('NOT FOUND AS ARTICLE SLUG');
}
