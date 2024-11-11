import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fundWallet } from "../../../Redux/slices/walletSlice";
import { addToNotifications } from "../../../Redux/slices/notificationSlice";
import { updateTransaction } from "../../../Redux/slices/transactionSlice";
import { toast } from "react-toastify";
const TransactionHistory = () => {
  const { transactions } = useSelector((state) => state.transaction);
  const dispatch = useDispatch();

  const handleConfirm = (id, amount) => {
    dispatch(fundWallet(amount));
    dispatch(
      addToNotifications(`Pickup confirmed, your wallet has been funded`)
    );
    dispatch(updateTransaction({ id, status: "Completed" }));
    toast.success("Pickup confirmed");
  };

  return (
    <div className="max-w-lg w-full sm:min-w-[600px] md:min-w-[800px] lg:min-w-[1000px] bg-white shadow-2xl shadow-gray-900 rounded-lg p-6 sm:p-8 lg:p-10 border border-blue-300">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-center mb-6">
        Transaction History
      </h2>

      {/* Transaction List */}
      <div className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex flex-col sm:flex-row justify-between items-center py-4"
          >
            <div className="text-left sm:text-left mb-2 sm:mb-0">
              <h3 className="font-semibold">{transaction.name}</h3>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
            <div className="text-right sm:text-right">
              <p className="font-semibold">₦{parseInt(transaction?.amount)}</p>
              <div className="flex gap-4">
                <p
                  className={`text-sm ${
                    transaction.status === "Completed"
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  {transaction.status}
                </p>
                <p
                  className="underline cursor-pointer text-blue-500 text-sm"
                  onClick={() =>
                    handleConfirm(transaction?.id, transaction?.amount)
                  }
                >
                  {transaction.status === "Pending" && "Confirm pickup"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
