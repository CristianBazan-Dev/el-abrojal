import { useRef, useEffect } from "react";

export const useTitle = ({ title }) => {
  const prevTitle = useRef(document.title);

  useEffect(() => {
    const previuousTitle = prevTitle.current

    
    document.title = `El Abrojal | ${title} `;

    return () => document.title = previuousTitle; 
  }, [title]);
};
