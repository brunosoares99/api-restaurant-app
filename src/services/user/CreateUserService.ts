import prismaClient from "../../prisma";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({name, email, password}: UserRequest){

    if(!email) throw new Error('Invalid e-mail');

    const emailAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    });

    if(emailAlreadyExists) throw new Error("Email already exists")

    const user = await prismaClient.user.create({
      data:{
        name: name,
        email: email,
        password: password,
      }
    })

    return { name: name}
  };
};

export { CreateUserService };