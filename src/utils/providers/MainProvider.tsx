// ==> Contexts
import { ConfigProvider } from "@utils/providers/ConfigProvider";
import { TodoProvider } from "@utils/providers/TodoProvider";

interface MainProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const MainProvider = ({ children }: MainProviderProps) => (
  <ConfigProvider>
    <TodoProvider>{children}</TodoProvider>
  </ConfigProvider>
);
