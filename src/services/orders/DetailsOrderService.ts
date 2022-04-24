import prismaClient from "../../prisma";

interface DetailsRequest {
  order_id: string
}

class DetailsOrderService {
  async execute({ order_id }: DetailsRequest){

    const orders = await prismaClient.item.findMany({
      where:{
        order_id: order_id
      },
      include: {
        product: true,
        order: true
      }
    })

    return orders; 
  };
};

export { DetailsOrderService };