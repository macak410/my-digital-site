export const metadata = {
  title: "Tomislav Portfolio",
  description: "Frontend developer portfolio by Tomislav",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}