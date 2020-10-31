import Class from '../infra/typeorm/entities/Class';
import ICreateClassDTO from '../dtos/ICreateClassDTO';

export default interface IClassesRepository {
    create(data: ICreateClassDTO): Promise<Class>;
}
