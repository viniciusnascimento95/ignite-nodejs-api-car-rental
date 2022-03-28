import { getRepository, Repository } from "typeorm";

import { Specification } from "../../entities/Specification";
import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    // private specifications: Specification[];

    private repository: Repository<Specification>;

    constructor() {
        // this.specifications = [];
        this.repository = getRepository(Specification);
    }

    async create({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({ name, description });

        await this.repository.save(specification);

        // const specification = new Specification();
        // Object.assign(specification, {
        //     name,
        //     description,
        //     created_at: new Date(),
        // });
        // this.specifications.push(specification);
    }

    async findByName(name: string): Promise<Specification> {
        // const specification = this.specifications.find(
        //     (specification) => specification.name === name
        // );
        const specification = this.repository.findOne({ name });

        return specification;
    }
}
export { SpecificationsRepository };
