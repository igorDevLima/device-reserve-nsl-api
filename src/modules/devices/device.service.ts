import { ID } from "@/types";
import { deviceRepository } from "./device.repository";
import { CreateDevice } from "./device.schema";

export const deviceService = {
  getAll: () => deviceRepository.findAll(),

  create: (data: CreateDevice) => deviceRepository.create(data),

  delete: (id:ID) => deviceRepository.delete(id)
};
