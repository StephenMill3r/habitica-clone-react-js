import React from 'react';
import {toast} from "react-toastify";

export const useNotification = () => {


	const showSuccessNotification = (successMessage: React.ReactNode) => {
		toast.success((successMessage))
	};

	const showErrorNotification = (errorMessage: React.ReactNode) => {
		toast.error((errorMessage))
	};


	return {showSuccessNotification, showErrorNotification};
};

