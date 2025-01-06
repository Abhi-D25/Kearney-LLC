// src/components/common/Card.jsx
const Card = ({ 
    title, 
    subtitle, 
    children, 
    className = '',
    imageUrl,
    ...props 
  }) => {
    return (
      <div 
        className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}
        {...props}
      >
        {imageUrl && (
          <div className="relative h-48">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-6">
          {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
          {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
          {children}
        </div>
      </div>
    );
  };

  export default Card;