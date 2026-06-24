export const convertStringArgToNumber = (Arg: string | string[]) => {
  const id = Array.isArray(Arg) ? Arg[0] : Arg;

  return Number(id);
};
