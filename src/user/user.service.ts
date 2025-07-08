
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user/user';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(name: string) {
    const user = this.repo.create({ name });
    return this.repo.save(user);
  }

  findAll() {
    return this.repo.find();
  }
}
