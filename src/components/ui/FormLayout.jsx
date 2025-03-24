export default function FormLayout({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="w-[100%]">
      {children}
    </form>
  );
}

function FormHeader({ children }) {
  return (
    <div className="text-[30px] font-bold bg-red-700 rounded-[15px] text-white p-5 ">
      {children}
    </div>
  );
}

function FormBody({ children }) {
  return <div className="py-[20px]">{children}</div>;
}

function FormFooter({ children }) {
  return <div className=" pt-2">{children}</div>;
}

// Attach subcomponents to the main Form component
FormLayout.Header = FormHeader;
FormLayout.Body = FormBody;
FormLayout.Footer = FormFooter;
