const Shimmer = () => {
  const shimmerArray = new Array(6).fill(0);
  return (
    <div className="flex flex-wrap">
      {shimmerArray.map((val, index) => {
        return <div key={index} className="shimmer-card"></div>;
      })}
    </div>
  );
};

export default Shimmer;
