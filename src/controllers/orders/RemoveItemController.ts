import { Request, Response } from "express";
import { RemoveItemService } from "../../services/orders/RemoveItemService";

class RemoveItemController{
  async handle(req: Request, res: Response) {
    const item_id = req.query.item_id as string;

    if(!item_id) throw new Error("The Item id is required.")

    const removeItemService = new RemoveItemService();

    const removeOrder = await removeItemService.execute({
      item_id
    })

    return res.json(removeOrder)
  }
}

export { RemoveItemController }