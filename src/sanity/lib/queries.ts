import { groq } from "next-sanity";

export const MEMBERS_QUERY = groq`*[_type == "member"] | order(order asc) {
  _id,
  name,
  role,
  bio,
  image,
  socials
}`;

export const EVENTS_QUERY = groq`*[_type == "event"] | order(date desc) {
  _id,
  title,
  slug,
  date,
  location,
  type,
  description,
  link,
  image
}`;

export const RESEARCH_QUERY = groq`*[_type == "research"] | order(year desc) {
  _id,
  title,
  type,
  researchArea,
  authors,
  venue,
  year,
  status,
  description,
  paperLink,
  posterImage {
    asset->{ url }
  },
  publishedAt
}`;

export const GALLERY_QUERY = groq`*[_type == "gallery"] | order(_createdAt desc) {
  _id,
  title,
  image,
  tag
}`;
