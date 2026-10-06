# 매장·리테일 이미지 제작 기록

제작일: 2026-10-06

내장 이미지 생성 도구(`image_gen`)로 새로 제작했습니다. 사용자가 승인한 다른 산업 페이지와 같은 차분한 기업 실사 사진 분위기로 맞췄고, 앞서 요청한 서양인 인물 기준을 유지했습니다.

## 현재 사용하는 파일

- [industry-retail-hero-v2.jpg](../assets/industry-retail-hero-v2.jpg): 매장 출입구, 진열 공간과 자연스러운 고객 이동을 함께 보여주는 상단 전경.
- [industry-retail-applications-v2.jpg](../assets/industry-retail-applications-v2.jpg): 방문객 이동, 체류·계산대 구역, CCTV 영상 확인, 다점포 장비·영상 관리의 네 장면.

기존 카드에서 영상 검색에는 고객 응대 사진, 다점포 관리에는 창고 사진이 사용되어 내용과 맞지 않았습니다. 각 기능에 맞는 장면을 생성하고, 기존 2×2 사진 모음 표시 방식을 사용해 해당 장면만 보여줍니다. 세 번째 카드의 세로 초점은 담당자의 얼굴과 CCTV 화면이 함께 보이도록 조정했습니다.

선택한 생성 파일은 `assets/`에 웹용 JPEG(품질 88)로 저장했습니다. 기존 매장 사진은 보관하고 페이지의 이미지 경로를 새 파일로 변경했습니다. 실제 고객 현장이나 구축 실적을 나타내는 사진은 아닙니다.

## 최종 프롬프트

### retail-hero

저장 파일: `assets/industry-retail-hero-v2.jpg`

```text
Use case: photorealistic-natural
Style/medium: believable, high-quality corporate editorial photography, natural human proportions, real retail architecture and everyday materials. Calm and practical like industrial and hospital brochure photography.
Lighting/mood: soft natural daylight and warm architectural lighting, restrained blue-gray and warm wood palette, accurate exposure, moderate saturation. Refined but ordinary operational retail setting, not a glamorous fashion campaign.
People: featured people are fictional Western European adults, natural varied blond or brown hair, ordinary shoppers and staff, candid interactions without posing.
Constraints: no brands, no logos, no watermark, no captions, no legible text, no AI detection boxes, no floating graphics, no neon, no science-fiction styling, no exaggerated HDR.
Asset type: one landscape hero photograph for a retail CCTV and AI operations website.
Scene: a contemporary clothing and everyday lifestyle store seen from just inside its broad glass entrance in the late afternoon. Clear inviting circulation paths, orderly clothing rails, folded apparel tables, pale stone flooring, warm natural wood, restrained navy or blue-gray display accents. A few Western European adult shoppers browse naturally while a staff member assists farther inside.
Composition: one single continuous landscape 8:5 architectural photograph, eye-level wide three-quarter view, store layout is the main subject, realistic straight verticals and plausible display arrangement. Human subjects are small or medium in the scene, with enough space around them for a slight responsive crop.
Avoid: warehouse aisles, industrial forklifts, empty generic shopping mall, tight product close-ups, collage, outer border.
```

### retail-applications

저장 파일: `assets/industry-retail-applications-v2.jpg`

```text
Use case: photorealistic-natural
Style/medium: believable, high-quality corporate editorial photography, natural human proportions, real retail architecture and everyday materials. Calm and practical like industrial and hospital brochure photography.
Lighting/mood: soft natural daylight and warm architectural lighting, restrained blue-gray and warm wood palette, accurate exposure, moderate saturation. Refined but ordinary operational retail setting, not a glamorous fashion campaign.
People: featured people are fictional Western European adults, natural varied blond or brown hair, ordinary shoppers and staff, candid interactions without posing.
Constraints: no brands, no logos, no watermark, no captions, no legible text, no AI detection boxes, no floating graphics, no neon, no science-fiction styling, no exaggerated HDR.
Asset type: one four-photo contact sheet used as four separately cropped application card photographs.
Composition: EXACTLY four equal landscape photos in a strict two-column, two-row grid, overall canvas landscape 8:5. Only one thin straight white vertical gutter and one thin straight white horizontal gutter crossing at the EXACT center; photographs extend to all outer edges, no outer border or margin. Every panel is a distinct wide shot; keep heads, hands and relevant equipment comfortably inside the middle two-thirds vertically so a 12:5 crop retains the subject. No webpage mockup.
Setting continuity: all panels relate to contemporary clothing and lifestyle retail stores with warm wood, pale gray finishes and subdued blue accents.
Top-left photo: several Western European adult shoppers entering a clothing store through its wide glass entrance, other shoppers visible farther inside, clear natural visitor flow; a small ordinary ceiling CCTV camera may be visible unobtrusively. Slightly elevated wide view, store entrance and people evenly framed.
Top-right photo: Western European shoppers browsing garment displays and folded apparel near a checkout area, two or three people waiting calmly while a staff member assists; distinct circulation and browsing zones visible, natural moderately busy shop, wide documentary composition.
Bottom-left photo: a Western European store security or operations employee in three-quarter profile seated in a tidy back office reviewing ordinary CCTV views of the store entrance and sales floor on two monitors. Monitors show only plausible camera images, no legible interface text or overlays. Calm work, no depiction of theft or confrontation.
Bottom-right photo: a Western European retail operations technician in a blue shirt checking a compact black network/video equipment rack in a clean store management office. Nearby monitors show ordinary CCTV images of three different clothing store interiors to suggest multiple locations; realistic restrained status lights, tidy cabling. Main person and equipment centered vertically, wide view.
Avoid: warehouse photos, forklifts, jewelry sales close-ups, staged handshakes, obvious advertising, large camera close-ups, illegible generated dashboard charts.
```
