const SectionTitle = ({ children }: { children: React.ReactChild }) => {
  return (
    <div className="flex items-center w-full py-8">
      <h1 className="w-1/3 md:w-2/12 text-[10px] tracking-[0.2rem]">{children}</h1>
      <span className="w-2/3 md:w-10/12 h-[1px] line-gradient" />
    </div>
  );
};

export default SectionTitle;
