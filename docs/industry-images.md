# 산업별 이미지 제작 기록

제작일: 2026-10-06

내장 이미지 생성 도구(`image_gen`)로 새로 제작했습니다. 제조·병원 페이지의 자연스러운 기업 사진 분위기를 참고해 차분한 블루·그레이, 따뜻한 조명, 실제 현장과 같은 질감으로 구성했습니다. 인물이 등장하는 사진은 사용자 요청에 따라 가상의 서양인 인물을 사용했습니다. 기존 제조·병원 사진은 변형하지 않았습니다.

상단에는 하나의 연속된 현장 전경을 사용하고, 카드에는 2×2 사진 모음의 해당 장면만 CSS로 표시합니다. 각 카드의 주제에 맞는 서로 다른 장면이며, 얼굴과 작업 장면이 잘 보이도록 사진별 세로 초점을 조정했습니다. 폰트, 행간, 정렬, 사진 영역 크기는 유지했습니다. 실제 고객 현장이나 구축 실적을 뜻하는 이미지는 아닙니다.

## 현재 사용하는 파일

| 페이지 | 상단 전경 | 현장 과제 네 장면 |
| --- | --- | --- |
| 공항 | [industry-airport-hero-v2.jpg](../assets/industry-airport-hero-v2.jpg) | [industry-airport-applications-v2.jpg](../assets/industry-airport-applications-v2.jpg) |
| 카지노 | [industry-casino-hero-v2.jpg](../assets/industry-casino-hero-v2.jpg) | [industry-casino-applications-v2.jpg](../assets/industry-casino-applications-v2.jpg) |
| 학교 | [industry-school-hero-v2.jpg](../assets/industry-school-hero-v2.jpg) | [industry-school-applications-v2.jpg](../assets/industry-school-applications-v2.jpg) |
| 호텔 | [industry-hotel-hero-v2.jpg](../assets/industry-hotel-hero-v2.jpg) | [industry-hotel-applications-v2.jpg](../assets/industry-hotel-applications-v2.jpg) |
| 경기장·대형시설 | [industry-stadium-hero-v2.jpg](../assets/industry-stadium-hero-v2.jpg) | [industry-stadium-applications-v2.jpg](../assets/industry-stadium-applications-v2.jpg) |
| 물류 | [logistics-center-ai.jpg](../assets/logistics-center-ai.jpg) — 기존 생성 전경 유지 | [logistics-applications-v2.jpg](../assets/logistics-applications-v2.jpg) — 인물 조건 변경 |
| 매장·리테일 | [industry-retail-hero-v2.jpg](../assets/industry-retail-hero-v2.jpg) | [industry-retail-applications-v2.jpg](../assets/industry-retail-applications-v2.jpg) |

현재 최종 생성 파일은 모두 `assets/`에 웹용 JPEG(품질 88)로 저장했습니다. 이전 이미지 파일은 보관하고 페이지의 연결 경로를 새 파일로 변경했습니다. 물류의 초기 전경 프롬프트는 [초기 물류 이미지 기록](logistics-images.md)에 있습니다.

추가로 교체한 매장·리테일 사진의 최종 프롬프트와 변경 이유는 [매장·리테일 이미지 제작 기록](retail-images.md)에 있습니다.

## 최종 프롬프트

### airport-hero

저장 파일: `assets/industry-airport-hero-v2.jpg`

```text
Use case: photorealistic-natural
Style/medium: high quality, believable corporate editorial photography, real architecture and material texture, natural human proportions. Match calm industrial and hospital brochure photography.
Lighting/mood: restrained cool blue and gray tones with soft warm amber work or architectural lights, natural exposure, moderate saturation, calm operational atmosphere.
People: every featured human is a fictional Western European person, with varied natural brown or blond hair, photographed candidly rather than posing; ordinary staff or visitors appropriate to the setting.
Constraints: no brands, no logos, no watermark, no captions, no legible text, no UI overlays, no AI detection boxes, no neon or science-fiction effects, no exaggerated HDR.
Asset type: one landscape hero photograph for an industry CCTV/AI website.
Scene and subject: a modern international airport terminal exterior at blue hour, cool glass and steel facade with warm illuminated windows, orderly curbside arrival lanes and a terminal entrance, a plausible airport control tower in the distance; architecture is the subject, no people in the foreground.
Composition: one single continuous architectural/editorial photograph, landscape 8:5 aspect ratio, clear believable perspective. Main facility centered with enough space for a slight responsive crop. No collage, no border.
```

### casino-hero

저장 파일: `assets/industry-casino-hero-v2.jpg`

```text
Use case: photorealistic-natural
Style/medium: high quality, believable corporate editorial photography, real architecture and material texture, natural human proportions. Match calm industrial and hospital brochure photography.
Lighting/mood: restrained cool blue and gray tones with soft warm amber work or architectural lights, natural exposure, moderate saturation, calm operational atmosphere.
People: every featured human is a fictional Western European person, with varied natural brown or blond hair, photographed candidly rather than posing; ordinary staff or visitors appropriate to the setting.
Constraints: no brands, no logos, no watermark, no captions, no legible text, no UI overlays, no AI detection boxes, no neon or science-fiction effects, no exaggerated HDR.
Asset type: one landscape hero photograph for an industry CCTV/AI website.
Scene and subject: a refined modern casino gaming floor from a wide elevated architectural viewpoint, deep navy and warm wood finishes, discreet amber ceiling lighting, orderly green gaming tables and understated gaming machines in the distance, a few small Western European adult guests and staff; realistic quiet operations rather than celebration.
Composition: one single continuous architectural/editorial photograph, landscape 8:5 aspect ratio, clear believable perspective. Main facility centered with enough space for a slight responsive crop. No collage, no border.
```

### hotel-hero

저장 파일: `assets/industry-hotel-hero-v2.jpg`

```text
Use case: photorealistic-natural
Style/medium: high quality, believable corporate editorial photography, real architecture and material texture, natural human proportions. Match calm industrial and hospital brochure photography.
Lighting/mood: restrained cool blue and gray tones with soft warm amber work or architectural lights, natural exposure, moderate saturation, calm operational atmosphere.
People: every featured human is a fictional Western European person, with varied natural brown or blond hair, photographed candidly rather than posing; ordinary staff or visitors appropriate to the setting.
Constraints: no brands, no logos, no watermark, no captions, no legible text, no UI overlays, no AI detection boxes, no neon or science-fiction effects, no exaggerated HDR.
Asset type: one landscape hero photograph for an industry CCTV/AI website.
Scene and subject: a contemporary hotel lobby at blue hour, floor-to-ceiling glass windows, warm reception and pendant lights, cream stone, natural wood and subdued blue-gray upholstery, clear circulation paths, a few Western European adult guests with luggage and a reception employee, wide calm architectural view.
Composition: one single continuous architectural/editorial photograph, landscape 8:5 aspect ratio, clear believable perspective. Main facility centered with enough space for a slight responsive crop. No collage, no border.
```

### stadium-hero

저장 파일: `assets/industry-stadium-hero-v2.jpg`

```text
Use case: photorealistic-natural
Style/medium: high quality, believable corporate editorial photography, real architecture and material texture, natural human proportions. Match calm industrial and hospital brochure photography.
Lighting/mood: restrained cool blue and gray tones with soft warm amber work or architectural lights, natural exposure, moderate saturation, calm operational atmosphere.
People: every featured human is a fictional Western European person, with varied natural brown or blond hair, photographed candidly rather than posing; ordinary staff or visitors appropriate to the setting.
Constraints: no brands, no logos, no watermark, no captions, no legible text, no UI overlays, no AI detection boxes, no neon or science-fiction effects, no exaggerated HDR.
Asset type: one landscape hero photograph for an industry CCTV/AI website.
Scene and subject: a large modern sports stadium seen from an elevated concourse at dusk, realistic oval bowl of blue-gray seating, a green sports field, warm illuminated roof structures and bright white arena lights under a soft blue evening sky, spectators as small distant figures, orderly architecture with no advertising or scoreboards.
Composition: one single continuous architectural/editorial photograph, landscape 8:5 aspect ratio, clear believable perspective. Main facility centered with enough space for a slight responsive crop. No collage, no border.
```

### airport-applications

저장 파일: `assets/industry-airport-applications-v2.jpg`

```text
Use case: photorealistic-natural
Style/medium: high quality, believable corporate editorial photography, real architecture and material texture, natural human proportions. Match calm industrial and hospital brochure photography.
Lighting/mood: restrained cool blue and gray tones with soft warm amber work or architectural lights, natural exposure, moderate saturation, calm operational atmosphere.
People: every featured human is a fictional Western European person, with varied natural brown or blond hair, photographed candidly rather than posing; ordinary staff or visitors appropriate to the setting.
Constraints: no brands, no logos, no watermark, no captions, no legible text, no UI overlays, no AI detection boxes, no neon or science-fiction effects, no exaggerated HDR.
Asset type: one four-photo contact sheet for separately cropped website application cards.
Composition: EXACTLY four equal landscape photographs in a strict two-column, two-row grid, overall landscape canvas 8:5. A thin straight white vertical gutter and a thin straight white horizontal gutter cross at the EXACT center. Photos extend to all outer edges, no outer margin or border. Each panel is a separate wide shot, subject centered vertically and horizontally so a 12:5 crop still retains the subject. Natural eye-level or slightly elevated views; no face closeups.
Top-left photograph: a Western European airport security employee in a navy uniform checking an access-controlled staff doorway leading to an airside corridor, realistic badge reader and glass partitions, calm watchful work, medium-wide framing.
Top-right photograph: Western European travelers with luggage moving through a bright airport waiting concourse, seating and large windows, orderly moderately populated space with clear walking lanes, slightly elevated wide view.
Bottom-left photograph: a Western European airport security operator in three-quarter profile reviewing terminal CCTV footage on two monitors in a security room, camera views show ordinary terminal walkways, people and baggage, soft neutral lighting.
Bottom-right photograph: a Western European technician in a blue work shirt inspecting black network server racks supporting airport CCTV, tidy cabling and restrained indicator lights, believable airport equipment room, medium-wide framing.
Additional constraints: screens show ordinary CCTV camera images with no text or invented graphics. No webpage mockup. Keep every panel's main person and relevant equipment within the middle two-thirds vertically.
```

### casino-applications

저장 파일: `assets/industry-casino-applications-v2.jpg`

```text
Use case: photorealistic-natural
Style/medium: high quality, believable corporate editorial photography, real architecture and material texture, natural human proportions. Match calm industrial and hospital brochure photography.
Lighting/mood: restrained cool blue and gray tones with soft warm amber work or architectural lights, natural exposure, moderate saturation, calm operational atmosphere.
People: every featured human is a fictional Western European person, with varied natural brown or blond hair, photographed candidly rather than posing; ordinary staff or visitors appropriate to the setting.
Constraints: no brands, no logos, no watermark, no captions, no legible text, no UI overlays, no AI detection boxes, no neon or science-fiction effects, no exaggerated HDR.
Asset type: one four-photo contact sheet for separately cropped website application cards.
Composition: EXACTLY four equal landscape photographs in a strict two-column, two-row grid, overall landscape canvas 8:5. A thin straight white vertical gutter and a thin straight white horizontal gutter cross at the EXACT center. Photos extend to all outer edges, no outer margin or border. Each panel is a separate wide shot, subject centered vertically and horizontally so a 12:5 crop still retains the subject. Natural eye-level or slightly elevated views; no face closeups.
Top-left photograph: a Western European casino security analyst in three-quarter profile reviewing multiple ordinary CCTV views of green gaming tables on monitors in a security office, navy shirt and calm focused work.
Top-right photograph: a Western European uniformed security employee beside a discreet access-controlled back-of-house doorway in a casino, warm wood and gray corridor, badge reader and a passing staff member, no written signs.
Bottom-left photograph: a realistic casino circulation area around green gaming tables with Western European adult guests and staff, orderly moderate crowd, slightly elevated wide view, warm amber lights and muted navy interiors.
Bottom-right photograph: a Western European technician inspecting storage and network server racks for a casino surveillance system, black cabinets, cable management, blue work shirt, natural equipment-room light.
Additional constraints: screens show ordinary CCTV camera images with no text or invented graphics. No webpage mockup. Keep every panel's main person and relevant equipment within the middle two-thirds vertically.
```

### hotel-applications

저장 파일: `assets/industry-hotel-applications-v2.jpg`

```text
Use case: photorealistic-natural
Style/medium: high quality, believable corporate editorial photography, real architecture and material texture, natural human proportions. Match calm industrial and hospital brochure photography.
Lighting/mood: restrained cool blue and gray tones with soft warm amber work or architectural lights, natural exposure, moderate saturation, calm operational atmosphere.
People: every featured human is a fictional Western European person, with varied natural brown or blond hair, photographed candidly rather than posing; ordinary staff or visitors appropriate to the setting.
Constraints: no brands, no logos, no watermark, no captions, no legible text, no UI overlays, no AI detection boxes, no neon or science-fiction effects, no exaggerated HDR.
Asset type: one four-photo contact sheet for separately cropped website application cards.
Composition: EXACTLY four equal landscape photographs in a strict two-column, two-row grid, overall landscape canvas 8:5. A thin straight white vertical gutter and a thin straight white horizontal gutter cross at the EXACT center. Photos extend to all outer edges, no outer margin or border. Each panel is a separate wide shot, subject centered vertically and horizontally so a 12:5 crop still retains the subject. Natural eye-level or slightly elevated views; no face closeups.
Top-left photograph: a Western European hotel security employee in a navy uniform at a discreet staff-only corridor door with a badge reader, gray and warm wood walls, a hotel staff member passing safely, medium-wide composition.
Top-right photograph: a wide hotel lobby with Western European adult guests and rolling luggage, reception desk and clear circulation space, soft daylight and warm pendant lights, cream stone and subdued blue-gray furniture.
Bottom-left photograph: a Western European hotel security operator reviewing ordinary lobby CCTV views on two monitors, a colleague holding a small unbranded bag nearby to suggest lost-property follow-up, quiet operational office, no closeups.
Bottom-right photograph: a Western European technician in a blue shirt inspecting hotel network and video server equipment, compact neat black racks, tidy blue cables and restrained green indicators, clean neutral service room.
Additional constraints: screens show ordinary CCTV camera images with no text or invented graphics. No webpage mockup. Keep every panel's main person and relevant equipment within the middle two-thirds vertically.
```

### stadium-applications

저장 파일: `assets/industry-stadium-applications-v2.jpg`

```text
Use case: photorealistic-natural
Style/medium: high quality, believable corporate editorial photography, real architecture and material texture, natural human proportions. Match calm industrial and hospital brochure photography.
Lighting/mood: restrained cool blue and gray tones with soft warm amber work or architectural lights, natural exposure, moderate saturation, calm operational atmosphere.
People: every featured human is a fictional Western European person, with varied natural brown or blond hair, photographed candidly rather than posing; ordinary staff or visitors appropriate to the setting.
Constraints: no brands, no logos, no watermark, no captions, no legible text, no UI overlays, no AI detection boxes, no neon or science-fiction effects, no exaggerated HDR.
Asset type: one four-photo contact sheet for separately cropped website application cards.
Composition: EXACTLY four equal landscape photographs in a strict two-column, two-row grid, overall landscape canvas 8:5. A thin straight white vertical gutter and a thin straight white horizontal gutter cross at the EXACT center. Photos extend to all outer edges, no outer margin or border. Each panel is a separate wide shot, subject centered vertically and horizontally so a 12:5 crop still retains the subject. Natural eye-level or slightly elevated views; no face closeups.
Top-left photograph: Western European spectators and a uniformed event steward moving through stadium entry turnstiles, orderly separate entry lanes, modern gray concrete and steel, wide view with people at a natural scale.
Top-right photograph: a moderate queue of Western European adult spectators along a broad stadium concourse with portable lane rails and an event steward guiding the flow, no severe crowding, soft daylight, slightly elevated perspective.
Bottom-left photograph: a Western European event security employee beside an access-controlled stadium staff passage, credential reader, gray corridor with a glimpse of the arena beyond, medium-wide editorial scene.
Bottom-right photograph: a Western European stadium security operator reviewing ordinary CCTV views of stadium gates and concourses on monitors in a control room, navy shirt, calm focused work, monitors without text or overlays.
Additional constraints: screens show ordinary CCTV camera images with no text or invented graphics. No webpage mockup. Keep every panel's main person and relevant equipment within the middle two-thirds vertically.
```

### school-hero

저장 파일: `assets/industry-school-hero-v2.jpg`

```text
Use case: photorealistic-natural
Style/medium: high quality, believable corporate editorial photography, real architecture and material texture, natural human proportions. Match calm industrial and hospital brochure photography.
Lighting/mood: restrained cool blue and gray tones with soft warm amber work or architectural lights, natural exposure, moderate saturation, calm operational atmosphere.
People: every featured human is a fictional Western European person, with varied natural brown or blond hair, photographed candidly rather than posing; ordinary staff or visitors appropriate to the setting.
Constraints: no brands, no logos, no watermark, no captions, no legible text, no UI overlays, no AI detection boxes, no neon or science-fiction effects, no exaggerated HDR.
Asset type: one landscape hero photograph for an industry CCTV/AI website.
Scene and subject: a modern secondary school campus exterior in soft early evening, brick and pale concrete facade, large blue-gray glass windows with warm interior light, clean school entrance and secure perimeter with landscaping; an understated realistic education facility, architecture is the subject, no foreground people.
Composition: one single continuous architectural/editorial photograph, landscape 8:5 aspect ratio, clear believable perspective. Main facility centered with enough space for a slight responsive crop. No collage, no border.
```

### school-applications

저장 파일: `assets/industry-school-applications-v2.jpg`

```text
Use case: photorealistic-natural
Style/medium: high quality, believable corporate editorial photography, real architecture and material texture, natural human proportions. Match calm industrial and hospital brochure photography.
Lighting/mood: restrained cool blue and gray tones with soft warm amber work or architectural lights, natural exposure, moderate saturation, calm operational atmosphere.
People: every featured human is a fictional Western European person, with varied natural brown or blond hair, photographed candidly rather than posing; ordinary staff or visitors appropriate to the setting.
Constraints: no brands, no logos, no watermark, no captions, no legible text, no UI overlays, no AI detection boxes, no neon or science-fiction effects, no exaggerated HDR.
Asset type: one four-photo contact sheet for separately cropped website application cards.
Composition: EXACTLY four equal landscape photographs in a strict two-column, two-row grid, overall landscape canvas 8:5. A thin straight white vertical gutter and a thin straight white horizontal gutter cross at the EXACT center. Photos extend to all outer edges, no outer margin or border. Each panel is a separate wide shot, subject centered vertically and horizontally so a 12:5 crop still retains the subject. Natural eye-level or slightly elevated views; no face closeups.
Top-left photograph: a Western European adult school caretaker in a blue shirt checking a school entrance after class hours, warm lobby light behind glass doors and quiet blue evening outside, medium-wide photo.
Top-right photograph: a Western European adult facilities employee inspecting a secure school perimeter gate beside a landscaped path, gray fence, brick school building in the background, calm routine inspection in daylight.
Bottom-left photograph: Western European teenage students with backpacks and an adult teacher moving through a bright school entrance and common hallway, realistic unbranded clothing, natural candid scene, no posing or close-up faces.
Bottom-right photograph: a Western European adult school facilities employee reviewing ordinary CCTV footage of entrances and common hallways on two monitors in a tidy office, blue shirt, natural daylight, no children in the office.
Additional constraints: screens show ordinary CCTV camera images with no text or invented graphics. No webpage mockup. Keep every panel's main person and relevant equipment within the middle two-thirds vertically.
```

### logistics-applications

저장 파일: `assets/logistics-applications-v2.jpg`

```text
Use case: photorealistic-natural
Style/medium: high quality, believable corporate editorial photography, real architecture and material texture, natural human proportions. Match calm industrial and hospital brochure photography.
Lighting/mood: restrained cool blue and gray tones with soft warm amber work or architectural lights, natural exposure, moderate saturation, calm operational atmosphere.
People: every featured human is a fictional Western European person, with varied natural brown or blond hair, photographed candidly rather than posing; ordinary staff or visitors appropriate to the setting.
Constraints: no brands, no logos, no watermark, no captions, no legible text, no UI overlays, no AI detection boxes, no neon or science-fiction effects, no exaggerated HDR.
Asset type: one four-photo contact sheet for separately cropped website application cards.
Composition: EXACTLY four equal landscape photographs in a strict two-column, two-row grid, overall landscape canvas 8:5. A thin straight white vertical gutter and a thin straight white horizontal gutter cross at the EXACT center. Photos extend to all outer edges, no outer margin or border. Each panel is a separate wide shot, subject centered vertically and horizontally so a 12:5 crop still retains the subject. Natural eye-level or slightly elevated views; no face closeups.
Top-left photograph: an orange forklift operated by a Western European worker in a blue hard hat and yellow reflective vest, a second Western European pedestrian wearing matching PPE walking in a lane separated by a yellow safety rail, tidy warehouse pallet racks, wide view.
Top-right photograph: an orderly warehouse loading entrance from inside, an unbranded delivery truck backed into a dock, yellow floor markings and Western European loading staff in yellow reflective vests, realistic loading operation.
Bottom-left photograph: a Western European warehouse security operator in three-quarter profile checking ordinary CCTV views of warehouse racks and parcel sorting on monitors, real parcel sorting area visible behind glass, medium-wide photo.
Bottom-right photograph: a Western European technician with short light-brown hair, blue work shirt and yellow reflective vest inspecting a network/server rack in a clean logistics equipment room, realistic black racks and restrained indicator lights.
Additional constraints: screens show ordinary CCTV camera images with no text or invented graphics. No webpage mockup. Keep every panel's main person and relevant equipment within the middle two-thirds vertically.
```
