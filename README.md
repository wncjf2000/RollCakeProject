# RollCakeProject
### _롤케이크 프로젝트_

경상대 박주철, 경상대 황승현

- 웹사이트 제작에는 React.js와 Node.js 위주 제작
- 커밋 잘못해서 프로젝트 터질 수 있으니 별도의 백업본은 각자 지니고 있을 것
- 가급적이면 branche를 만들고 그곳에 올린 다음, 중복이나 문제 있는지를 확인하고 합병 여부를 선택할 것

|       | Hangle Name       | in DB Name        | Type          | Key |
|-------|-------------------|-------------------|---------------|-----|
| 1     | 소프트웨어 ID     | DB_SoftID         | Text string   | P.K |
| 2     | 소프트웨어 명     | DB_SoftName       | Text string   |     |
| 3     | 개발사 명         | DB_DevName        | Text string   |     |
| 4     | 갱신 시간         | DB_UpdateTime     | Date and time |     |
| 5     | 통화              | DB_Currency       | Text string   |     |
| 6     | 정식 가격         | DB_RegCost        | integer       |     |
| 7     | 할인 가격         | DB_DisCost        | integer       |     |
| 8     | 할인율            | DB_DisRate        | integer       |     |
| 9     | 상품 주소         | DB_ProductAddress | Text string   |     |
| 10    | 플랫폼            | DB_Platform       | Text string   |     |
| 11    | 큰 사진           | DB_BigPicture     | Image         |     |
| 12    | 작은 사진         | DB_SmallPicture   | Image         |     |
- DB_SoftID 규칙은 DB상의 소프트웨어 명칭을 그대로 가져온 것을 사용함([플랫폼 이름]_[소프트웨어 주소 ID])
- 스팀은 주소 ID 대신 DB상 ID 사용
