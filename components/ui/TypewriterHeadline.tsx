"use client";

import { useEffect, useState } from "react";

const lineOne = "Building the intelligence";
const lineTwo = "behind modern";
const lineThree = "businesses.";
const fullText = `${lineOne}\n${lineTwo}\n${lineThree}`;

function HeadlineContent({ text, cursor = false }: { text: string; cursor?: boolean }) {
  const [first = "", second = "", third = ""] = text.split("\n");
  return <>{first}<br />{second}<br /><em>{third}</em>{cursor && <i className="typewriter-cursor" aria-hidden="true" />}</>;
}

export function TypewriterHeadline() {
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (length >= fullText.length) return;
    const timer = window.setTimeout(() => setLength((value) => value + 1), 66);
    return () => window.clearTimeout(timer);
  }, [length]);

  return (
    <div className="typewriter-heading">
      <h1 id="hero-title" className="desktop-typewriter" aria-label={fullText.replaceAll("\n", " ")}><HeadlineContent text={fullText.slice(0, length)} cursor /></h1>
      <h1 className="mobile-headline" aria-hidden="true"><HeadlineContent text={fullText} /></h1>
    </div>
  );
}
