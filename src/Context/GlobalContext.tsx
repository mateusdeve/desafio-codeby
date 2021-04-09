import { createContext, useState } from "react";

interface Props {
  children?: React.ReactNode;
}

interface GlobalContextData {
  isShippingFree: boolean;
  setIsShippingFree: (isShippingFree:boolean) => void;
}
 
const initialState = {
  isShippingFree: true,
  setIsShippingFree: () =>{},
}
 
export const GlobalContext = createContext<GlobalContextData>(initialState);

export function GlobalProvider({children}:Props) {
  const [isShippingFree, setIsShippingFree] = useState(initialState.isShippingFree);
  return (
    <GlobalContext.Provider value={{isShippingFree, setIsShippingFree}} >
      {children}
    </GlobalContext.Provider>
  );
}