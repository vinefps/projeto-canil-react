import { useState, createContext, useContext, ReactNode } from "react";

// Define o tipo para o valor do contexto
type DogValue = {
  dogItems: string;
  setItems: React.Dispatch<React.SetStateAction<string>>;
};

// Cria o contexto com um valor padrão
const DogContext = createContext<DogValue | undefined>(undefined);

// Hook personalizado para usar o contexto do Dog
export const useDogContext = (): DogValue => {
  const context = useContext(DogContext);
  if (!context) {
    throw new Error("useDogContext must be used within a DogProvider");
  }
  return context;
};

// Tipo para as props do DogProvider
interface ChildrenContextProvider {
  children: ReactNode;
}

// Provedor de contexto para o Dog
export function DogProvider({ children }: ChildrenContextProvider) {
  const [dogItems, setItems] = useState<string>("");

  return (
    <DogContext.Provider value={{ dogItems, setItems }}>
      {children}
    </DogContext.Provider>
  );
}
