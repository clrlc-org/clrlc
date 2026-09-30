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

const IMAGE_PATH = process.argv[2] || 'C:\\Users\\marie\\AppData\\Local\\Temp\\claude\\c--Users-marie-clrlc\\b6334a4c-647c-45cd-b91d-60422c2c9305\\images\\10.jpg';

async function uploadImage() {
  console.log(`Uploading cropped Indaba image from: ${IMAGE_PATH}`);

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

async function updateIndabaEvent(imageAssetId) {
  console.log('Updating Indaba event with new image...');

  try {
    // Find the Indaba event
    const events = await client.fetch('*[_type == "event" && title match "*Indaba*"]');

    if (!events || events.length === 0) {
      throw new Error('Indaba event not found');
    }

    const indabaEvent = events[0];
    console.log(`Found event: ${indabaEvent.title}`);

    // Update the event with new image
    const updated = await client
      .patch(indabaEvent._id)
      .set({
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAssetId,
          },
        },
      })
      .commit();

    console.log(`✓ Event updated successfully`);
    console.log(`  Event ID: ${updated._id}`);
    console.log(`  Title: ${updated.title}`);

    return updated._id;
  } catch (error) {
    console.error('✗ Failed to update event:', error.message);
    throw error;
  }
}

async function main() {
  console.log('🚀 Updating Indaba event image...\n');
  console.log(`Project: ${projectId}`);
  console.log(`Dataset: ${dataset}\n`);

  try {
    const imageAssetId = await uploadImage();
    await updateIndabaEvent(imageAssetId);

    console.log('\n✅ Indaba event image updated successfully!');
  } catch (error) {
    console.error('\n❌ Failed to update event:', error.message);
    process.exit(1);
  }
}

main();
