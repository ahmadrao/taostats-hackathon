import { useState, useEffect } from 'react';

const getTimeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
};

export const useTimeAgo = (dateString: string): string => {
  const [timeAgo, setTimeAgo] = useState<string>(() => getTimeAgo(dateString));

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeAgo(getTimeAgo(dateString));
    }, 1000);

    return () => clearInterval(timerId);
  }, [dateString]);

  return timeAgo;
};
