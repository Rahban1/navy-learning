export const Arrow = ({ length = 55, width = 40, rotation = 0, color = "black" }) => {
  return (
    <div
      style={{
        display: 'inline-block',
        transform: `rotate(${rotation}deg)`
      }}
    >
      <svg
        width={length} 
        height={width} 
        viewBox="0 0 50 10" 
        xmlns="http://www.w3.org/2000/svg"
        fill= "black"
      >
        <line x1="0" y1="5" x2="120" y2="5" stroke={color} strokeWidth="2" />
        <polygon points="40,0 50,5 40,10" fill={color} />
      </svg>
    </div>
  );
};
