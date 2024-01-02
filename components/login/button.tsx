export function Button({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "submit" | "button" | "reset";
}) {
  return <button type={type}>{children}</button>;
}
