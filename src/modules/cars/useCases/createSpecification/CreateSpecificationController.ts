import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
    async handle(resquest: Request, response: Response): Promise<Response> {
        const { name, description } = resquest.body;

        const createSpecificationUseCase = container.resolve(
            CreateSpecificationUseCase
        );

        await createSpecificationUseCase.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateSpecificationController };
