export default function ModalHeader({ ...props }) {
  const { title, description } = props;
  return (
    <div className="px-2 pr-14">
      <h4 className="mb-2 text-2xl font-semibold text-primary dark:text-white/90">
        {title}
      </h4>
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
        {description}
      </p>
    </div>
  );
}
