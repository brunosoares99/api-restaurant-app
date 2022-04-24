import { Request, Response } from 'express';
import { ListCategoriesService } from '../../services/category/ListCategoriesService';

class ListCategoriesController {
  async handle(req: Request, res: Response){
    const listCategoriesService = new ListCategoriesService();

    const categories = await listCategoriesService.execute();

    return res.json({categories});
  }
}

export { ListCategoriesController }