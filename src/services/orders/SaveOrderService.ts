import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}

class SaveOrderService {
  async  execute({ order_id }: OrderRequest){
    const items = await prismaClient.item.count({
      where:{
        order_id: order_id
      }
    })
    if(items < 1) throw new Error("A ordem precisa de no minimo um item para ser salva.");
    const order = await prismaClient.order.update({
      where:{
        id: order_id
      },
      data:{
        draft: false
      }
    })


    return order;
  };
};

export { SaveOrderService };