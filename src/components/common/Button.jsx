const Button = ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    ...props 
  }) => {
    const baseStyles = 'rounded-full font-medium transition-all duration-300';
    
    const variants = {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white',
      secondary: 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
      outline: 'border-2 border-white text-white hover:bg-white/10'
    };
  
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };
  
    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };

  export default Button;