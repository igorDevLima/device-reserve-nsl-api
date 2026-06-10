import { prisma } from "@/database/prisma";
import { CreateDevice } from "./device.schema";
import { ID } from "@/types";

export const deviceRepository = {
  findAll: () => prisma.device.findMany(),
  create: (data: CreateDevice) => prisma.device.create({ data }),
  delete: (id: ID) => prisma.device.delete({ where: { id: id } }),
};
