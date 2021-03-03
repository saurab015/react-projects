import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext();

  if (isLoading) {
    return <div className="loading-hacker"></div>;
  }
  return (
    <section className="stories-hacker">
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story;
        return (
          <article key={objectID} className="story-hacker">
            <h4 className="title-hacker">{title}</h4>
            <p className="info-hacker">
              {points} points by <span> {author} | </span>
              {num_comments} comments
            </p>
            <div>
              <a
                rel="noopener noreferrer"
                className="read-link-hacker"
                target="_blank"
                href={url}
              >
                read more
              </a>
              <button
                onClick={() => removeStory(objectID)}
                className="remove-btn-hacker"
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
