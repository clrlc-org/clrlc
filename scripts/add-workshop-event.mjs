import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load .env.local
dotenv.config({ path: '.env.local' });

// Configuration
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'l3zd56hq';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_AUTH_TOKEN;

if (!token) {
  console.error('Error: SANITY_AUTH_TOKEN not found in environment variables');
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
  title: 'An Introspective Look at the African AI Landscape Workshop at Deep Learning Indaba 2026',
  date: new Date('2026-08-07').toISOString().split('T')[0],
  location: 'Lagos, Nigeria',
  type: 'workshop',
  description: 'Joy Olusanya, Founder and CEO of CLRLC, served as a panelist at the \'An Introspective Look at the African AI Landscape\' workshop at Deep Learning Indaba 2026.',
  link: 'https://sites.google.com/berkeley.edu/introspectivelookatafricaai/home',
  linkLabel: 'View Workshop Details',
};

const IMAGE_PATH = process.argv[2] || 'C:\\Users\\marie\\AppData\\Local\\Temp\\claude\\c--Users-marie-clrlc\\b6334a4c-647c-45cd-b91d-60422c2c9305\\images\\11.jpg';

async function uploadImage() {
  console.log(`Uploading workshop image from: ${IMAGE_PATH}`);

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
  console.log('Creating workshop event document...');

  try {
    const doc = {
      _type: 'event',
      title: EVENT_DATA.title,
      date: EVENT_DATA.date,
      location: EVENT_DATA.location,
      type: EVENT_DATA.type,
      description: EVENT_DATA.description,
      link: EVENT_DATA.link,
      linkLabel: EVENT_DATA.linkLabel,
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
    console.log(`  Location: ${result.location}`);
    console.log(`  Link Label: ${result.linkLabel}`);

    return result._id;
  } catch (error) {
    console.error('✗ Failed to create event:', error.message);
    throw error;
  }
}

async function main() {
  console.log('🚀 Adding Workshop event to Sanity...\n');
  console.log(`Project: ${projectId}`);
  console.log(`Dataset: ${dataset}\n`);

  try {
    const imageAssetId = await uploadImage();
    await createEvent(imageAssetId);

    console.log('\n✅ Workshop event added successfully!');
    console.log('\nEvent details:');
    console.log(`  Title: ${EVENT_DATA.title}`);
    console.log(`  Date: August 7, 2026`);
    console.log(`  Location: ${EVENT_DATA.location}`);
    console.log(`  Link: ${EVENT_DATA.link}`);
    console.log(`  Link Label: ${EVENT_DATA.linkLabel}`);
  } catch (error) {
    console.error('\n❌ Failed to add event:', error.message);
    process.exit(1);
  }
}

main();
