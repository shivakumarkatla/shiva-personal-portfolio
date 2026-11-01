import { useEffect } from "react";

import { profile } from "../../data/profile";

const SITE_URL = profile.siteUrl;

function setMetaTag(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
}

/**
 * Sets the document title, description, canonical URL and social tags.
 * - `isHome`: title becomes "Shiva Kumar — <title>" instead of "<title> | Shiva Kumar"
 * - `noindex`: asks search engines not to index the page (not-found states)
 */
function PageMetadata({ title, description, isHome = false, noindex = false }) {
  useEffect(() => {
    const pageTitle = isHome ? `${profile.name} — ${title}` : `${title} | ${profile.name}`;
    const canonicalUrl = `${SITE_URL}${window.location.pathname}`;

    document.title = pageTitle;

    setMetaTag("name", "description", description);
    setMetaTag("name", "robots", noindex ? "noindex" : "index, follow");
    setMetaTag("property", "og:title", pageTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", "website");
    setMetaTag("name", "twitter:title", pageTitle);
    setMetaTag("name", "twitter:description", description);

    setCanonical(canonicalUrl);
  }, [title, description, isHome, noindex]);

  return null;
}

export default PageMetadata;
