const LayoutAuth = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen w-full flex flex-1 justify-center items-center bg-login-image">
      { children }
    </div>
  );
};

export default LayoutAuth;
