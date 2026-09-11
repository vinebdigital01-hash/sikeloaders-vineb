const fs = require('fs');

const filesToUpdate = [
  'src/components/AboutStats.jsx',
  'src/components/BlogSection.jsx',
  'src/components/Hero.jsx',
  'src/components/shared/PageHeader.jsx',
  'src/pages/AboutPage.jsx',
  'src/pages/BlogListing.jsx',
  'src/pages/BlogPost.jsx'
];

const unsplashUrls = [
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop', // Hero/Industrial
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1920&auto=format&fit=crop', // Engineering
  'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1920&auto=format&fit=crop', // Factory
  'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581092334651-ddf7d142f384?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=800&auto=format&fit=crop'
];

let counter = 0;

filesToUpdate.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Use replace with a function to cycle through unsplash URLs
    content = content.replace(/\/catalogue\/New Catalogue SK 2025 print_Page_\d+\.jpg/g, () => {
      const url = unsplashUrls[counter % unsplashUrls.length];
      counter++;
      return url;
    });

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
