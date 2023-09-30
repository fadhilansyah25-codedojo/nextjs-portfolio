type TimelineElementProps = {
  title: string;
  date: string;
  location: string;
  description: string;
  icon: React.ReactElement;
};

const TimelineElement = ({
  title,
  date,
  location,
  description,
  icon,
}: TimelineElementProps) => (
  <li
    className="mb-10 ml-8 rounded-lg bg-white px-4 py-4 shadow-md dark:border 
    dark:border-white/20 dark:bg-gray-900"
  >
    <span
      className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-4 
      ring-white dark:bg-blue-900 dark:ring-gray-900"
    >
      {icon}
    </span>
    <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
      {title}
    </h3>
    <p className="my-1 text-sm">{location}</p>
    <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      {date}
    </time>
    <div
      id="experience-decs"
      className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  </li>
);

export default TimelineElement;
