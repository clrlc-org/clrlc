import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load .env.local
dotenv.config({ path: '.env.local' });

// Configuration
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummyprojectid';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_AUTH_TOKEN;

if (!token) {
  console.error('Error: SANITY_AUTH_TOKEN not found in environment variables');
  console.error('Please add your Sanity write token to .env.local:');
  console.error('SANITY_AUTH_TOKEN=your_write_token_here');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-02-02',
  token,
  useCdn: false,
});

const EVENT_DATA = {
  title: 'CLRLC at Deep Learning Indaba 2026',
  date: new Date('2026-08-02').toISOString().split('T')[0],
  displayDate: 'August 2–7, 2026',
  location: 'Lagos, Nigeria',
  type: 'conference',
  description: 'A recap of CLRLC at Deep Learning Indaba 2026 in Lagos, from our community booth to the conversations we had with researchers building AI for low-resource languages.',
  link: 'https://substack.com/home/post/p-213385228',
};

const IMAGE_PATH = process.argv[2] || 'C:\\Users\\marie\\AppData\\Local\\Temp\\claude\\c--Users-marie-clrlc\\b6334a4c-647c-45cd-b91d-60422c2c9305\\images\\9.jpg';

async function uploadImage() {
  console.log(`Uploading image from: ${IMAGE_PATH}`);

  try {
    if (!fs.existsSync(IMAGE_PATH)) {
      throw new Error(`Image file not found: ${IMAGE_PATH}`);
    }

    const imageBuffer = fs.readFileSync(IMAGE_PATH);
    const fileName = path.basename(IMAGE_PATH);

    const asset = await client.assets.upload('image', imageBuffer, {
      filename: fileName,
    });

    console.log(`✓ Image uploaded successfully`);
    console.log(`  Asset ID: ${asset._id}`);

    return asset._id;
  } catch (error) {
    console.error('✗ Failed to upload image:', error.message);
    throw error;
  }
}

async function createEvent(imageAssetId) {
  console.log('Creating event document...');

  try {
    const doc = {
      _type: 'event',
      title: EVENT_DATA.title,
      date: EVENT_DATA.date,
      location: EVENT_DATA.location,
      type: EVENT_DATA.type,
      description: EVENT_DATA.description,
      link: EVENT_DATA.link,
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAssetId,
        },
      },
    };

    const result = await client.create(doc);

    console.log(`✓ Event created successfully`);
    console.log(`  Event ID: ${result._id}`);
    console.log(`  Title: ${result.title}`);
    console.log(`  Date: ${EVENT_DATA.displayDate}`);
    console.log(`  Location: ${result.location}`);

    return result._id;
  } catch (error) {
    console.error('✗ Failed to create event:', error.message);
    throw error;
  }
}

async function main() {
  console.log('🚀 Adding DLI event to Sanity...\n');
  console.log(`Project: ${projectId}`);
  console.log(`Dataset: ${dataset}\n`);

  try {
    const imageAssetId = await uploadImage();
    await createEvent(imageAssetId);

    console.log('\n✅ Event added successfully!');
    console.log('\nEvent details:');
    console.log(`  Title: ${EVENT_DATA.title}`);
    console.log(`  Date: ${EVENT_DATA.displayDate}`);
    console.log(`  Location: ${EVENT_DATA.location}`);
    console.log(`  Link: ${EVENT_DATA.link}`);
  } catch (error) {
    console.error('\n❌ Failed to add event:', error.message);
    process.exit(1);
  }
}

main();
