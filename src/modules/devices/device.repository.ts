import { prisma } from "@/database/prisma";
import { CreateDevice } from "./device.schema";

export const deviceRepository = {
  findAll: () => prisma.device.findMany(),
  create: (data: CreateDevice) => prisma.device.create({ data }),
};
