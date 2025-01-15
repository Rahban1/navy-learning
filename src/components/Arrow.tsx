export const Arrow = ({ size = 6, rotation = 0, color = "text-gray-800" }) => {
  return (
    <div>
      <span
        className={`font-bold ${color}`}
        style={{ 
          display: 'inline-block', 
          fontSize: `${size * 2}rem`,
          lineHeight: '1',
          transform: `rotate(${rotation}deg)` 
        }} 
      >
        &rarr;
      </span>
    </div>
  );
};

