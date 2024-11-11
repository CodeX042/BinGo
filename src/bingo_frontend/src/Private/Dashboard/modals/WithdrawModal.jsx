import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSection } from "../../../Redux/slices/navigationSlice";
import bankCodes from "../../../utils.json";
import axios from "axios";
import { ImCancelCircle } from "react-icons/im";
import { BiCheckCircle } from "react-icons/bi";
import { toast } from "react-toastify";
import { withdrawWallet } from "../../../Redux/slices/walletSlice";
import { addToNotifications } from "../../../Redux/slices/notificationSlice";
import { newTransaction } from "../../../Redux/slices/transactionSlice";
import moment from "moment";
import { PulseLoader } from "react-spinners";

const WithdrawModal = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [banks, setBanks] = useState([]);
  const [amount, setAmount] = useState(0);
  const [verificationError, setVerificationError] = useState("");
  const [verificationSuccess, setVerificationSuccess] = useState("");
  const [verifyingBank, setVerifyingBank] = useState(false);
  const [withdrawing, setWithdrawing] = useState(false);
  const [accountName, setAccountName] = useState("");
  const dispatch = useDispatch();
  const { walletBalance } = useSelector((state) => state.wallet);

  const verifyBank = (accountNumber, bankName) => {
    setVerificationError("");
    setVerificationSuccess("");
    setVerifyingBank(true);
    setAccountName("");

    axios
      .get(
        `https://nubapi.com/api/verify?account_number=${accountNumber}&bank_code=${bankName?.code}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer YMf57wQAbMOKTrAuUEmcewFvrp9aYltAKxnXVgdu6ff73f2a",
          },
        }
      )
      .then((response) => {
        if (response.status === 200 && response.data?.account_name) {
          setAccountName(response.data?.account_name);
          setVerificationSuccess("Bank verified");
        } else {
          setVerificationError("Bank verification failed.");
        }
        setVerifyingBank(false);
      })
      .catch((error) => {
        setVerificationError(
          error.response?.data?.message ||
            "Verification failed. Please try again."
        );
        setVerifyingBank(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (verificationSuccess) {
      setWithdrawing(true);
      if (Number(walletBalance) < Number(amount)) {
        toast.error("Can't withdraw more than you wallet balance");
        setWithdrawing(false);
      } else {
        setTimeout(() => {
          dispatch(withdrawWallet(amount));
          dispatch(
            addToNotifications(`Withdrawal of ₦${amount} is successful`)
          );
          dispatch(
            newTransaction({
              name: "Withdrawal",
              date: moment().format("Do MMM YYYY, h:mm:ss a"),
              amount,
              status: "Completed",
            })
          );
          toast.success("Withdrawal Successful");
          dispatch(setSelectedSection("wallet"));
          setWithdrawing(false);
        }, 4000);
      }
    }
  };

  useEffect(() => {
    const sortedCodes = bankCodes.map((item) => ({
      name: item.name,
      value: JSON.stringify({ name: item.name, code: item.code }),
    }));
    setBanks(sortedCodes);
  }, []);

  useEffect(() => {
    if (accountNumber.length === 10 && bankName) {
      verifyBank(accountNumber, JSON.parse(bankName));
    }
  }, [accountNumber, bankName]);

  return (
    <div className="max-w-lg w-full sm:min-w-[600px] md:min-w-[800px] lg:min-w-[1000px] bg-white shadow-2xl shadow-gray-900 rounded-lg p-6 sm:p-8 lg:p-10 border border-blue-300">
      <h2 className="text-2xl font-semibold text-left mb-6">
        Withdraw to your local bank
      </h2>
      <div className="mb-6">
        <div>
          <label>Bank Name</label>
          <select
            className="w-full border border-gray-300 rounded-lg p-3 mb-4"
            onChange={(e) => setBankName(e.target.value)}
          >
            <option value="">Select Bank</option>
            {banks.map((bank) => (
              <option value={bank.value} key={bank.name}>
                {bank.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Account Number</label>
          <input
            type="text"
            placeholder="Enter Account Number"
            className="w-full border border-gray-300 rounded-lg p-3 mb-2"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter amount to withdraw"
            className="w-full border border-gray-300 rounded-lg p-3 mb-2"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>

      {accountName && <div className="text-md mb-4">{accountName}</div>}

      {verifyingBank && <div className="mb-4 text-blue-500">Verifying...</div>}
      {verificationError && (
        <div className="flex mb-4 gap-2 items-center text-red-500">
          <ImCancelCircle /> <span>{verificationError}</span>
        </div>
      )}
      {verificationSuccess && (
        <div className="flex mb-4 gap-2 items-center text-green-500">
          <BiCheckCircle /> <span>{verificationSuccess}</span>
        </div>
      )}

      <button
        className="bg-black text-white py-3 w-full rounded-lg font-semibold hover:bg-gray-800 transition disabled:opacity-25 disabled:cursor-not-allowed"
        onClick={handleSubmit}
        disabled={!amount || !accountName || !bankName}
      >
        {withdrawing ? <PulseLoader size={10} color="#fff" /> : "Withdraw"}
      </button>
    </div>
  );
};

export default WithdrawModal;
