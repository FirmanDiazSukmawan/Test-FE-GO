type SkeletonProps = {
    className?: string;
  };
  
  const Skeleton = ({ className = "" }: SkeletonProps) => {
    return (
      <div
        className={`bg-gray-300 animate-pulse rounded-md ${className}`}
      />
    );
  };
  
  export default Skeleton;
  