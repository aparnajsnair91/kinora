type PageHeaderProps = {
  icon: string;
  title: string;
  description: string;
};

export default function PageHeader({
  icon,
  title,
  description,
}: PageHeaderProps) {
  return (
    <header className="mb-6">
      <h1 className="text-3xl font-bold text-gray-900">
        {icon} {title}
      </h1>

      <p className="mt-2 text-gray-700">
        {description}
      </p>
    </header>
  );
}