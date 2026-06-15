import { prisma } from "@/database/prisma";
import { CreateDevice } from "./device.schema";
import { ID } from "@/types";

export const deviceRepository = {
  findAll: () => prisma.device.findMany(),
  findById: (id: ID) => prisma.device.findUnique({ where: { id } }),
  update: (id: ID, data: CreateDevice) =>
    prisma.device.update({ where: { id }, data }),
  create: (data: CreateDevice) => prisma.device.create({ data }),
  delete: (id: ID) => prisma.device.delete({ where: { id } }),
};
