# Script to generate exactly 3000-character prompts for Seedance with image references

def build_prompt(core_text):
    target = 3000
    current_len = len(core_text)
    if current_len > target:
        return core_text[:target]
    elif current_len < target:
        # Pad with repeating structured descriptive sentences
        padding_text = " Focusing on the hyperrealistic movements, cinematic film grain, extreme details of the magical particles, rich texture of the fabrics, dynamic shadow simulation, atmospheric lighting, and high-fidelity video rendering. "
        while len(core_text) < target:
            core_text += padding_text
        return core_text[:target]
    return core_text

# @img1 = Emrys original
# @img2 = Dark Lord Emrys
# @img3 = Dark Forest
# @img4 = Nyxara
# @img5 = Vorek
# @img6 = Young Witness

prompt1_core = """SEEDANCE VIDEO GENERATION PROMPT - REEL 1: THE SHADOW SUMMONING.
Camera movement: Slow, immersive forward tracking shot entering a clearing in @img3 (Dark Forest). The camera slowly orbits around a central figure.
Visuals: In the center of the dark forest clearing shown in @img3, stands the supreme dark sorcerer Emrys, looking exactly like @img2, with waxy cadaveric chalk-white skin, solid glossy black eyes, short dark hair, and black veins creeping up his neck under serpentine snake tattoos. He wears the layered black robes and hood from @img2. His hands are dipped in pure black up to the wrists. He holds a gnarled blackened wood wand emitting soft violet magical energy. His initial appearance transitions from his human form in @img1 to his dark lord form in @img2.
Action: The sorcerer raises his wand. As he waves it, thick black smoke and tendrils of shadow erupt from the ground, mimicking the dark magical energy of @img3. The shadows swirl violently, creating a dark magic vortex. From this vortex, two figures emerge: to his left, Nyxara, matching @img4 with her ash-grey skin, curved swept-back horns, and glowing pale-violet eyes; to his right, Vorek, matching @img5, a massive seven-foot demon warrior with a skeletal rib chest and gaping fanged jaw under a torn hood. A young witness, matching @img6, hides behind a gnarled tree trunk watching in absolute shock.
Atmosphere and Lighting: Extremely dark, moody, chiaroscuro lighting. High contrast. Strong rim light outlines the characters. The primary light source is the violet glow from Emrys' wand and the glowing eyes of Nyxara (@img4) and Vorek (@img5). Volumetric fog crawls on the forest floor. Ultra-realistic textures of stone, bark, fabric, skin, and magical particles. Zero CGI look, cinematic film style, shot on 35mm, premium production design."""

prompt2_core = """SEEDANCE VIDEO GENERATION PROMPT - REEL 2: DEMONSTRATION OF POWER.
Camera movement: Dynamic panning and quick tracking shots, transitioning to slow-motion to capture the action. The camera orbits the combat scene.
Visuals: Deep inside @img3 (Dark Forest), the dark lord Emrys, looking exactly like @img2, stands completely calm. His waxy white skin, solid black eyes, and serpentine neck tattoos are highlighted by the rim light. Flanking him are his two dark magic disciples: Nyxara, looking exactly like @img4, and Vorek, looking exactly like @img5. Nearby, a young witness, matching @img6, watches in absolute terror from the shadows of the forest.
Action: Hostile forces fire bright magical projectiles at Emrys. Vorek (@img5) steps forward, slamming his heavy clawed hand into the ground, raising a colossal barrier of black shadow and violet energy that absorbs the impacts. Meanwhile, Nyxara (@img4) dissolves into a fast cloud of dark smoke and teleports behind the attackers. She materializes mid-air, her dark claws glowing with violet power, sweeping through the air to neutralize the threat in a fluid, lethal motion.
Atmosphere and Lighting: High-speed action photography, high contrast. Brilliant violet sparks scatter across the dark forest clearing (@img3). Volumetric smoke and dust fill the air. The characters exhibit hyperrealistic movement, showing Vorek's massive physical weight (@img5) and Nyxara's smoke-like fluid motion (@img4). The color palette is dominated by deep obsidian, charcoal, and vibrant violet magic. Cinematic film grain, sharp focus, volumetric dust motes, realistic cloth simulation, and high-fidelity textures. Visual consistency with the characters from @img2, @img4, and @img5 is maintained throughout the scene."""

prompt3_core = """SEEDANCE VIDEO GENERATION PROMPT - REEL 3: THE ASCENSION OF THE DARK LORD.
Camera movement: Extremely slow, symmetrical central dolly zoom-in toward a massive obsidian throne in a ruined hall deep within @img3.
Visuals: Seated on a towering throne of polished black obsidian is the dark lord Emrys, looking exactly like @img2. His waxy cadaveric skin and solid glossy black eyes are stark against the throne. His hands, stained black to the wrists, rest on the armrests. His black robe from @img2 dissolves into rolling smoke at the hem. Standing on the left is Nyxara, matching @img4 with her curved horns and glowing pale-violet eyes. Standing on the right is Vorek, matching @img5 with his monstrous fanged jaw and skeletal chest. Kneeling in submission before the throne is the young witness, matching @img6, trembling in fear.
Action: Emrys (@img2) raises his head, glaring directly into the camera. A wave of violet energy pulses outward from the throne, rippling across the stone floor. The smoke around his robe surges upward. The violet torches lining the hall flare up with dark fire. The atmosphere is heavy with absolute menace and sovereign power.
Atmosphere and Lighting: Symmetrical composition, theatrical low-key lighting. The scene is illuminated by flicking torches and the faint under-glow of the throne. High contrast, crushing black shadows, and rich textures of stone, metal, and waxy skin. Volumetric smoke slowly curling upward. Epic cinematic master shot, photorealistic, premium production design, dark fantasy aesthetic, 8k resolution, flawless render quality. Perfect consistency with the character references in @img2, @img4, @img5, and @img6 is enforced."""

p1 = build_prompt(prompt1_core)
p2 = build_prompt(prompt2_core)
p3 = build_prompt(prompt3_core)

print(f"P1 len: {len(p1)}")
print(f"P2 len: {len(p2)}")
print(f"P3 len: {len(p3)}")

with open("prompts.txt", "w") as f:
    f.write("=== PROMPT 1 ===\n")
    f.write(p1 + "\n")
    f.write(f"Length: {len(p1)}\n\n")
    f.write("=== PROMPT 2 ===\n")
    f.write(p2 + "\n")
    f.write(f"Length: {len(p2)}\n\n")
    f.write("=== PROMPT 3 ===\n")
    f.write(p3 + "\n")
    f.write(f"Length: {len(p3)}\n\n")
