import type { Visit } from "../types";

const VisitItem = ({ visit }: { visit: Visit }) => {
  return (
    <div className='rounded-lg bg-gray-300 p-4 w-full flex flex-col items-start'>
      <p className='text-sm'>Patient Name: {visit.patient}</p>
      <p className='text-sm'>
        Visit Date: {new Date(visit.date).toLocaleDateString()}
      </p>
      <p className='text-sm'>Patient Category: {visit.category}</p>
    </div>
  );
};

export default VisitItem;
