import { cva } from "class-variance-authority";

const tableRowStyle = cva({
  variants: {
    intent: {
      primary: "bg-blue-500",
      secondary: "bg-red-500",
    },
    size: {
      small: "text-sm",
      medium: "text-md",
    },
  },
});

export const Table = () => {
  return (
    <div>
      <h1>Table</h1>
    </div>
  );
};
