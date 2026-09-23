import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";

type CardSliderProps = { children: ReactNode; label: string };

export function CardSlider({ children, label }: CardSliderProps) {
  const cards = Children.toArray(children);
  const clones = cards.map((child, index) => isValidElement(child)
    ? cloneElement(child as ReactElement<Record<string, unknown>>, { key: `clone-${index}`, "aria-hidden": true })
    : child);

  return (
    <div className="card-slider" aria-label={label}>
      <div className="slider-viewport">
        <div className="slider-track">
          <div className="slider-set">{cards}</div>
          <div className="slider-set" aria-hidden="true">{clones}</div>
        </div>
      </div>
    </div>
  );
}
