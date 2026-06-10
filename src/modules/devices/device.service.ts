import { ID } from "@/types";
import { deviceRepository } from "./device.repository";
import { CreateDevice } from "./device.schema";
import { NotFoundError } from "@/common/helpers/error";

export const deviceService = {
  getAll: () => deviceRepository.findAll(),

  create: (data: CreateDevice) => deviceRepository.create(data),

  delete: (id:ID) => {
    const device = deviceRepository.findById(id)

    if (!device) throw new NotFoundError('Dispositivo não encontrado')
      
    deviceRepository.delete(id)
  }
};
