import React, { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  schema?: Record<string, unknown>;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  ogImage = 'https://dsusvip.ae/og-image.jpg',
  schema,
}) => {
  useEffect(() => {
    // Update Title
    const formattedTitle = title.includes('DSUS VIP') ? title : `${title} | DSUS VIP Dubai`;
    document.title = formattedTitle;

    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update OG Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', formattedTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute('content', ogImage);

    // Canonical link
    const fullCanonical = `https://dsusvip.ae${canonicalPath}`;
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', fullCanonical);
    } else {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      canonicalTag.setAttribute('href', fullCanonical);
      document.head.appendChild(canonicalTag);
    }

    // Dynamic Schema Injection
    let schemaScript = document.getElementById('dynamic-page-schema') as HTMLScriptElement | null;
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'dynamic-page-schema';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.text = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }
  }, [title, description, canonicalPath, ogImage, schema]);

  return null;
};
