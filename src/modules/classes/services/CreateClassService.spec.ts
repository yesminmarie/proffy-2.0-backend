import FakeClassesRepository from '../repositories/fakes/FakeClassesRepository';
import CreateClassService from './CreateClassService';

describe('CreateClass', () => {
    it('should be able to create a new class', async () => {
        const fakeClassesRepository = new FakeClassesRepository();
        const createClass = new CreateClassService(fakeClassesRepository);

        const classData = await createClass.execute({
            user_id: '123123',
            subject: 'Matemática',
            cost: 200,
        });

        expect(classData).toHaveProperty('id');
        expect(classData.user_id).toBe('123123');
    });
});
