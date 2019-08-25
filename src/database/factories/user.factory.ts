import factory from "factory-girl";
import faker from "faker";
import User, { UserInterface } from "../../app/models/User";

factory.define<UserInterface>("User", User, {
  name: faker.lorem.words(),
  username: faker.lorem.words(),
  active: faker.random.boolean()
});

export default factory;
