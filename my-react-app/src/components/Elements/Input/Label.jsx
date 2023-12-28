const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <lable
      htmlFor={htmlFor}
      className="block text-slate-700 text-sm font-bold mb-2"
    >
      {children}
    </lable>
  );
};

export default Label;
