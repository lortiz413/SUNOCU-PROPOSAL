# Script to generate exactly 3000-character prompts for Seedance 2.0 with improved epic story (16:9, 15s, no headers).

def build_prompt(core_text):
    target = 3000
    current_len = len(core_text)
    if current_len > target:
        return core_text[:target]
    elif current_len < target:
        padding_text = " Maintain absolute physical fidelity to the visual references of @img1, @img2, @img3, @img4, @img5, and @img6. Reinforce realistic cloth draping, secondary motion of garments, natural hair strand simulation in wind, dynamic shadow casting with correct light occlusion, volumetric fog diffusion, sub-surface scattering on chalk-white skin, real-world optics (anamorphic lens flares, chromatic aberration, shallow depth of field), and cohesive dark magic particle physics. "
        while len(core_text) < target:
            core_text += padding_text
        return core_text[:target]
    return core_text

# References:
# @img1 = Emrys original
# @img2 = Dark Lord Emrys
# @img3 = Dark Forest
# @img4 = Nyxara
# @img5 = Vorek
# @img6 = Young Witness

# Prompt 1: The Transformation & Summoning
prompt1_core = """1 shot, 15 seconds, 16:9 aspect ratio. The scene begins with a close-up of Emrys in his original human form from @img1, wearing his classic modern suit and sunglasses. Suddenly, a violent magical transformation occurs. His skin rapidly turns to the cadaveric waxy chalk-white flesh of @img2, and thin black veins spiderweb across his neck. His sunglasses shatter under magical pressure, revealing solid glossy black eyes. Serpentine snake tattoos crawl and writhe up his throat. His modern suit disintegrates, dissolving into the floor-length layered black robe and heavy hood of @img2. Emrys raises his blackened wood wand, waving it to erupt a vortex of thick dark smoke from his feet. Out of the swirling shadow vortex, Nyxara, matching @img4 with her ash-grey skin and glowing violet eyes, emerges on his left. On his right, Vorek, matching @img5 with his monstrous fanged jaw and skeletal chest, coalesces from the smoke. Safe in a high stone balcony far above, a young witness matching @img6 watches through a metal grate, trembling in absolute horror. The camera tracks slowly backward, revealing the massive chamber in @img3. High-contrast chiaroscuro lighting, deep shadows, and cinematic 35mm film aesthetic."""

# Prompt 2: The Ambush of the Light Inquisitors
prompt2_core = """1 shot, 15 seconds, 16:9 aspect ratio. Deep in the misty dark forest of @img3, Emrys, looking exactly like @img2, is ambushed by a squad of Light Inquisitors wearing heavy white-and-gold plate armor and wielding glowing golden swords. Flanking Emrys are Nyxara (@img4) and Vorek (@img5). Watching from a safe distance, hidden behind a massive gnarled tree root, the young witness (@img6) hyperventilates in terror. The Inquisitors charge, firing blinding rays of holy light. Vorek (@img5) steps forward, slamming his massive clawed fist into the ground to summon a colossal barrier of black shadow and bone that completely absorbs the light blasts. Simultaneously, Nyxara (@img4) dissolves into a fast cloud of black smoke, phasing through the forest trees to materialize behind the lead Inquisitor. Her violet-glowing claws sweep through the air, neutralizing him in a fluid, lethal motion. Dynamic panning shot with high-speed action and slow-motion transitions. Brilliant violet sparks clash against golden light. Volumetric dust, realistic cloth physics, and perfect visual consistency with @img2, @img4, and @img5."""

# Prompt 3: The Dark Court of Shadow
prompt3_core = """1 shot, 15 seconds, 16:9 aspect ratio. Inside a ruined gothic cathedral hall matching the dark aesthetic of @img3, Emrys (@img2) is seated majestically on a towering throne of polished black obsidian. Nyxara stands on the left, matching @img4 with her curved horns and glowing violet eyes. Vorek stands on the right, matching @img5. Far below, at the base of the long stone steps of the throne, the captured young witness (@img6) is forced to kneel, held down by tendrils of living shadow creeping from the floor. Emrys (@img2) slowly raises his head, glaring down with solid glossy black eyes, radiating supreme malice. A wave of violet energy pulses from the throne, causing the violet torches lining the walls to flare up with dark fire. Symmetrical dolly zoom-in toward the throne. Ominous theatrical lighting, crushing black shadows, and rich textures of stone, waxy white skin, and obsidian. Perfect consistency with @img2, @img4, @img5, and @img6 is maintained throughout the scene."""

p1 = build_prompt(prompt1_core)
p2 = build_prompt(prompt2_core)
p3 = build_prompt(prompt3_core)

print(f"P1 len: {len(p1)}")
print(f"P2 len: {len(p2)}")
print(f"P3 len: {len(p3)}")

with open("prompts_seedance2.txt", "w") as f:
    f.write("=== PROMPT 1 ===\n")
    f.write(p1 + "\n")
    f.write(f"Length: {len(p1)}\n\n")
    f.write("=== PROMPT 2 ===\n")
    f.write(p2 + "\n")
    f.write(f"Length: {len(p2)}\n\n")
    f.write("=== PROMPT 3 ===\n")
    f.write(p3 + "\n")
    f.write(f"Length: {len(p3)}\n\n")
