export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="prose dark:prose-invert max-w-none w-full mb-10">
      {children}
    </article>
  );
}
