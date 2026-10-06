# CHULTONG 홈페이지

CCTV AI 영상분석, AI 시스템 유지관리(AIOps), 통합 대시보드 & 알림(Command Center)을 소개하는 반응형 기업 홈페이지입니다. 기존 HTML/CSS 디자인과 정적 사이트 구성을 유지합니다.

## 로컬 실행

별도 설치나 빌드 없이 실행할 수 있습니다.

```bash
python3 -m http.server 4173
```

브라우저에서 `http://localhost:4173`을 엽니다.

## 메뉴와 페이지

| 상단 메뉴 | 페이지 | 하위 메뉴 |
| --- | --- | --- |
| 솔루션 | `products.html` | CCTV AI 영상분석 / AI 시스템 유지관리 / 통합 대시보드 & 알림 |
| 산업별 | `solutions.html` | 제조 / 물류 / 공항 / 카지노 / 스마트시티 / 학교 / 병원 / 호텔 / 매장·리테일 / 경기장·대형시설 |
| 회사 | `company.html` | 인사말 / 비전·핵심가치·미션 / 찾아오시는 길 |
| 문의 | `contact.html` | 기존 이메일 문의와 이메일 주소 복사 |

각 항목은 독립 HTML 페이지로 연결됩니다. 데스크톱 하위 메뉴는 마우스 호버와 키보드 포커스로 열리고, 아래 방향키와 Escape를 지원합니다. 모바일 메뉴는 펼침 버튼, 포커스 제한과 Escape 닫기를 지원합니다. 산업별 메뉴와 페이지 전환 메뉴에서 동일한 10개 산업을 선택할 수 있습니다.

## 메인페이지

`index.html`은 기존 CCTV의 AI 지능화를 대표 메시지로 사용합니다. 현장의 고민, 세 가지 솔루션, 산업별 적용 분야 10개, 설계·구축 기준, 도입 과정 5단계, 회사 소개, FAQ와 프로젝트 상담 순서로 구성합니다. 제공 문구에서 반복된 골든타임 내용은 한 섹션으로 정리했습니다.

`home.css`는 메인페이지에만 연결합니다. 기존 Pretendard, 브랜드 색상과 AI 도시 이미지, 솔루션 비주얼을 활용하며 산업별 분야는 데스크톱에서 5개씩 두 줄로 표시합니다. FAQ는 자바스크립트 없이도 열 수 있는 `details` 요소입니다. 상담 버튼은 기존 문의 페이지와 대표전화로 연결하며, 상담 준비 항목은 입력 양식 대신 안내로 제공합니다.

첫 화면은 핵심 소개 직후에 상담·솔루션 버튼을 보여주고, 그 아래 ‘철통보안, 철통안전’을 작은 브랜드 문구로 표시합니다. 자세한 서비스 설명과 기존 환경의 활용 안내는 아래 솔루션·구축 섹션에서 제공합니다. 산업별 설명은 제목 아래 왼쪽 정렬로 표시합니다. 심볼과 `Chultong` 표기는 확대해도 선명한 흰색 SVG 이미지이며, 제작 기록은 `docs/wordmark-image.md`에 있습니다.

## 산업별 10개 페이지

| 산업 | 파일 |
| --- | --- |
| 제조 | `solution-manufacturing.html` |
| 물류 | `solution-logistics.html` |
| 공항 | `solution-airport.html` |
| 카지노 | `solution-casino.html` |
| 스마트시티 | `solution-smart-city.html` |
| 학교 | `solution-school.html` |
| 병원 | `solution-healthcare.html` |
| 호텔 | `solution-hotel.html` |
| 매장·리테일 | `solution-retail.html` |
| 경기장·대형시설 | `solution-stadium.html` |

사진 중심 소개, 현장 과제 4개, 적용·검증 방법, 산업별 상담 버튼과 전화 연결로 구성합니다. 제조와 물류는 독립 페이지로 분리했습니다. 기존 `solution-energy.html`과 `solution-public.html` 주소는 산업별 목록 안내로 유지하며, 활성 메뉴와 목록에는 포함하지 않습니다.

## 솔루션 3개 페이지

- `product-vision.html` — 실시간 이상 탐지, 사람·차량 카운팅과 트래킹, 번호판 인식, 포렌식 검색, 대시보드·리포트
- `product-ops.html` — 로그·메트릭 이상 탐지, 티켓 생성·라우팅, 예측 유지보수, 자동 운영 리포트
- `product-command-center.html` — 통합 상황판, 다채널 알림, 역할별 뷰

메인과 솔루션 목록에는 기존 영상분석·AIOps 비주얼에 맞춘 Command Center 카드를 추가했습니다. 영상분석의 검색 속도 문구는 제공된 콘텐츠를 반영한 것으로, 실제 기능과 검색 속도는 도입 제품과 현장 조건에 따라 검증합니다.

## 회사

- `company-greeting.html` — 대표이사 함세진 인사말
- `company-vision.html` — 미션, 비전, 다섯 가지 핵심가치
- `company-directions.html` — 주소·전화·이메일, 지도, 방문 상담 안내

인사말과 비전·핵심가치·미션은 `company-editorial.css`로 회사 소개에 맞는 큰 메시지, 여백, 구분선과 서명 구성을 사용합니다. 미션·비전·다섯 핵심가치의 제공 문구와 인사말 본문은 유지합니다. 이 스타일 파일은 해당 두 페이지에만 연결됩니다.

주소는 경기도 안양시 동안구 안양판교로 20, 305호(관양동, 신한데뷰오피스텔), 대표전화는 `031-8031-9909`입니다. 지도는 제공된 주소로 조회하는 Google Maps 임베드이며, 새 창에서 지도를 여는 링크도 제공합니다.

## 문의

사용자의 후속 요청에 따라 `contact.html`의 기존 이메일 문의 및 이메일 주소 복사 기능과 본문은 유지했습니다. 상담 양식이나 접수 API, 접수 완료 표시를 추가하지 않았습니다. 사업 문의 이메일은 `abraham@chultong.com`이며, 산업별 상담 버튼은 이 문의 페이지로 연결됩니다.

## 공통 파일

- `styles.css` — 기존 메인 디자인과 기본 반응형 스타일
- `solutions.css` — 산업별 사진·히어로·카드·도입 지원 스타일
- `pages.css` — 페이지 목록, 10개 산업 전환, 3개 솔루션 카드, 회사 본문·지도 스타일
- `company-editorial.css` — 인사말과 비전·핵심가치·미션의 회사 소개 구성
- `home.css` — 메인페이지 메시지, 솔루션, 산업별 분야, 도입 과정과 FAQ 구성
- `script.js` — 기존 메뉴, 스크롤, 키보드, 이메일 복사 동작

공통 메뉴를 변경할 때는 모든 HTML의 상단·푸터 메뉴를 함께 수정합니다.

기존 Pretendard와 브랜드 색상, 산업별 사진 카드와 솔루션 상세 페이지의 구성을 유지합니다. 콘텐츠 최대 폭은 1,160px이며, 산업별 페이지 전환 메뉴는 데스크톱에서 5개씩 두 줄입니다. 메인페이지는 세 가지 솔루션과 산업별 분야 10개를 모두 표시하고, 제목·설명·버튼은 각 영역의 읽는 흐름에 맞춰 정렬합니다.

## 이미지

공항·카지노·학교·호텔·경기장·매장·리테일 페이지는 제조·병원 사진과 비슷한 실사 분위기로 새로 생성한 `assets/industry-*-hero-v2.jpg`와 `assets/industry-*-applications-v2.jpg`를 사용합니다. 상단은 현장 전경이며, 카드 네 개에는 각각 주제에 맞는 다른 장면을 표시합니다. 인물이 등장하는 사진은 사용자 요청에 따라 서양인 인물로 구성했습니다. 이미지는 적용 환경을 설명하는 시각 자료이며, 구축 실적이나 고객 사례를 뜻하지 않습니다. 제조·병원은 기존 사진과 개별 사진 창을 유지합니다.

매장·리테일은 방문객 이동, 체류 구역, CCTV 영상 확인, 다점포 영상·장비 관리가 드러나는 사진으로 각 카드의 내용과 맞췄습니다. 파일과 최종 프롬프트는 [매장·리테일 이미지 제작 기록](docs/retail-images.md)에 있습니다.

물류 페이지는 `assets/logistics-center-ai.jpg` 전경을 유지하고, 인물이 있는 카드 사진은 `assets/logistics-applications-v2.jpg`로 교체했습니다. 지게차 동선·출입구·CCTV 영상 확인·서버 점검 네 장면을 담은 사진 모음입니다. `.photo-crop--logistics-*`와 `.photo-crop--sheet-*`로 각 장면을 개별 표시하며, 사진별 초점을 조정해 얼굴과 작업 장면을 보존합니다. 내장 이미지 생성 도구로 제작했으며 최종 파일 목록과 생성 프롬프트는 [산업별 이미지 제작 기록](docs/industry-images.md)에 보관합니다.

### 제조·물류 사진

구성과 이미지 참고: [Futec Solutions 제조·물류 솔루션](https://www.futecsolutions.com/solution-manufacturing.html).

`assets/manufacturing-logistics.jpg`는 참고 페이지의 `assets/img/vaidio/hero_manufacturing.png`에서 가져온 이미지를 웹용 JPEG로 최적화한 파일입니다. `solutions.css`의 `.photo-crop--*` 클래스로 공장 전경, 작업자, 생산라인, 생산설비를 각각 보여줍니다. 같은 파일을 재사용하므로 사진마다 별도 이미지 다운로드는 발생하지 않습니다.

이미지 사용권·재사용 허가는 별도로 확인되어 있지 않으므로, 공개 전에 권리자의 사용 허가를 확인하거나 보유 이미지로 교체해야 합니다. 페이지 문구는 철통의 사업 방향에 맞게 새로 작성했으며, 참고 사이트의 제품 성능 수치나 공식 파트너십을 철통의 실적으로 표시하지 않습니다.

### 추가 산업별 사진

`assets/healthcare.jpg`와 이전 매장 사진인 `assets/retail.jpg`는 Futec 참고 페이지의 `hero_healthcare.png`, `hero_retail.png`를 JPEG로 최적화한 파일이며, `assets/smart-city.jpg`는 `hero_smartcities.jpg`의 웹용 사본입니다. 병원 사진은 `.photo-crop--hospital-*`로 장면별로 나눠 표시하며, 현재 매장·리테일 페이지는 위의 새 생성 사진을 사용합니다. 이 참고 이미지들도 공개 전에 재사용 권한을 확인하거나 자체 이미지로 교체해야 합니다.

스마트시티 활용 카드의 무료 Unsplash 사진 출처:

- `assets/city-traffic.jpg`: [Justin Shen — 교차로 항공 사진](https://unsplash.com/photos/an-aerial-view-of-a-highway-intersection-in-a-city-uQCbc_H-xCY)
- `assets/city-pedestrians.jpg`: [Ryoji Iwata — 보행자 이동 사진](https://unsplash.com/photos/aerial-view-photography-of-people-crossing-road-wuCNi2XfBeE)
- `assets/city-road.jpg`: [David Emrich — 야간 도시 도로 사진](https://unsplash.com/photos/a-city-street-filled-with-lots-of-traffic-at-night-b6O0bMTGGE0)

사진은 각 활용 분야의 상황을 설명하는 이미지이며 철통의 구축 실적이나 고객 사례를 의미하지 않습니다.

## 문의 이메일

웹사이트의 사업 문의는 `abraham@chultong.com`으로 연결됩니다.
