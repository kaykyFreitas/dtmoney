import { useState } from "react";
import Modal from "react-modal";
import { NewTransactionModal } from './components/NewTransactionModal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsProvider } from "./hooks/useTransactions";
import { GlobalStyles } from "./styles/global";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpens, setIsNewTransactionModalOpens] = useState(false);


  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpens(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpens(false);
  }

  return (
    <TransactionsProvider>
      <GlobalStyles />
      <Header onOpenNewTransactionModal={ handleOpenNewTransactionModal } />
      <Dashboard />
      <NewTransactionModal 
        isOpen={ isNewTransactionModalOpens }
        onRequestClose={ handleCloseNewTransactionModal }
      />
    </TransactionsProvider>
  );
}
