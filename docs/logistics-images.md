# 물류 페이지 초기 이미지 제작 기록

제작일: 2026-10-06

인물 조건 변경 후 현재 카드 사진은 `assets/logistics-applications-v2.jpg`를 사용합니다. 이 문서는 초기 생성 기록이며, 최종 카드 프롬프트는 [산업별 이미지 제작 기록](industry-images.md)에 있습니다. 상단 전경은 아래 초기 생성 파일을 유지합니다.

내장 이미지 생성 도구(`image_gen`)로 제작했습니다. 제조 페이지 사진의 차분한 블루·그레이와 따뜻한 산업 현장 조명을 참고해 새로 생성했으며, 기존 제조 이미지 자체를 변형하지 않았습니다. 실제 고객 현장이나 구축 실적을 나타내는 사진은 아닙니다.

- `assets/logistics-center-ai.jpg`: 물류센터 전경. 상단 대표 이미지에 사용합니다.
- `assets/logistics-applications-ai.jpg`: 네 장면을 담은 2×2 사진 모음. CSS로 각 장면을 개별 카드에 표시해 이미지 파일 하나를 재사용합니다.

생성 결과는 웹용 JPEG(품질 88)로 변환했습니다. 화면의 사진 크기, 폰트, 정렬, 기존 레이아웃은 유지합니다.

## 물류센터 전경 프롬프트

```text
Use case: photorealistic-natural
Asset type: landscape hero photograph for a Korean industrial CCTV and AI company website's logistics page.
Primary request: a realistic distribution center exterior, matching understated industrial corporate photography with cool steel-blue architecture and warm amber work lights.
Scene/backdrop: a modern, believable Korean logistics warehouse at blue hour, long low warehouse facade, loading docks, two unbranded delivery trucks parked neatly at the dock, orderly paved vehicle lanes.
Composition/framing: one single landscape photograph, approximately 8:5 aspect ratio, eye-level three-quarter architectural view, entire subject composed safely within the center so it can be cropped slightly on a responsive website.
Lighting/mood: soft dusk sky, restrained cool blue and gray palette, warm yellow-orange loading bay lights, calm and operational, realistic exposure and texture.
Style/medium: high-quality natural architectural/editorial photography, straight verticals, physically plausible vehicles and building, quiet detail.
Constraints: no people in dangerous positions, no text, no logos, no watermark, no AI bounding boxes, no interface graphics, no neon, no stylized science-fiction effects, no collage or border.
```

## 현장 과제 사진 프롬프트

```text
Use case: photorealistic-natural
Asset type: a single 2 by 2 photographic contact sheet used as four separately cropped website card photos for a logistics AI service page.
Primary request: four distinct realistic logistics work photographs, coherent understated industrial corporate photography, cool steel blue and gray with warm yellow/orange equipment and work lights, natural textures.
Composition/framing: EXACTLY four equal rectangular landscape photographs in a strict two-column, two-row grid. Overall canvas landscape 8:5. Four panels extend to the edges with only one thin straight white vertical gutter and one thin straight white horizontal gutter crossing at the exact center. No captions, no outer border. Each panel individually composed in a wide shot with its subject centered vertically for an eventual 12:5 crop.
Top-left panel: warehouse aisle with an orange forklift in a designated vehicle lane and a worker wearing a blue hard hat and yellow reflective vest safely separated by a clear pedestrian lane and safety rail; tidy pallet racks recede into the background.
Top-right panel: wide view of a warehouse loading entrance from inside, a delivery truck backed into a dock, organized access lanes with yellow floor markings, a few small workers in safety vests, plausible orderly operation.
Bottom-left panel: an over-the-shoulder view of a warehouse security operator checking actual CCTV views on monitors, monitors show ordinary warehouse racks and parcels only, a warehouse parcel sorting area visible behind glass, no legible screen text, no graphics or bounding boxes; avoid a close-up face.
Bottom-right panel: a technician in a blue work shirt and yellow safety vest inspecting the network/server rack in a logistics facility's clean equipment room, black rack doors and restrained indicator lights, network cabling, warm neutral room lighting.
Lighting/mood: natural soft industrial light, calm, grounded, documentary, consistent moderate contrast and saturation across panels.
Constraints: no logos, no letters, no captions, no watermark, no invented UI text, no neon, no cyber effects, no facial closeups, correct anatomy and plausible machinery. This is a photographic contact sheet, not a webpage mockup.
```
