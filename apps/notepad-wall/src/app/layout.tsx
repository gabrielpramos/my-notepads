import "./global.css";

export const metadata = {
  description: "Generated by create-nx-workspace",
  title: "Welcome to notepad-wall",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
