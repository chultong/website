# 상단 Chultong 이미지 로고

- 원본: 사용자가 제공한 2026-10-06 오후 10.35.18 스크린샷. 프로젝트에는 `assets/chultong-wordmark-reference.png`로 보관합니다.
- 적용 이미지: `assets/chultong-wordmark-white.svg` — 흰색 글자와 투명 배경의 벡터 윤곽. viewBox는 원본 PNG와 같은 537 × 132입니다.
- 심볼: `assets/chultong-logo-white.svg` — 원본의 두 아치와 세로 막대 구조를 부드러운 곡선과 일정한 선으로 정리한 벡터 이미지. viewBox는 기존 PNG와 같은 414 × 562입니다.
- 적용 위치: 모든 페이지의 상단 로고 옆. 원본의 대소문자, 글자 윤곽과 글자 사이 간격을 유지합니다.
- 처리: 원본 픽셀의 명암을 투명도로 옮겨 흰색 PNG를 만든 뒤, 글자의 실제 윤곽을 추출해 SVG 경로로 정리했습니다. 글자 주변 여백을 줄이고 흐릿한 가장자리를 선명하게 표시합니다. 유사한 글꼴로 다시 쓰지 않습니다.
- 기존 PNG는 원본과 제작 중간 자료로 보관합니다. 화면에는 SVG를 사용하므로 확대나 고해상도 화면에서도 픽셀 단위의 흐림이 늘어나지 않습니다.
- 상단 심볼의 표시 높이는 PC 40px, 모바일 36px입니다. 글자 이미지의 표시 너비는 PC 110px, 모바일 102px입니다. 내려오는 g 획을 고려한 중앙 정렬을 유지합니다.

먼저 내장 imagegen 도구로 투명 흰색 이미지 생성을 시도했습니다. 글자 모양을 정확히 보존하기 위해 원본에서 직접 추출한 PNG를 만들었고, 선명도 개선 후에는 해당 윤곽을 벡터로 변환한 SVG를 사용합니다. 글자 윤곽 변환에는 임시 폴더의 node-potrace 2.1.8을 사용했으며, 런타임 의존성은 추가하지 않았습니다. 생성 시도 결과는 사이트에서 사용하지 않습니다.

## imagegen에 사용한 프롬프트

> Use case: background-extraction. Asset type: production website header wordmark. Input image 1 is the EXACT edit target, not an inspiration reference. Convert this exact black 'Chultong' wordmark on white into solid pure WHITE lettering on a genuinely TRANSPARENT background. Preserve the letter silhouettes exactly: capital C and lowercase h,u,l,t,o,n,g, same typeface shapes, weight, kerning, proportions, rounded bottom foot of the lowercase l, same t and g shape. Do not redraw it with another font, do not reinterpret the logo. Extract the existing letter silhouettes, recolor to #FFFFFF, remove all white canvas background. Keep smooth crisp antialiased edges. Horizontal, tightly framed with only a small transparent margin around the wordmark. No additional symbol, decoration, tagline, shadow, stroke, glow, background color, mockup or border. Exact text: 'Chultong'. The ONLY changes are black lettering becoming white and the white background becoming transparent.
