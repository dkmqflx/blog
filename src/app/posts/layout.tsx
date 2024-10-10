export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="prose dark:prose-invert mb-10">{children}</article>
  );
}
