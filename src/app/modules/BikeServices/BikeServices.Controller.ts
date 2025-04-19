import { STATUS } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { BikeServices } from "./BikeServices.Services";

const CreateNewService = catchAsync(async (req, res) => {
  const result = await BikeServices.CreateServiceInDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Service record created successfully",
    success: true,
    data: result,
  });
});

const GetAllServices = catchAsync(async (req, res) => {
  const result = await BikeServices.GetAllServiceFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Service records fetched successfully",
    success: true,
    data: result,
  });
});
const GetPendingServices = catchAsync(async (req, res) => {
  console.log("hitting");
  const result = await BikeServices.GetPendingServicesFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Overdue or pending services fetched successfully",
    success: true,
    data: result,
  });
});

const GetSingleService = catchAsync(async (req, res) => {
  const result = await BikeServices.GetSingleServiceFromDB(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Service record fetched successfully",
    success: true,
    data: result,
  });
});
const UpdateServiceRecord = catchAsync(async (req, res) => {
  // console.log(req.params.status);
  const { id, status } = req.params;
  const result = await BikeServices.UpdateServiceRecord(id, status as STATUS);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Service marked as completed",
    success: true,
    data: result,
  });
});

export const BikesControllers = {
  CreateNewService,
  GetAllServices,
  GetPendingServices,
  GetSingleService,
  UpdateServiceRecord,
};
