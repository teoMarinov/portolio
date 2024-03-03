
const Links = ({ children, text, link, onClick = () => { } }) => {
  return (
    <span className="flex items-center ">
      {children}
      <div className="group cursor-pointer">
        <a
          className="text-gray-100 text-2xl transition-all group-hover:-translate-y-2 block"
          onClick={(e) => {
            onClick();
            e.stopPropagation();
          }}
          target="_blank"
          rel="noopener noreferrer"
          href={link}
        >
          {text}
        </a>
        <div className="h-[2px] group-hover:scale-100 scale-0 transition-all  bg-gray-100"></div>
      </div>
    </span>
  );
};

export default Links;
