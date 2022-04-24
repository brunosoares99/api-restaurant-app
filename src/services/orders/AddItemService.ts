import prismaClient from "../../prisma";

interface AddItemRequest {
  amount: number;
  order_id: string;
  product_id: string;
}

class AddItemService {
  async  execute({ amount, order_id, product_id }: AddItemRequest){
    const item = await prismaClient.item.create({
      data:{
        amount: amount,
        order_id: order_id,
        product_id: product_id
      }
    })
    return item;
  };
};

export { AddItemService };