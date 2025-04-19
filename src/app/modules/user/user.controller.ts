import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { CustomerServices } from "./user.service";

const CreateNewCustomer = catchAsync(async (req, res) => {
  const result = await CustomerServices.CreateCustomerInDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "Customer created successfully",
    success: true,
    data: result,
  });
});

const GetAllCustomers = catchAsync(async (req, res) => {
  const result = await CustomerServices.GetAllCustomersFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Customers fetched successfully",
    success: true,
    data: result,
  });
});

const GetSingleCustomer = catchAsync(async (req, res) => {
  const result = await CustomerServices.GetSingleCustomerFromDB(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Customer fetched successfully",
    success: true,
    data: result,
  });
});

const UpdateCustomerInfo = catchAsync(async (req, res) => {
  const result = await CustomerServices.UpdateCustomerFromDB(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Customer updated successfully",
    success: true,
    data: result,
  });
});

const DeleteCustomerInfo = catchAsync(async (req, res) => {
  const result = await CustomerServices.DeleteCustomerFromDB(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Customer deleted successfull",
    success: true,
  });
});

export const CustomersControllers = {
  CreateNewCustomer,
  GetAllCustomers,
  GetSingleCustomer,
  UpdateCustomerInfo,
  DeleteCustomerInfo,
};
