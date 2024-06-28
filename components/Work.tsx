import React from "react";
import Link, { LinkProps } from "next/link";

interface workProps {
  children: JSX.Element | JSX.Element[];
}

export const WorkContainer: React.FC<workProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen px-10">
      {children}
    </div>
  );
};

export const WorkBackground: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
    <div className="bg-black h-[30vh] lg:h-auto"></div>
    <div className="bg-white h-[70vh] lg:min-h-screen"></div>
  </div>
);

export const WorkLeft: React.FC<{
  progress: number;
  children: JSX.Element | JSX.Element[];
}> = ({ children, progress }) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
  return (
    <div
      className="flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="leading-10">{children}</div>
    </div>
  );
};

export const WorkRight: React.FC<{
  progress: number;
  children: JSX.Element | JSX.Element[];
}> = ({ children, progress }) => {
  let translateY = Math.max(-50, -(progress - 0.5) * 50);
  return (
    <div
      className="flex flex-1 lg:items-center justify-center h-screen lg:m-auto"
      style={{
        transform: `translateY(${translateY})`,
      }}
    >
      <div className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0">
        {children}
      </div>
    </div>
  );
};

interface childProps extends LinkProps {
  children: React.ReactNode;
}

export const WorkLink: React.FC<childProps> = ({ href, children }) => (
  <Link
    href={href}
    target="_blank"
    rel="noreferrer"
    className="underline underline-offset-8 decoration-1"
  >
    {children}
  </Link>
);
