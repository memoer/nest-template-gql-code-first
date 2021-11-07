import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Date', (type) => Date)
export class DateScalar implements CustomScalar<number, Date> {
  description = 'Date custom scalar type';

  parseValue(value: number): Date {
    return new Date(value); // value from the client
  }

  serialize(value: Date): number {
    return value.getTime(); // value sent to the client
  }

  parseLiteral(ast: ValueNode): Date | null {
    if (ast.kind === Kind.STRING) {
      const parsed = Number(ast.value);
      return new Date(isNaN(parsed) ? ast.value : parsed);
    } else if (ast.kind === Kind.INT) {
      return new Date(Number(ast.value));
    }
    return new Date();
  }
}