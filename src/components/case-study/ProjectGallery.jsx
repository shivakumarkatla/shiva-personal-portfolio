import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import ResponsiveImage from "../ui/ResponsiveImage";
import "./ProjectGallery.css";

const SWIPE_DISTANCE = 50;

/**
 * Screenshot gallery: arrow buttons, thumbnails, Left/Right/Home/End keys,
 * touch swipe, and a full-size view in a native <dialog>.
 */
function ProjectGallery({ screenshots, projectTitle }) {
  const [index, setIndex] = useState(0);
  const dialogRef = useRef(null);
  const swipeStart = useRef(null);
  const total = screenshots.length;
  const current = screenshots[index];

  const step = (delta) => setIndex((value) => (value + delta + total) % total);

  function handleKeyDown(event) {
    const actions = {
      ArrowLeft: () => step(-1),
      ArrowRight: () => step(1),
      Home: () => setIndex(0),
      End: () => setIndex(total - 1),
    };
    if (actions[event.key]) {
      event.preventDefault();
      actions[event.key]();
    }
  }

  function handlePointerDown(event) {
    swipeStart.current = event.pointerType === "mouse" ? null : event.clientX;
  }

  function handlePointerUp(event) {
    if (swipeStart.current === null) return;
    const distance = event.clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(distance) > SWIPE_DISTANCE) step(distance < 0 ? 1 : -1);
  }

  function openFullSize() {
    dialogRef.current?.showModal();
  }

  function closeFullSize() {
    dialogRef.current?.close();
  }

  return (
    <div
      className="gallery"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${projectTitle} screenshots`}
      onKeyDown={handleKeyDown}
    >
      <div
        className="gallery__stage"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <ResponsiveImage
          key={current.src}
          className="gallery__image"
          src={current.src}
          alt={current.alt}
          sizes="(min-width: 1280px) 860px, (min-width: 1024px) 66vw, 92vw"
          loading={index === 0 ? "eager" : "lazy"}
        />

        {total > 1 && (
          <>
            <button type="button" className="gallery__arrow gallery__arrow--prev" onClick={() => step(-1)} aria-label="Previous screenshot">
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button type="button" className="gallery__arrow gallery__arrow--next" onClick={() => step(1)} aria-label="Next screenshot">
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      <div className="gallery__caption">
        <div>
          <p className="gallery__counter" aria-live="polite">
            <span className="sr-only">Screenshot </span>
            {index + 1} / {total}
            <span className="sr-only">: {current.title}</span>
          </p>
          <h3 className="gallery__title">{current.title}</h3>
          {current.description && <p className="gallery__description">{current.description}</p>}
        </div>
        <button type="button" className="gallery__expand" onClick={openFullSize}>
          <Maximize2 size={16} aria-hidden="true" />
          View full size
        </button>
      </div>

      {total > 1 && (
        <ul className="gallery__thumbnails" aria-label="Choose a screenshot">
          {screenshots.map((screenshot, thumbIndex) => (
            <li key={screenshot.src}>
              <button
                type="button"
                className="gallery__thumbnail"
                onClick={() => setIndex(thumbIndex)}
                aria-label={`Show screenshot ${thumbIndex + 1}: ${screenshot.title}`}
                aria-current={thumbIndex === index ? "true" : undefined}
              >
                <ResponsiveImage src={screenshot.src} alt="" sizes="160px" />
                <span aria-hidden="true">{screenshot.title}</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <dialog
        ref={dialogRef}
        className="gallery__dialog"
        aria-label={`${current.title}, full size`}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeFullSize();
        }}
      >
        <div className="gallery__dialog-inner">
          <div className="gallery__dialog-bar">
            <p>
              {current.title} <span>{index + 1} / {total}</span>
            </p>
            <div>
              {total > 1 && (
                <>
                  <button type="button" onClick={() => step(-1)} aria-label="Previous screenshot">
                    <ChevronLeft size={18} aria-hidden="true" />
                  </button>
                  <button type="button" onClick={() => step(1)} aria-label="Next screenshot">
                    <ChevronRight size={18} aria-hidden="true" />
                  </button>
                </>
              )}
              <button type="button" onClick={closeFullSize} aria-label="Close full-size view">
                <X size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
          <ResponsiveImage key={`full-${current.src}`} className="gallery__dialog-image" src={current.src} alt={current.alt} sizes="100vw" />
        </div>
      </dialog>
    </div>
  );
}

export default ProjectGallery;
