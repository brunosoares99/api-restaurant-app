import { Request, Response } from "express";
import { AddItemService } from "../../services/orders/AddItemService";

class AddItemController {
  async handle(req: Request, res: Response){
    const {amount, order_id, product_id } = req.body
    if(!amount || !order_id || !product_id) {
      throw new Error("All fields is required")
    }

    const addItemService = new AddItemService();

    const item = await addItemService.execute({
      amount,
      order_id,
      product_id
    })
    
    return res.json(item)
  }
}

export { AddItemController }