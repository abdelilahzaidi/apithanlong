import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PaginatedResult } from '../interfaces/pginated-result.interface';

@Injectable()
export class AbstractService {
    protected constructor(
        protected readonly repository: Repository<any>
    ) {
    }

    async all(relations = []): Promise<any[]> {
        return this.repository.find({relations});
    }

    async paginate(page = 1, relations = []): Promise<PaginatedResult> {
        const take = 15;

        const [data, total] = await this.repository.findAndCount({
            take,
            skip: (page - 1) * take,
            relations
        });

        return {
            data: data,
            meta: {
                total,
                page,
                last_page: Math.ceil(total / take)
            }
        }
    }

    async create(data): Promise<any> {
        return this.repository.save(data);
    }
    // async findOne(condition): Promise<any> {
    //     return this.repository.findOne(condition);
    // }

    // async findOne(condition, relations = []): Promise<any> {
    //     return this.repository.findOne(condition, {relations});
    // }

    async update(id: number, data): Promise<any> {
        return this.repository.update(id, data)
    }

    async delete(id: number): Promise<any> {
        return this.repository.delete(id);
    }

    //Find a user by email
    async findOneByEmail(email : string): Promise<any> {
        return this.repository.findOne({where:{email}});
    }
    //Find a user by id
    async findOneById(id : number): Promise<any> {
        return this.repository.findOne({where:{id}});
    }
}
