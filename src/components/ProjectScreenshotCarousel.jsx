
import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

function ProjectScreenshotCarousel({ screenshots = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (screenshots.length === 0) {
    return null;
  }

  const currentScreenshot = screenshots[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? screenshots.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === screenshots.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      className="project-screenshots"
      aria-label="Project screenshots"
    >
      <div className="project-screenshots__header">
        <div>
          <h2>Project Screenshots</h2>
          <p>Explore the application screens and features.</p>
        </div>

        <span className="project-screenshots__counter">
          {activeIndex + 1} / {screenshots.length}
        </span>
      </div>

      <div className="project-screenshots__viewer">
        <img
          key={currentScreenshot.src}
          className="project-screenshots__image"
          src={currentScreenshot.src}
          alt={currentScreenshot.alt}
        />

        <button
          type="button"
          className="project-screenshots__arrow project-screenshots__arrow--prev"
          onClick={showPrevious}
          aria-label="Previous screenshot"
          disabled={screenshots.length < 2}
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          className="project-screenshots__arrow project-screenshots__arrow--next"
          onClick={showNext}
          aria-label="Next screenshot"
          disabled={screenshots.length < 2}
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="project-screenshots__caption">
        <div>
          <h3>{currentScreenshot.title}</h3>
          {currentScreenshot.description && (
            <p>{currentScreenshot.description}</p>
          )}
        </div>

        <button
          type="button"
          className="project-screenshots__expand"
          onClick={() => window.open(
            currentScreenshot.src,
            "_blank",
            "noopener,noreferrer"
          )}
          aria-label="Open screenshot in full size"
        >
          <Maximize2 size={18} />
          <span>View full size</span>
        </button>
      </div>

      <div
        className="project-screenshots__thumbnails"
        aria-label="Choose a screenshot"
      >
        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot.src}
            type="button"
            className={`project-screenshots__thumbnail ${
              index === activeIndex ? "is-active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show screenshot: ${screenshot.title}`}
            aria-pressed={index === activeIndex}
          >
            <img src={screenshot.src} alt="" loading="lazy" />
            <span>{screenshot.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default ProjectScreenshotCarousel;
