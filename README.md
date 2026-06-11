# MAGNIFIC AGENT — PROMPT DE PRODUCCIÓN v2
## Grupo Mamery x Sunoco Puerto Rico
### Sistema correcto de dos capas: BACKGROUND IMAGE + TEXT OVERLAY

---

## IMPORTANTE: CÓMO FUNCIONA ESTE SISTEMA

Magnific genera FONDOS VISUALES cinematográficos.
El texto SE SUPERPONE después en Canva, Adobe Express, Figma, o PowerPoint.
Magnific NO renderiza tipografía. Su trabajo es el FONDO que hace impactante cada slide.

El agente debe generar 19 imágenes de fondo (1920x1080px, 16:9).
Cada imagen tiene zonas de composición predefinidas donde irá el texto.
El diseñador final monta el texto encima usando el sistema tipográfico indicado abajo.

---

## SISTEMA TIPOGRÁFICO (para el diseñador que monte el texto)

- **Headlines:** Barlow Condensed ExtraBold 800, uppercase, color #FFFFFF
- **Accents / labels:** Barlow SemiBold, uppercase, letter-spacing 0.25em, color #FFE600
- **Body copy:** Barlow Regular 400, color rgba(255,255,255,0.75)
- **Precio / número grande:** Barlow Condensed ExtraBold 800, color #FFE600
- **Bullet icon:** rombo amarillo (#FFE600) rotado 45°, tamaño 8px

---

## PALETA OFICIAL SUNOCO

| Elemento | Hex |
|---|---|
| Azul principal | `#074883` |
| Azul profundo | `#031e3f` |
| Amarillo Sunoco | `#FFE600` |
| Rojo Sunoco | `#E32E3D` |
| Blanco | `#FFFFFF` |
| Negro noche | `#0a0f1a` |

---

## INSTRUCCIONES GLOBALES PARA EL AGENTE

Antes de generar cualquier imagen, el agente debe entender estas reglas:

1. **NUNCA** incluir texto en las imágenes. Las imágenes son fondos puros.
2. Las zonas donde irá el texto deben tener **BAJO CONTRASTE** y oscuridad suficiente para que el texto blanco sea legible.
3. Cada imagen debe tener zonas de **"respiro"** (áreas oscuras lisas sin textura) donde se posicionará el contenido.
4. El estilo global es: **dark corporate luxury meets motorsport energy**. Noche. Velocidad. Poder.
5. Resolución: 1920x1080px, 16:9, sRGB.
6. No cartoon, no stock photo feel, no cheap gradients, no amateur lighting.

---

## PROMPTS POR SLIDE

---

### BG-01 — COVER (fondo portada)
- **Zona de texto:** Centro izquierdo (60% del canvas), zona derecha vacía con rombo decorativo.
- **Prompt:**
```
Dark cinematic background for a corporate presentation slide, 1920x1080px, deep navy blue color #074883, dramatic diagonal speed-lines texture at very low opacity 8% across the full canvas. Large yellow diamond rhombus shape softly glowing with golden warm light, positioned right side of frame, partially cropped at edge, size approximately 55% canvas height, color #FFE600, soft diffused glow halo around it. Left two-thirds of canvas completely dark and clean with no texture, deep navy, perfect zone for white text overlay. Subtle atmospheric depth, photographic quality render, no text, no words, no letters. Style: luxury automotive brand identity, premium corporate pitch deck background. Cinematic. Powerful. Clean. Shot as if lit by a single dramatic key light from upper right.
```
- **Negative prompt:**
```
text, words, letters, typography, cartoonish, stock photo, people, cars, logos, bright backgrounds, white backgrounds, cheap gradients, noise, grain, busy patterns
```

---

### BG-02 — WHY THIS MOMENT MATTERS
- **Zona de texto:** Left 55% clean dark, right side has a lighter panel for accent stat.
- **Prompt:**
```
Corporate presentation background 1920x1080px, dramatic split composition. Left 55% of frame: very deep navy blue #031e3f, completely clean and dark with no texture, perfect for text overlay. Right 45%: slightly lighter deep blue #145289, separated by a sharp diagonal cut edge angled at 8 degrees, evoking the arrow motif of a fuel brand. The diagonal cut has a razor-thin yellow line #FFE600 at the edge, glowing like a light slash. Very subtle background: an aerial nighttime photograph of a gas station with amber pump lights, extremely dark, overlayed at 15% opacity only on the right panel. Left side: a thin 3-pixel vertical yellow accent bar at approximately 13% from left edge. No text. No logos. Cinematic noir corporate mood.
```
- **Negative prompt:**
```
text, words, letters, bright areas, white, logos, people visible clearly, busy, loud, stock photo look
```

---

### BG-03 — OUR PERSPECTIVE
- **Zona de texto:** Center full canvas, ghost word treatment in background.
- **Prompt:**
```
Minimalist dark corporate presentation background 1920x1080px. Deep blue-black color #031e3f. Extremely subtle diamond rhombus grid pattern repeating diagonally across full canvas at 5% opacity only, color #FFE600. Center background: the word shape of large letters barely visible as a translucent embossed texture at 12% opacity, blending into the background with no sharp edges. Bottom of frame: single thin horizontal yellow line #FFE600 spanning full width, 2px thick, positioned at 85% height. Entire composition very dark, very minimal, very clean. No text. No logos. Style: high-end strategy consulting firm deck background. Elegant. Authoritative. Still.
```
- **Negative prompt:**
```
text, readable words, letters, bright, colorful, gradient, stock photo, busy, noisy, people
```

---

### BG-04 — OUR APPROACH (4 brands)
- **Zona de texto:** 4 quadrant grid, each quadrant dark with colored top accent bar.
- **Prompt:**
```
Corporate presentation background 1920x1080px. Dark navy blue base #074883. Extremely subtle 45-degree diagonal line pattern across entire canvas at 4% opacity yellow, very faint. Four invisible quadrant zones implied by very faint thin white lines at 8% opacity forming a 2x2 grid centered in frame with 2% gap between quadrants. Each quadrant slightly different in depth: top-left and bottom-right very slightly lighter, top-right and bottom-left very slightly darker, creating a subtle chessboard depth. A glowing crosshair intersection point at exact canvas center, small yellow radial glow at 20% opacity suggesting convergence of four forces. Background is clean and dark enough for white card UI to be placed on top. No text. No logos.
```
- **Negative prompt:**
```
text, words, logos, bright, white background, colorful, cartoon, busy patterns, people
```

---

### BG-05 — STRATEGIC PLANNING
- **Zona de texto:** Vertical yellow bar on left (8%), right side clean dark navy, bottom right abstract motion blur.
- **Prompt:**
```
Dark corporate presentation background 1920x1080px, deep navy #074883. Left edge: a solid vertical yellow bar #FFE600, 12px wide, full height of canvas, positioned at 8% from left. Right of the yellow bar: completely dark and clean deep navy, smooth surface, no texture, ideal for white text overlay. Bottom right corner: abstract motion blur streaks in deep blue suggesting forward speed, very subtle, 10% opacity, like blurred headlights seen from a highway at night. No text. No logos. Style: premium corporate annual report background. Clean. Corporate. Fast.
```
- **Negative prompt:**
```
text, words, letters, logos, bright white, busy patterns, people, colorful, stock photo
```

---

### BG-06 — CAMPAIGN DEVELOPMENT
- **Zona de texto:** Same vertical yellow bar as BG-05, right side clean dark navy with subtle film strip texture.
- **Prompt:**
```
Dark corporate presentation background 1920x1080px, deep navy #074883. Left edge: solid vertical yellow bar #FFE600, 12px wide, full height. Right side clean dark navy. Background texture: extremely faint horizontal filmstrip-style thin lines at 4% opacity suggesting creative production, positioned only in right 30% of canvas. Very subtle. Barely visible. No text. No logos. Same yellow left bar system.
```
- **Negative prompt:**
```
text, words, letters, logos, bright white, busy patterns, people, colorful, stock photo
```

---

### BG-07 — CUSTOMER ENGAGEMENT
- **Zona de texto:** Same vertical yellow bar as BG-05, center-right has subtle radial warm amber-yellow glow.
- **Prompt:**
```
Dark corporate presentation background 1920x1080px, deep navy #074883. Left edge: solid vertical yellow bar #FFE600, 12px wide, full height. Center-right of canvas: a very subtle warm amber-yellow radial glow at 15% opacity, soft and diffused like a distant light source, suggesting warmth and community connection. Glow positioned at 70% x, 50% y. Left side clean and dark. No text. No logos.
```
- **Negative prompt:**
```
text, words, letters, logos, bright white, busy patterns, people, colorful, stock photo
```

---

### BG-08 — MEDIA, INTELLIGENCE & PERFORMANCE
- **Zona de texto:** Top 35% for quote, bottom 65% for 4-column card layout.
- **Prompt:**
```
Dramatic dark corporate presentation background 1920x1080px, very deep navy almost black #031e3f. Two sharp diagonal light slash lines crossing the canvas from bottom-left to upper-right: first slash is 4px wide yellow #FFE600 at 60% opacity with soft glow halo, positioned at approximately 70% from left. Second slash is 2px wide yellow at 25% opacity, positioned at 75% from left. Both slashes span full canvas height plus 20%. Background: completely dark except for the slashes. Very subtle atmospheric haze. Feels like a Bloomberg terminal or trading floor at night. No text. No logos. Cinematic energy. Data-driven power.
```
- **Negative prompt:**
```
text, words, typography, logos, bright, colorful, stock photo, people, charts visible, busy
```

---

### BG-09 — OPERATING RHYTHM
- **Zona de texto:** Three horizontal block zones with numbered elements.
- **Prompt:**
```
Dark corporate presentation background 1920x1080px, deep navy #074883. Very faint calendar grid or timeline grid lines across canvas at 4% opacity white, suggesting structured rhythm and cadence. Three subtle horizontal band zones implied by very slight tonal differences at 25%, 55%, and 82% height — barely perceptible, just enough to suggest three distinct rows. Bottom of canvas: subtle text in background completely illegible acting as texture at 6% opacity. Small yellow diamond shape #FFE600 in upper right corner, 40px, rotated 45 degrees. Very clean, structured, organized feel. No text readable. No logos.
```
- **Negative prompt:**
```
readable text, words, logos, bright colors, busy, stock photo, people
```

---

### BG-10 — BUILT ON EXPERIENCE
- **Zona de texto:** Full overlay — EMOTIONAL PEAK slide.
- **Prompt:**
```
Dramatic cinematic full bleed photography style background 1920x1080px. A NASCAR pit crew in action under intense race track floodlights, extreme motion blur on crew members suggesting speed and urgency, yellow racing suit details visible, dramatic overhead lighting casting sharp shadows, race car partially visible low in frame. Very high contrast dramatic lighting. Over the entire image: a deep blue gradient overlay #074883 at 70% opacity on top half, #031e3f at 80% opacity on bottom, creating a dark vignette that allows white text to be readable. The image should feel cinematic, raw, energetic, powerful — like the opening frame of a Super Bowl commercial. No text. No logos in the image. Photorealistic.
```
- **Negative prompt:**
```
text, words, logos on cars, cartoonish, animated, CGI-obvious, clean studio look, pastel, soft lighting
```

---

### BG-11 — THE TEAM (Core)
- **Zona de texto:** Clean grid layout zones for 7 role cards.
- **Prompt:**
```
Minimal dark corporate presentation background 1920x1080px. Deep navy #074883. Extremely subtle dot grid pattern at 4% opacity across canvas. Very faint architectural lines suggesting a clean grid structure. Background is smooth and almost completely uniform dark blue — a clean surface where card UI elements will be placed on top. Small yellow diamond badge shape in upper right corner. No texture. No noise. No people. No logos. Style: premium corporate org chart background. Absolute cleanliness and structure.
```
- **Negative prompt:**
```
text, words, people, faces, photos, logos, bright areas, busy, colorful, stock photo
```

---

### BG-12 — EXTENDED SUPPORT NETWORK
- **Zona de texto:** Network constellation diagram zone, full canvas.
- **Prompt:**
```
Dark abstract corporate presentation background 1920x1080px. Deep navy almost black #0a0f1a. A constellation network visualization: multiple small glowing dots connected by very thin lines, forming an interconnected web across the canvas. Central node slightly larger with a warm yellow glow #FFE600. Peripheral nodes smaller, white at 40% opacity. Connecting lines very thin, white at 15% opacity. The overall network pattern feels like a neural network, a supply chain map, or a constellation. Dark zones between nodes are clean and allow for text overlay. Very subtle. Elegant. Abstract. Technical. No text. No logos.
```
- **Negative prompt:**
```
text, words, labels, logos, bright background, stock photo, cartoonish, colorful, busy
```

---

### BG-13 — HOW SUCCESS WILL BE MEASURED (KPIs)
- **Zona de texto:** Four vertical column panels with colored header bands.
- **Prompt:**
```
Dark data dashboard background 1920x1080px, deep near-black #0a0f1a. Very subtle background: an abstract data grid suggesting rows and columns at 5% opacity, like a spreadsheet seen through fog. Four vertical column zones implied by extremely faint 1px white divider lines at 25%, 50%, 75% of canvas width. Each column zone slightly different darkness: alternating #0f1520 and #111827. Top band across full width: 8% of canvas height, uniform dark as header zone. Small yellow diamond upper right. The overall feel is a Bloomberg terminal, an analytics dashboard, a performance report. No text. No visible charts. No logos.
```
- **Negative prompt:**
```
text, readable charts, logos, bright colors, stock photo, people, colorful backgrounds
```

---

### BG-14 — INVESTMENT MODEL ($17,000)
- **Zona de texto:** Left half for service list, right half for large price number.
- **Prompt:**
```
Premium corporate presentation background 1920x1080px, deep dark navy #031e3f. Right half: very slightly lighter dark navy, separated from left half by a razor-thin yellow line #FFE600 at 50% from left, 2px wide, full height, glowing softly. Left half: clean dark navy, smooth surface for service list text. Right half: clean smooth surface for large price number. Very subtle texture on entire canvas: fine grain at 3% opacity suggesting premium paper or brushed metal. Upper left corner: a small horizontal yellow rule, 60px wide, 2px tall. Upper right corner: small yellow diamond rotated 45 degrees, 30px. Bottom of canvas: thin yellow rule full width, 1px, 2% from bottom edge. No text. No logos. Style: McKinsey slide meets luxury brand proposal.
```
- **Negative prompt:**
```
text, words, numbers, logos, bright, white backgrounds, colorful, stock photo, people, busy
```

---

### BG-15 — MEDIA RETAINER ($8,000)
- **Zona de texto:** Same layout as BG-14 but with divider line at 55% from left to give more space for the number.
- **Prompt:**
```
Same system as slide 14 background. Premium dark corporate background 1920x1080px, #031e3f. This time the yellow divider line #FFE600 is at 55% from left instead of 50%, giving slightly more right-side space for the large price number. All other elements identical: fine grain texture at 3%, thin yellow rules top-left and bottom full-width, small yellow diamond upper right corner. Left side clean dark, right side clean dark. No text. No logos.
```
- **Negative prompt:**
```
text, words, numbers, logos, bright, colorful, stock photo, people, busy
```

---

### BG-16 — MEDIA INVESTMENT MANAGEMENT
- **Zona de texto:** Center focus, large number zone.
- **Prompt:**
```
Minimal elegant corporate presentation background 1920x1080px, deep navy #031e3f. Center of canvas: a very subtle large circular glow at 8% opacity yellow-white, like a distant light, suggesting scale and magnitude. The glow is soft, diffused, not sharp. Around it: complete darkness. Single thin yellow horizontal rule #FFE600 at 15% height, full canvas width, 2px. Single thin yellow horizontal rule at 85% height, full canvas width, 1px at 50% opacity. Small yellow diamond upper right 30px. The entire background is extremely clean and minimal — this is a number slide, so the background must be completely subordinate to the content. No text. No logos.
```
- **Negative prompt:**
```
text, words, numbers, logos, bright, colorful, busy, stock photo, people
```

---

### BG-17 — OPERATIONAL ASSUMPTIONS
- **Zona de texto:** Ghost large number "200" in background, text overlay on top.
- **Prompt:**
```
Dark corporate presentation background 1920x1080px, #074883. Background element: the number "200" rendered as a massive translucent ghost shape — completely illegible as text, just the outlines/silhouette of the numeral at 18% opacity, very large, spanning approximately 60% of canvas height, centered, in yellow #FFE600. This is purely a design element, not readable text. The ghost number adds visual interest without competing with the actual content overlay. Surrounding: clean dark navy. Left: thin yellow vertical accent bar 3px, full height, at 8% from left. No other elements. No logos.
```
- **Negative prompt:**
```
readable text, logos, bright, colorful, stock photo, people, busy patterns, clear typography
```

---

### BG-18 — ADDITIONAL SERVICES
- **Zona de texto:** Two-column card layout zones.
- **Prompt:**
```
Dark corporate presentation background 1920x1080px, deep navy #074883. Two-column layout implied by a thin 1px vertical yellow line #FFE600 at 50% canvas width, full height, at 30% opacity. Each half: clean dark smooth surface. Header zone: top 12% of canvas, slightly darker than body #031e3f with a thin yellow bottom border 1px. Small yellow diamond upper right. Very subtle: the background has an extremely faint abstract texture suggesting industry and services — like a blueprint grid at 3% opacity. No text. No logos. Clean. Professional.
```
- **Negative prompt:**
```
text, words, logos, bright, colorful, stock photo, people, busy
```

---

### BG-19 — CLOSING (LET'S BUILD WHAT'S NEXT)
- **Zona de texto:** Centered, cinematic, full bleed.
- **Prompt:**
```
Epic cinematic full bleed background 1920x1080px for a closing presentation slide. A Puerto Rico highway at golden hour, shot from low ground angle looking toward the horizon, road stretching into the distance, warm golden sky with dramatic clouds, a luxury automobile silhouette driving away into the horizon. The image has incredible depth and light. Over the entire image: a deep blue gradient overlay #074883 at 65% opacity heavier at top and bottom, lighter in the middle revealing the warmth of the scene, creating a dramatic halo effect. The composition feels like the opening frame of a Super Bowl commercial or the title card of a cinematic brand film. Extremely cinematic. Anamorphic lens character. Very small yellow diamond shape bottom center of frame as a subtle brand mark. No text. No logos. Photorealistic. Inspiring. Powerful.
```
- **Negative prompt:**
```
text, words, logos, tourist cliché, cartoonish, flat, dull, dark without light, stock photo generic look
```

---

*Prompt v2 — Sistema correcto de dos capas | Grupo Mamery x Sunoco Puerto Rico | Junio 2026*
