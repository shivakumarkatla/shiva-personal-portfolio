import "./FilterChips.css";

/**
 * Single-select filter buttons. `options` is a list of { id, label, count };
 * the active option has aria-pressed="true".
 */
function FilterChips({ label, options, value, onChange }) {
  return (
    <div className="filter-chips" role="group" aria-label={label}>
      {options.map((option) => {
        const isActive = option.id === value;
        return (
          <button
            key={option.id}
            type="button"
            className="filter-chips__chip"
            aria-pressed={isActive}
            onClick={() => onChange(option.id)}
          >
            {option.label}
            <span className="filter-chips__count" aria-hidden="true">
              {option.count}
            </span>
            <span className="sr-only">({option.count} projects)</span>
          </button>
        );
      })}
    </div>
  );
}

export default FilterChips;
