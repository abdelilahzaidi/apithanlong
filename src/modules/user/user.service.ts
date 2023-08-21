import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract/abstract.service';
import { UserEntity } from 'src/common/entities/user';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends AbstractService {
    constructor(
        @InjectRepository(UserEntity) private readonly userRepository : Repository<UserEntity>
    ){
        super(userRepository);
    }
}
