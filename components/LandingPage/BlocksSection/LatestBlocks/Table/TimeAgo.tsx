import React from 'react';
import { useTimeAgo } from '@/utils/useTimeAgo'; // Adjust import path as necessary

interface TimeAgoProps {
  dateString: string;
}

const TimeAgo: React.FC<TimeAgoProps> = ({ dateString }) => {
  const timeAgo = useTimeAgo(dateString);

  return <span>{timeAgo}</span>;
};

export default TimeAgo;
