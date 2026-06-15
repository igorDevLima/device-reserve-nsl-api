import { ID } from "@/types";
import { deviceRepository } from "./device.repository";
import { CreateDevice } from "./device.schema";
import { NotFoundError } from "@/common/helpers/error";

export const deviceService = {
  getAll: () => deviceRepository.findAll(),

  getById: (id: ID) => deviceRepository.findById(id),

  create: (data: CreateDevice) => deviceRepository.create(data),

  update: (id: ID, data: CreateDevice) => deviceRepository.update(id, data),

  delete: async (id: ID) => {
    const device = await deviceRepository.findById(id);

    if (!device) throw new NotFoundError("Dispositivo não encontrado");

    return deviceRepository.delete(id);
  },
};
