import { UserRound } from 'lucide-react';
import React from 'react';


type AvatarProps = {
  imageUrl?: string;
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({ imageUrl, className }) => {
  const [imageError, setImageError] = React.useState(false);

  const handleError = () => {
    setImageError(true);
  };

  return (
    <div className={`h-7 w-7 p-1 rounded-full ${className}`}> {}
      {imageUrl && !imageError ? (
        <img
          src={imageUrl}
          alt="Avatar"
          onError={handleError}
          className="h-full w-full  object-cover" 
        />
      ) : (
        <UserRound className="h-full w-full text-gray-400" />
      )}
    </div>
  );
};

export default Avatar;
