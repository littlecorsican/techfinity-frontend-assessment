function CustomButton({ children, onClick, className }) {
  return (
    <button
      className={`border border-gray-400 px-4 py-2 text-black bg-gray-100 hover:bg-gray-200 rounded px-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CustomButton;
