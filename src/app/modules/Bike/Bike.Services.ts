import { StatusCodes } from "http-status-codes";
import { ValitedError } from "../../middlewares/validateRequest";
import { prisma } from "../../shared/prisma";
import { TCreateBike } from "./Bike.Interface";

const CreateBikeInDB = async (payload: TCreateBike) => {
  console.log(payload);

  const isCustomerExists = await prisma.customer.findUnique({
    where: {
      customerId: payload.customerId,
    },
  });
  console.log(isCustomerExists);

  if (!isCustomerExists) {
    throw new ValitedError(StatusCodes.BAD_REQUEST, "Customer not found");
  }
  const result = await prisma.bike.create({
    data: {
      brand: payload.brand,
      model: payload.model,
      year: payload.year,
      customer: {
        connect: {
          customerId: payload.customerId,
        },
      },
    },
  });
  console.log(result);
  return result;
};

const GetAllBikesFromDB = async () => {
  const result = await prisma.bike.findMany();
  return result;
};
const GetSingleBikeFromDB = async (id: string) => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
  });
  return result;
};

export const BikeServices = {
  CreateBikeInDB,
  GetAllBikesFromDB,
  GetSingleBikeFromDB,
};
