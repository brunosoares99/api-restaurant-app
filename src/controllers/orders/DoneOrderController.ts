import { Request, Response } from "express";
import { DoneOrderService } from "../../services/orders/DoneOrderService";

class DoneOrderController{
  async handle(req: Request, res: Response) {
    const { order_id }= req.body

    if(!order_id) throw new Error("Order id is required.")

    const doneOrderService = new DoneOrderService();
    const order = await doneOrderService.execute({
      order_id
    })

    return res.json(order)
  }
}

export { DoneOrderController }