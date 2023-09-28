import { useRef, useEffect } from "react";

export const useSEO = ({ description, title }) => {
  const prevTitle = useRef(document.title);

  const prevDescription = useRef(
    document.querySelector('meta[name="description"]').getAttribute('content')
  );

  useEffect(() => {
    const previuousTitle = prevTitle.current;
    if (title) {
      document.title = `El Abrojal | ${title} `;
    }

    return () => (document.title = previuousTitle);
  }, [title]);

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = prevDescription.current;

    if (description) {
      metaDescription.setAttribute("content", description);
    }

    return () => metaDescription.setAttribute("content", previousDescription);
  }, [description]);
};
