const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-600 text-white text-sm py-2 text-center">
      <p>&copy; {year} Global Rank. All rights reserved.</p>
    </footer>
  );
};
export default Footer;
