import { useSelector } from "react-redux";

function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className="bg-[#CAF4FF] text-gray-700 dark:text-gray-200 dark:bg-[#242425] min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default ThemeProvider;
