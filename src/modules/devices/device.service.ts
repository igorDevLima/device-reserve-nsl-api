import { deviceRepository } from "./device.repository";
import { CreateDevice } from "./device.schema";

export const deviceService = {
  getAll: () => deviceRepository.findAll(),

  create: (data: CreateDevice) => deviceRepository.create(data),
};
