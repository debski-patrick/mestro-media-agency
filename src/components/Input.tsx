const Input = ({label, className, ...rest}: any) => {
  return (
    <div className={`${className} relative`}>
      <p className="text-xs text-gray-300">{label}</p>
      <input {...rest} className="border-none outline-none bg-transparent py-2 text-white" />
      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-300" />
    </div>
  );
};

export default Input;
