
const Clickable = ({ children, textColor, lineColor}) => {
  return (
    <span className="flex items-center ">
      
      <div className="group cursor-pointer">
        <div
          className={`transition-all group-hover:-translate-y-2 block ${textColor}`}
        >
          {children}
        </div>
        <div className={`h-[2px] group-hover:scale-100 scale-0 transition-all ${lineColor}`}></div>
      </div>
    </span>
  );
};

export default Clickable;
