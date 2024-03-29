export const formatEmission = (value: number): string => {
    return value.toLocaleString(undefined, {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 2,
    });
  };
  
  export const formatCreatedAt = (isoDateString: string): string => {
   
    const date = new Date(isoDateString);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  
  export const truncateOwner = (owner: string, maxChars: number = 10): string => {
    return owner.length > maxChars ? `${owner.substring(0, maxChars)}..` : owner;
  };

  export const truncateHash = (hash: string, maxChars: number = 10): string => {
    return hash.length > maxChars ? `${hash.substring(0, maxChars)}...` : hash;
  };
  export const formatTotal = (number: number): string => {
    return number.toLocaleString('en-US') + 'τ';
  };
  