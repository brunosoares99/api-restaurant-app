import { Request, Response } from "express";
import { SaveOrderService } from "../../services/orders/SaveOrderService";

class SaveOrderController{
  async handle(req: Request, res: Response) {
    const { order_id }= req.body

    if(!order_id) throw new Error("Order id is required.")

    const saveOrderService = new SaveOrderService();
    const order = await saveOrderService.execute({
      order_id
    })

    return res.json(order)
  }
}

export { SaveOrderController }