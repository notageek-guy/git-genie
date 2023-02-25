const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`
    bg-white
    shadow-md
    rounded-md
    p-4
    sm:p-6
    md:p-8
    lg:p-10
    dark:bg-gray-800
    max-w-xl
    mx-auto
    w-[90%]
    
    sm:px-4
    sm:py-6
    
  
  `}
    >
      {children}
    </div>
  );
};

export default Card;
