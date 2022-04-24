import { Request, Response } from "express";
import { CreateOrderService } from "../../services/orders/CreateOrderService";

class CreateOrderController{
  async handle(req: Request, res: Response) {
    const { name, table }= req.body

    if(!table) throw new Error("Table's field is required.")

    const createOrderService = new CreateOrderService();
    const order = await createOrderService.execute({
      name, 
      table
    })

    return res.json(order)
  }
}

export { CreateOrderController }