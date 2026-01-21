import type { Visit } from "../types";

const VisitItem = ({ visit }: { visit: Visit }) => {
  const getBorderClass = () => {
    switch (visit.category) {
      case "A":
        return "border-red-500 border-2 hover:bg-red-200";
      case "B":
        return "border-green-500 border-2 hover:bg-green-200";
      case "C":
        return "border-yellow-500 border-2 hover:bg-yellow-200";
      case "D":
        return "border-purple-500 border-2 hover:bg-purple-200";
      default:
        return "";
    }
  };

  return (
    <div
      className={`rounded-lg bg-gray-300 p-4 w-full flex flex-col items-start hover:bg-gray-200 transition cursor-pointer border-1 border-gray-600 shadow-md ${getBorderClass()}`}
    >
      <p className='text-sm'>Patient Name: {visit.patient}</p>
      <p className='text-sm'>
        Visit Date: {new Date(visit.date).toLocaleDateString()}
      </p>
      <p className='text-sm'>Patient Category: {visit.category}</p>
    </div>
  );
};

export default VisitItem;
