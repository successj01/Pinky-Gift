import { useEffect, useState } from 'react';

const DEFAULT_SPEED = 45;
const DEFAULT_DELETION_SPEED = 25;
const DEFAULT_PAUSE = 1800;

function Typewriter({
  text,
  words,
  speed = DEFAULT_SPEED,
  deletionSpeed = DEFAULT_DELETION_SPEED,
  pause = DEFAULT_PAUSE,
  loop = false,
  className = '',
  ariaLabel,
}) {
  const source = words && words.length > 0 ? words : [text].filter(Boolean);
  const shouldLoop = loop || (words && words.length > 0);

  const [wordIndex, setWordIndex] = useState(0);
  const [subLength, setSubLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = source[wordIndex];
    let timeout;

    if (subLength === current.length && !deleting) {
      if (shouldLoop) {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else if (subLength === 0 && deleting) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % source.length);
    } else {
      timeout = setTimeout(
        () => setSubLength((prev) => prev + (deleting ? -1 : 1)),
        deleting ? deletionSpeed : speed
      );
    }

    return () => clearTimeout(timeout);
  }, [source, wordIndex, subLength, deleting, speed, deletionSpeed, pause, shouldLoop]);

  return (
    <span className={className} aria-label={ariaLabel || source[wordIndex]} aria-live="polite">
      {source[wordIndex].slice(0, subLength)}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-current typewriter-cursor" />
    </span>
  );
}

export default Typewriter;