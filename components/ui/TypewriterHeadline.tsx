"use client";

import { useEffect, useState } from "react";

const headline = "I build systems that run real businesses.";
const typeDelay = 62;
const deleteDelay = 34;
const holdDelay = 5000;

export function TypewriterHeadline() {
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const complete = text === headline;
    const empty = text.length === 0;
    const delay = complete && !deleting ? holdDelay : deleting ? deleteDelay : typeDelay;

    const timer = window.setTimeout(() => {
      if (complete && !deleting) {
        setDeleting(true);
        return;
      }
      if (empty && deleting) {
        setDeleting(false);
        return;
      }
      setText(deleting ? headline.slice(0, text.length - 1) : headline.slice(0, text.length + 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, text]);

  return (
    <div className="typewriter-heading">
      <h1 id="hero-title" aria-label={headline}>
        {text}
        <i className="typewriter-cursor" aria-hidden="true" />
      </h1>
    </div>
  );
}
