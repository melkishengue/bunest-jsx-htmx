import React from 'react';

export const Home: React.FC = () => {
  return (
    <>
      <div>Template with bun, nestjs, jsx and htmx</div>
      <div className="flex flex-row gap-2 mt-6">
        <a
          href="/page1"
          className="underline text-blue-500"
          hx-target="#page-content"
          hx-swap="innerHTML scroll:top transition:true"
          hx-indicator="#loader"
        >
          Page 1
        </a>
        <a
          href="/page2"
          className="underline text-blue-500"
          hx-target="#page-content"
          hx-swap="innerHTML scroll:top transition:true"
          hx-indicator="#loader"
        >
          Page 2
        </a>
      </div>
    </>
  );
};
