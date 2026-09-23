"use client";

import { useEffect, useState } from "react";

const headline = "I build systems that run real businesses.";
const accentText = "businesses.";
const accentStart = headline.indexOf(accentText);
const typeDelay = 62;
const deleteDelay = 34;
const holdDelay = 5000;
const restartDelay = 450;

export function TypewriterHeadline() {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting" | "restarting">("typing");

  useEffect(() => {
    let delay = typeDelay;

    if (phase === "holding") delay = holdDelay;
    if (phase === "deleting") delay = deleteDelay;
    if (phase === "restarting") delay = restartDelay;

    const timer = window.setTimeout(() => {
      if (phase === "typing") {
        const next = headline.slice(0, text.length + 1);
        setText(next);
        if (next === headline) setPhase("holding");
        return;
      }

      if (phase === "holding") {
        setPhase("deleting");
        return;
      }

      if (phase === "deleting") {
        const next = text.slice(0, -1);
        setText(next);
        if (!next) setPhase("restarting");
        return;
      }

      setPhase("typing");
    }, delay);

    return () => window.clearTimeout(timer);
  }, [phase, text]);

  return (
    <div className="typewriter-heading" data-phase={phase}>
      <h1 id="hero-title" aria-label={headline}>
        {text.slice(0, accentStart)}
        <em>{text.slice(accentStart)}</em>
        <i className="typewriter-cursor" aria-hidden="true" />
      </h1>
      <h1 className="mobile-static-headline" aria-hidden="true">I build systems that run real <em>businesses.</em></h1>
    </div>
  );
}
