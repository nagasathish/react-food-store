const Shimmer = () => {
  const shimmerArray = new Array(6).fill(0);
  return (
    <div className="shimmer-container">
      {shimmerArray.map((val, index) => {
        return <div key={index} className="shimmer-card"></div>;
      })}
    </div>
  );
};

export default Shimmer;
