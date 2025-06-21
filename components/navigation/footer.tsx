const Footer = () => {
  return (
    <footer className="shadow-[0_-1px_2px_0_rgba(0,0,0,0.05)] bg-white dark:bg-black dark:border-t dark:border-slate-700 z-10">
      <div className="flex items-center justify-center container mx-auto py-4 px-2 md:px-0">
        <p className="text-lg">
          {new Date().getFullYear()} E-STORE.All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
