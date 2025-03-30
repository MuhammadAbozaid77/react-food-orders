export default function Table({ children }) {
  return (
    <div className="w-full overflow-x-auto rounded-tl-[12px] rounded-tr-[12px]  text-primary shadow-md">
      <table className="w-full text-center text-sm bg-white">{children}</table>
    </div>
  );
}

function TableHeader({ children }) {
  return <thead className="bg-red-700">{children}</thead>;
}

function TableHead({ children }) {
  return <th className="p-4 text-[20px] capitalize text-white">{children}</th>;
}

/* ------------------------------------------------------------ */
function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
  return <tr className=" odd:bg-transparent even:bg-gray-200">{children}</tr>;
}

function TableCell({ children }) {
  return <td className="p-4">{children}</td>;
}

/* ------------------------------------------------------------ */
function TableFooter({ children }) {
  return <tfoot>{children}</tfoot>;
}

/* ------------------------------------------------------------ */
Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Head = TableHead;
Table.Footer = TableFooter;
