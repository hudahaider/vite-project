const FooterSection = () => {
  return (
    <footer className="bg-purple-950 p-8">
      <div className="text-center text-gray-400 text-md">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};
export default FooterSection;
