import { STATUS } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { ValitedError } from "../../middlewares/validateRequest";
import { prisma } from "../../shared/prisma";
import { TCreateServiceRecord } from "./BikeServices.Interface";

const CreateServiceInDB = async (payload: TCreateServiceRecord) => {
  console.log(payload);
  // Checking is customer exists or not
  const isCustomerExists = await prisma.bike.findUnique({
    where: {
      bikeId: payload.bikeId,
    },
  });
  console.log(isCustomerExists);

  if (!isCustomerExists) {
    throw new ValitedError(StatusCodes.BAD_REQUEST, "Bike not found");
  }
  const result = await prisma.serviceRecord.create({
    data: {
      description: payload.description,
      serviceDate: payload.serviceDate,
      bike: {
        connect: {
          bikeId: payload.bikeId,
        },
      },
    },
  });
  console.log(result);
  return result;
};

const GetAllServiceFromDB = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};
const GetPendingServicesFromDB = async () => {
  console.log("hitting");
  const sevenDaysBeforeDateFromToday = new Date();
  sevenDaysBeforeDateFromToday.setDate(
    sevenDaysBeforeDateFromToday.getDate() - 7
  );
  const result = await prisma.serviceRecord.findMany({
    where: {
      AND: [
        {
          OR: [
            {
              status: {
                in: ["pending", "in_progress"],
              },
            },
          ],
        },
        {
          serviceDate: {
            lt: sevenDaysBeforeDateFromToday,
          },
        },
      ],
    },
  });
  return result;
};
const GetSingleServiceFromDB = async (id: string) => {
  const result = await prisma.serviceRecord.findUnique({
    where: {
      serviceId: id,
    },
  });
  return result;
};
const UpdateServiceRecord = async (
  id: string,
  status: STATUS | "completed"
) => {
  console.log(status);
  const newStatus = status === "completed" ? "done" : status;
  const result = await prisma.serviceRecord.update({
    where: {
      serviceId: id,
    },
    data: {
      status: newStatus,
    },
  });
  return result;
};

export const BikeServices = {
  CreateServiceInDB,
  GetAllServiceFromDB,
  GetSingleServiceFromDB,
  UpdateServiceRecord,
  GetPendingServicesFromDB,
};
