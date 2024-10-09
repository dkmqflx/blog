type MetaProps = {
  title: string;
  description: string;
  date: string;
  route: string;
};

const Meta = ({ metadata }: { metadata: MetaProps }) => {
  const { title, date } = metadata;

  return (
    <>
      <h1 className="mb-3">{title}</h1>
      <div className="text-xs text-gray-500">{date.toString()}</div>
    </>
  );
};

export default Meta;
