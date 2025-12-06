import React from 'react';

const ComicButton = ({ children, href, onClick, variant = 'filled', className = '', ...props }) => {
  const isOutline = variant === 'outline';
  
  // Base classes for the top layer
  const baseClasses = "relative flex items-center gap-2 px-8 py-4 font-black uppercase tracking-wider border-2 transition-transform duration-100 ease-out hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[6px] active:translate-y-[6px] z-10";
  
  // Variant styles
  const styles = isOutline 
    ? "bg-black text-white border-[#4ade80] hover:bg-[#0f291a]" 
    : "bg-[#4ade80] text-black border-[#4ade80] hover:bg-[#22c55e]";

  // Shadow color
  const shadowColor = isOutline ? "bg-[#4ade80]" : "bg-white";

  const Component = href ? 'a' : 'button';

  return (
    <Component 
      href={href} 
      onClick={onClick}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      className={`relative inline-block mr-2 mb-2 group cursor-pointer no-underline ${className}`}
      {...props}
    >
      {/* Shadow Layer */}
      <div className={`absolute top-[6px] left-[6px] w-full h-full ${shadowColor} z-0`} />
      
      {/* Button Face */}
      <div className={`${baseClasses} ${styles}`}>
        {children}
      </div>
    </Component>
  );
};

export default ComicButton;
