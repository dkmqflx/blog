export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <article className="prose dark:prose-invert">{children}</article>;
}
