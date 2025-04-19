import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { BikeServices } from "./Bike.Services";

const CreateNewBike = catchAsync(async (req, res) => {
  const result = await BikeServices.CreateBikeInDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Bike added  successfully",
    success: true,
    data: result,
  });
});

const GetAllBikes = catchAsync(async (req, res) => {
  const result = await BikeServices.GetAllBikesFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Bikes fetched successfully",
    success: true,
    data: result,
  });
});

const GetSingleBike = catchAsync(async (req, res) => {
  const result = await BikeServices.GetSingleBikeFromDB(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Bike fetched successfully",
    success: true,
    data: result,
  });
});

export const BikesControllers = {
  CreateNewBike,
  GetAllBikes,
  GetSingleBike,
};
