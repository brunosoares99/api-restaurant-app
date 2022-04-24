import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/orders/RemoveOrderService";

class RemoveOrderController{
  async handle(req: Request, res: Response) {
    const order_id= req.query.order_id as string;

    if(!order_id) throw new Error("The Order id is required.")

    const removeOrderService = new RemoveOrderService();

    const removeOrder = await removeOrderService.execute({
      order_id
    })

    return res.json(removeOrder)
  }
}

export { RemoveOrderController }