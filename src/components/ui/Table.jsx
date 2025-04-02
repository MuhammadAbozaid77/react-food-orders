export default function Table({ children }) {
  return (
    <div className="w-full overflow-x-auto  overflow-y-hidden rounded-tl-[10px] rounded-tr-[10px]  text-primary shadow-md">
      <div role="table" className="text-center text-sm bg-white w-full">
        {children}
      </div>
    </div>
  );
}

function TableHeader({ children }) {
  return <div className="bg-red-700">{children}</div>;
}

function TableHead({ children }) {
  return (
    <div className="p-4 text-[18px]  w-full text-center capitalize text-white">
      {children}
    </div>
  );
}

/* ------------------------------------------------------------ */
function TableBody({ children }) {
  return <div>{children}</div>;
}

function TableRow({ children }) {
  return (
    <div className=" odd:bg-transparent even:bg-gray-200 flex justify-between items-center w-full">
      {children}
    </div>
  );
}

function TableCell({ children }) {
  return <div className="p-4 w-[100%]">{children}</div>;
}

/* ------------------------------------------------------------ */
function TableFooter({ children }) {
  return <div className=" w-full p-5">{children}</div>;
}

/* ------------------------------------------------------------ */
Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Head = TableHead;
Table.Footer = TableFooter;
