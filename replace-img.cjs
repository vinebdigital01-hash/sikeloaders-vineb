const fs = require('fs');
const pages = [
  'src/components/AboutStats.jsx',
  'src/components/BlogSection.jsx',
  'src/components/Hero.jsx',
  'src/components/shared/PageHeader.jsx',
  'src/pages/AboutPage.jsx',
  'src/pages/BlogListing.jsx',
  'src/pages/BlogPost.jsx'
];

let globalCounter = 2; // Start from Page_02

pages.forEach(page => {
  if (fs.existsSync(page)) {
    let content = fs.readFileSync(page, 'utf8');
    
    content = content.replace(/https:\/\/images\.unsplash\.com\/[^"'\s]+/g, () => {
      let replacement = `/catalogue/New Catalogue SK 2025 print_Page_${String(globalCounter).padStart(2, '0')}.jpg`;
      globalCounter++;
      // Loop back if we exceed 10 pages for general images to be safe
      if (globalCounter > 10) globalCounter = 2; 
      return replacement;
    });

    fs.writeFileSync(page, content);
  }
});
console.log('Done');
