import { useEffect } from "react";

const SITE_URL = "https://shivas-personal-portfolio.netlify.app";

function setMetaTag(attribute, key, content) {
  let element = document.head.querySelector(
    `meta[${attribute}="${key}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(url) {
  let element = document.head.querySelector(
    'link[rel="canonical"]'
  );

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
}

function PageMetadata({ title, description }) {
  useEffect(() => {
    const pageTitle =
      title === "Software Developer"
        ? "Shiva Kumar — Software Developer"
        : `${title} | Shiva Kumar`;

    const canonicalUrl = `${SITE_URL}${window.location.pathname}`;

    document.title = pageTitle;

    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", pageTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", "website");
    setMetaTag("name", "twitter:title", pageTitle);
    setMetaTag("name", "twitter:description", description);

    setCanonical(canonicalUrl);
  }, [title, description]);

  return null;
}

export default PageMetadata;