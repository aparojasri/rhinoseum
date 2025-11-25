// apps/api/prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// The Master Taxonomy (12 Parent Categories + Subcategories)
const masterCategories = [
  {
    name: 'Fine Arts',
    slug: 'fine-arts',
    children: [
      'Drawing', 'Painting', 'Sculpture', 'Printmaking', 'Mixed Media', 
      'Murals', 'Miniature Painting', 'Sand Painting', 'Glass Painting'
    ],
  },
  {
    name: 'Digital Arts',
    slug: 'digital-arts',
    children: [
      'Digital Illustration', 'Digital Painting', '3D Art', 'Motion & Animation', 
      'AI-Assisted Art', 'Concept Art', 'Pixel Art', 'VFX'
    ],
  },
  {
    name: 'Photography',
    slug: 'photography',
    children: [
      'Portrait', 'Fashion', 'Landscape', 'Wildlife', 'Astrophotography', 
      'Macro', 'Street', 'Product Photography', 'Black & White'
    ],
  },
  {
    name: 'Textile Arts',
    slug: 'textile-arts',
    children: [
      'Embroidery', 'Crochet', 'Knitting', 'Sewing & Tailoring', 'Weaving', 
      'Macramé', 'Quilting', 'Rug Making'
    ],
  },
  {
    name: 'Fashion Design',
    slug: 'fashion-design',
    children: [
      'Fashion Illustration', 'Garment Construction', 'Accessory Design', 
      'Footwear Design', 'Jewelry Design', 'Costume Design'
    ],
  },
  {
    name: 'Crafts & Handmade',
    slug: 'crafts-handmade',
    children: [
      'Paper Craft', 'Origami', 'Scrapbooking', 'Candle Making', 'Soap Making', 
      'Pottery', 'Clay Craft', 'Puppets & Dolls'
    ],
  },
  {
    name: 'Decorative Arts',
    slug: 'decorative-arts',
    children: [
      'Ceramics', 'Glass Art', 'Stained Glass', 'Mosaic', 'Wood Inlay', 
      'Calligraphy', 'Gold Leafing'
    ],
  },
  {
    name: 'Folk & Tribal Arts',
    slug: 'folk-tribal',
    children: [
      'Warli', 'Madhubani', 'Gond', 'Pattachitra', 'Kalamkari', 
      'Mandala', 'African Tribal Art', 'Aboriginal Dot Painting'
    ],
  },
  {
    name: 'Performance Arts',
    slug: 'performance-arts',
    children: [
      'Dance', 'Theatre', 'Puppetry', 'Spoken Word Poetry', 'Performance Installations'
    ],
  },
  {
    name: 'Literary Arts',
    slug: 'literary-arts',
    children: [
      'Poetry', 'Creative Writing', 'Screenwriting', 'Typography Art'
    ],
  },
  {
    name: 'Commercial & Design',
    slug: 'commercial-design',
    children: [
      'Graphic Design', 'Logo Design', 'UI UX Design', 'Packaging Design', 'Editorial Illustration'
    ],
  },
  {
    name: 'Art for Healing',
    slug: 'art-for-healing',
    children: [
      'Mandala Therapy', 'Zentangle', 'Art Journaling', 'Mindful Coloring', 'Expressive Arts'
    ],
  }
];

async function main() {
  console.log('🌱 Starting Seed...');

  for (const parent of masterCategories) {
    // 1. Create/Update the Parent Category
    const parentRecord = await prisma.category.upsert({
      where: { slug: parent.slug },
      update: {}, // If it exists, do nothing (idempotent)
      create: {
        name: parent.name,
        slug: parent.slug,
        // Assuming images are stored in /public/assets/categories/
        image: `/assets/categories/${parent.slug}.jpg` 
      },
    });

    console.log(`Processing Parent: ${parent.name}`);

    // 2. Create/Update the Subcategories
    for (const childName of parent.children) {
      const childSlug = childName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      
      await prisma.category.upsert({
        where: { slug: childSlug },
        update: {},
        create: {
          name: childName,
          slug: childSlug,
          parentId: parentRecord.id, // Link to Parent
          image: `/assets/categories/${childSlug}.jpg`
        },
      });
    }
  }

  console.log('✅ Seeding Complete! Database is ready.');
}

main()
  .catch((e) => {
    console.error('❌ Seeding Failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });