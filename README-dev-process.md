# Dev Process [ 개발 진행 순서 ]

1. `yarn gen:module <domainName>` 실행
   - 실행 후, `<domainName>.module.ts` 파일에서 import 경로 변경할 것
2. Graphql Schema 작성 [ *.gql 작성 ]
3. `yarn gen:dto <module_name>` 실행
   - 작성한 GraphQL Schema 기반으로 DTO 를 만들어준다.
   - `<module_name>` 없이 실행시, 모든 모듈의 DTO 파일을 생성해준다.
4. 각 모듈의 dto 폴더 안에 `<module_name>-gql.dto.ts` 의 파일이 생성됩니다.
   - 해당 파일에 모든 DTO Interface가 존재

- Entity 등록은 `libs/config/src/database/database.module.ts`의 `registerEntity`의 인자로 모듈 이름을 적습니다 [ 예) registerEntity("user", "banner") ]
- entity 작성시, Enum은 `*.entity.ts`에서 작성하지 않고, `*.gql`에 직접 enum을 작성하고, 만들어진 `*-gql.dto.ts`에서 enum을 가져다 사용합니다.
