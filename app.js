// Node Graph Dependencies Data (Cozy Modern workflow)
const nodeConnections = [
    { from: 1, to: 6 },
    { from: 2, to: 6 },
    { from: 3, to: 6 },
    { from: 4, to: 7 },
    { from: 5, to: 8 },
    { from: 6, to: 7 },
    { from: 7, to: 8 },
    { from: 8, to: 9 },
    { from: 9, to: 10 },
    { from: 10, to: 11 },
    { from: 11, to: 12 },
    { from: 12, to: 13 }
];

// Node Data details
const nodeData = {
    1: {
        name: "Especificación de Lienzo",
        tool: "Photoshop / Figma",
        inputs: "Dimensiones de display en stand: 9 x 12 pulgadas",
        outputs: "Lienzo de 2700 x 3600 píxeles a 300 DPI",
        settings: "Tamaño: 2700 x 3600 px (Relación de aspecto 3:4)\nResolución: 300 DPI\nEspacio de color: RGB de trabajo (sRGB o Adobe RGB)"
    },
    2: {
        name: "Logotipo y Tipografía Vectorial",
        tool: "Adobe Illustrator / Vectores",
        inputs: "Textos: 'SELECCIÓN DE TAMAÑO', 'PEQUEÑO', 'REGULAR', 'GRANDE'\nLogo: Vector amarillo de marca (línea con cumbrera de techo)",
        outputs: "Capa de vectores limpia con el icono posicionado arriba del título principal",
        settings: "Tipografía de tamaños: Sans-serif condensada y gruesa (Bebas Neue / Anton)\nLogo: Vector de marca simplificado, configurado en color amarillo brillante (#FFE600)\nAlineación: Central vertical"
    },
    3: {
        name: "Referencias de Paleta Cozy",
        tool: "Muestra física / Paleta de color",
        inputs: "Colores apagados del diseño de cafetería europea / Brooklyn",
        outputs: "Código de color hexadecimal base de los tonos seleccionados",
        settings: "Fondo Crema: #FAF6F0\nAzul Grisáceo: #4A6A8A\nMarrón Espresso: #804A2D\nLogo Amarillo: #FFE600"
    },
    4: {
        name: "Generación de Textura de Papel Crema",
        tool: "NanoBanana 2 / Flux AI",
        inputs: "Prompt: 'High-resolution photography of a smooth warm cream-ivory paper card texture, flat background, srs light'",
        outputs: "Fondo de textura de papel limpio y elegante (1024x1365px)",
        settings: "Aspect Ratio: 3:4\nSteps: 25\nCFG Scale: 6.5\nSeed: Fija para consistencia de grano de papel"
    },
    5: {
        name: "Capa de Ruido Orgánico",
        tool: "Photoshop (Filtros de Textura)",
        inputs: "Textura base del papel (Nodo 4)",
        outputs: "Máscara de textura de fibra fina de alta definición",
        settings: "Añadir ruido gaussiano al 1% o mapa de relieve de papel prensado"
    },
    6: {
        name: "Composición Tipográfica Escalonada",
        tool: "Adobe Photoshop",
        inputs: "Lienzo (Nodo 1) + Textura Papel (Nodo 4) + Vectores (Nodo 2)",
        outputs: "Montaje tipográfico alineado en plano",
        settings: "Alineación Escalonada: PEQUEÑO (Alineado izquierda, 10%), REGULAR (Centrado), GRANDE (Alineado derecha, 10%)\nEscala: Altura progresiva de las palabras"
    },
    7: {
        name: "Mapeo de Colores Cozy",
        tool: "Photoshop (Paleta selectiva)",
        inputs: "Composición tipográfica (Nodo 6)",
        outputs: "Letras coloreadas con el patrón azul-marrón de alta fidelidad",
        settings: "PEQUEÑO y GRANDE: Mapeado a Azul Grisáceo (#4A6A8A)\nREGULAR: Mapeado a Marrón Espresso (#804A2D)\nEfecto: Contornos vectoriales perfectamente definidos y limpios"
    },
    8: {
        name: "Composición de Logotipo & Detalles",
        tool: "Photoshop (Compositor de Capas)",
        inputs: "Fondo tipográfico (Nodo 7) + Logo amarillo (Nodo 2)",
        outputs: "Composición final a media resolución lista para el reescalado",
        settings: "Logo: Centrado horizontalmente al tope del lienzo\nFooter: Texto 'EL MESÓN SANDWICHES • PREMIUM ESPRESSO' centrado al fondo en color marrón translúcido"
    },
    9: {
        name: "Reescalado Magnific Pro",
        tool: "Magnific Pro",
        inputs: "Composición inicial (Nodo 8)",
        outputs: "Poster final en súper-resolución (2700x3600px) con bordes vectoriales hiper-nítidos y fibras de papel realistas",
        settings: "Scale Factor: 2.5x\nCreativity: 2 (Mantiene bordes de texto ultra nítidos y vectoriales, añadiendo textura de papel sutil)\nHdr: 2\nResemblance: 10 (Fidelidad total al diseño tipográfico)"
    },
    10: {
        name: "Equilibrio de Color LUT",
        tool: "Photoshop / Camera Raw",
        inputs: "Imagen súper-resolución (Nodo 9)",
        outputs: "Tonalidad cálida y contraste exacto",
        settings: "LUT: Cozy Matte / Warm Portra\nContraste: Ajuste fino para mantener los tonos azul y marrón con una saturación natural y apagada"
    },
    11: {
        name: "Simulación de Imprenta Mate",
        tool: "Photoshop (Efecto Mate)",
        inputs: "Imagen Graduada (Nodo 10)",
        outputs: "Arte unificado visualmente simlando impresión directa en papel pesado de algodón mate",
        settings: "Efecto: Reducción sutil de brillos mediante curvas de iluminación para dar look mate analógico"
    },
    12: {
        name: "Conversión de Espacio de Color CMYK",
        tool: "Adobe Color Engine",
        inputs: "Imagen Final RGB (Nodo 11)",
        outputs: "Canales de color convertidos listos para imprenta",
        settings: "Perfil de destino: Coated FOGRA39 (Ideal para cartulina mate de alta densidad)"
    },
    13: {
        name: "Exportación de Entregables",
        tool: "Photoshop Exporter",
        inputs: "Arte en CMYK (Nodo 12)",
        outputs: "TIFF 300 DPI plano de alta fidelidad para imprenta + PNG de previsualización web ligera",
        settings: "TIFF: Sin comprimir, 8-bit por canal\nPNG: sRGB, 1500px alto para aprobación digital"
    }
};

// Application State
const state = {
    fontFamily: "'Bebas Neue', sans-serif",
    scalePequeno: 1.4,
    scaleRegular: 2.1,
    scaleGrande: 2.9,
    alignStyle: "staggered",
    colorPalette: "classic",
    bgColorClass: "theme-cozy-cream",
    activeTab: "poster-tab"
};

// Initialize app when DOM loads
document.addEventListener("DOMContentLoaded", () => {
    // Render the initial poster sizing
    updatePoster();
    // Initialize node connections
    setTimeout(drawNodeConnections, 200);
    // Highlight default node
    showNodeDetails(6);

    // Watch window resize to redraw connections
    window.addEventListener("resize", drawNodeConnections);
});

// Copy Text function
function copyText(elementId, button) {
    const textarea = document.getElementById(elementId);
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(textarea.value)
        .then(() => {
            const originalHTML = button.innerHTML;
            button.innerHTML = '<span class="btn-icon">✓</span> ¡Copiado!';
            button.classList.add("copied");
            
            setTimeout(() => {
                button.innerHTML = originalHTML;
                button.classList.remove("copied");
            }, 2000);
        })
        .catch(err => {
            console.error("Fallo al copiar texto: ", err);
        });
}

// Switch tabs
function switchTab(tabId, button) {
    // Hide all panels
    const panels = document.querySelectorAll(".tab-panel");
    panels.forEach(p => p.classList.remove("active"));
    
    // Deactivate all buttons
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(b => b.classList.remove("active"));
    
    // Activate clicked
    document.getElementById(tabId).classList.add("active");
    button.classList.add("active");
    
    state.activeTab = tabId;

    if (tabId === "workflow-tab") {
        setTimeout(drawNodeConnections, 100);
    }
}

// Update poster preview from control values
function updatePoster() {
    // Read input values
    const fontSelect = document.getElementById("font-family-select");
    state.fontFamily = fontSelect.value;
    
    state.scalePequeno = parseFloat(document.getElementById("scale-pequeno").value);
    state.scaleRegular = parseFloat(document.getElementById("scale-regular").value);
    state.scaleGrande = parseFloat(document.getElementById("scale-grande").value);
    
    state.alignStyle = document.getElementById("align-style").value;
    state.colorPalette = document.getElementById("color-palette").value;
    
    const bgSelect = document.getElementById("bg-color");
    state.bgColorClass = "theme-" + bgSelect.value;
    
    // Update labels
    document.getElementById("val-pequeno").innerText = state.scalePequeno.toFixed(2);
    document.getElementById("val-regular").innerText = state.scaleRegular.toFixed(2);
    document.getElementById("val-grande").innerText = state.scaleGrande.toFixed(2);
    
    // Apply changes to DOM elements
    const canvas = document.getElementById("poster-canvas");
    canvas.className = "poster-canvas " + state.bgColorClass;
    
    // Select elements
    const itemP = document.getElementById("item-pequeno");
    const itemR = document.getElementById("item-regular");
    const itemG = document.getElementById("item-grande");
    
    const textP = itemP.querySelector(".size-text-bold");
    const textR = itemR.querySelector(".size-text-bold");
    const textG = itemG.querySelector(".size-text-bold");
    
    const elements = [textP, textR, textG];
    elements.forEach(el => {
        el.style.fontFamily = state.fontFamily;
    });
    
    // Apply progressive text heights
    // Base size is 20px
    const baseSize = 20;
    textP.style.fontSize = `${baseSize * state.scalePequeno}px`;
    textR.style.fontSize = `${baseSize * state.scaleRegular}px`;
    textG.style.fontSize = `${baseSize * state.scaleGrande}px`;
    
    // Apply alignments
    if (state.alignStyle === "staggered") {
        itemP.style.textAlign = "left";
        itemP.style.paddingLeft = "8%";
        itemP.style.paddingRight = "0";
        
        itemR.style.textAlign = "center";
        itemR.style.paddingLeft = "0";
        itemR.style.paddingRight = "0";
        
        itemG.style.textAlign = "right";
        itemG.style.paddingLeft = "0";
        itemG.style.paddingRight = "8%";
    } else if (state.alignStyle === "center") {
        itemP.style.textAlign = "center";
        itemP.style.paddingLeft = "0";
        itemP.style.paddingRight = "0";
        
        itemR.style.textAlign = "center";
        itemR.style.paddingLeft = "0";
        itemR.style.paddingRight = "0";
        
        itemG.style.textAlign = "center";
        itemG.style.paddingLeft = "0";
        itemG.style.paddingRight = "0";
    } else { // left
        itemP.style.textAlign = "left";
        itemP.style.paddingLeft = "10%";
        itemP.style.paddingRight = "0";
        
        itemR.style.textAlign = "left";
        itemR.style.paddingLeft = "10%";
        itemR.style.paddingRight = "0";
        
        itemG.style.textAlign = "left";
        itemG.style.paddingLeft = "10%";
        itemG.style.paddingRight = "0";
    }
    
    // Apply color palettes
    let pColor, rColor, gColor;
    if (state.colorPalette === "classic") {
        pColor = "#4a6a8a"; // Cozy Muted Blue
        rColor = "#804a2d"; // Cozy Espresso Brown
        gColor = "#4a6a8a";
    } else if (state.colorPalette === "terracotta") {
        pColor = "#c46a4f"; // Terracotta
        rColor = "#334155"; // Slate Slate
        gColor = "#c46a4f";
    } else if (state.colorPalette === "emerald") {
        pColor = "#2d6a4f"; // Emerald
        rColor = "#1f2937"; // Charcoal
        gColor = "#2d6a4f";
    } else { // monochrome brown
        pColor = "#422010"; // Dark espresso
        rColor = "#422010";
        gColor = "#422010";
    }
    
    // Apply overrides for dark theme background
    if (bgSelect.value === "espresso-brown") {
        if (state.colorPalette === "classic") {
            pColor = "#8da4b8";
            rColor = "#e6b195";
            gColor = "#8da4b8";
        } else if (state.colorPalette === "monochrome") {
            pColor = "#f5ecd7";
            rColor = "#f5ecd7";
            gColor = "#f5ecd7";
        }
    }
    
    textP.style.color = pColor;
    textR.style.color = rColor;
    textG.style.color = gColor;
}

// Show Node details in the side panel
function showNodeDetails(id) {
    // Select clicked node, deselect others
    document.querySelectorAll(".node-item").forEach(item => {
        item.classList.remove("selected");
    });
    
    const activeNode = document.getElementById(`node-${id}`);
    if (activeNode) {
        activeNode.classList.add("selected");
    }
    
    const node = nodeData[id];
    if (!node) return;
    
    // Render details
    document.getElementById("node-detail-id").innerText = `NODO ${id}`;
    document.getElementById("node-detail-name").innerText = node.name;
    
    const bodyContainer = document.getElementById("node-detail-body");
    bodyContainer.innerHTML = `
        <div class="node-info-block">
            <span class="node-info-label">🛠️ Herramienta Sugerida</span>
            <div class="node-info-value">${node.tool}</div>
        </div>
        <div class="node-info-block">
            <span class="node-info-label">📥 Entradas</span>
            <div class="node-info-value">${node.inputs}</div>
        </div>
        <div class="node-info-block">
            <span class="node-info-label">📤 Salidas</span>
            <div class="node-info-value">${node.outputs}</div>
        </div>
        <div class="node-info-block">
            <span class="node-info-label">⚙️ Ajustes y Parámetros</span>
            <div class="node-info-value node-info-value-code">${node.settings}</div>
        </div>
    `;

    // Highlight active paths on the SVG canvas
    highlightPaths(id);
}

// Draw dynamic paths connecting nodes in the SVG overlay
function drawNodeConnections() {
    if (state.activeTab !== "workflow-tab") return;
    
    const svg = document.getElementById("svg-connections");
    const container = document.getElementById("graph-scroll-area");
    if (!svg || !container) return;
    
    // Clear svg
    svg.innerHTML = "";
    
    const rectScroll = container.getBoundingClientRect();
    
    // Add path markers (arrows)
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    defs.innerHTML = `
        <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="rgba(212, 163, 115, 0.4)" />
        </marker>
        <marker id="arrow-selected" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#d4a847" />
        </marker>
    `;
    svg.appendChild(defs);
    
    // Draw paths for all connections
    nodeConnections.forEach((conn, index) => {
        const fromNode = document.getElementById(`node-${conn.from}`);
        const toNode = document.getElementById(`node-${conn.to}`);
        
        if (fromNode && toNode) {
            const rectFrom = fromNode.getBoundingClientRect();
            const rectTo = toNode.getBoundingClientRect();
            
            // Calculate coords relative to the scroll area
            const fromX = rectFrom.right - rectScroll.left + container.scrollLeft;
            const fromY = rectFrom.top + rectFrom.height / 2 - rectScroll.top + container.scrollTop;
            
            const toX = rectTo.left - rectScroll.left + container.scrollLeft;
            const toY = rectTo.top + rectTo.height / 2 - rectScroll.top + container.scrollTop;
            
            // Draw a smooth bezier curve
            const controlOffset = Math.abs(toX - fromX) / 2;
            const dPath = `M ${fromX} ${fromY} C ${fromX + controlOffset} ${fromY}, ${toX - controlOffset} ${toY}, ${toX} ${toY}`;
            
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", dPath);
            path.setAttribute("fill", "none");
            path.setAttribute("stroke", "rgba(212, 163, 115, 0.2)");
            path.setAttribute("stroke-width", "2");
            path.setAttribute("marker-end", "url(#arrow)");
            path.setAttribute("id", `path-${conn.from}-${conn.to}`);
            
            svg.appendChild(path);
        }
    });
}

// Highlight paths associated with active nodes
function highlightPaths(selectedNodeId) {
    // Dim all connections
    const paths = document.querySelectorAll("#svg-connections path");
    paths.forEach(p => {
        if (p.id) {
            p.setAttribute("stroke", "rgba(212, 163, 115, 0.15)");
            p.setAttribute("stroke-width", "2");
            p.setAttribute("marker-end", "url(#arrow)");
        }
    });
    
    // Highlight relevant paths (incoming or outgoing from selectedNodeId)
    nodeConnections.forEach(conn => {
        if (conn.from === selectedNodeId || conn.to === selectedNodeId) {
            const path = document.getElementById(`path-${conn.from}-${conn.to}`);
            if (path) {
                path.setAttribute("stroke", "#d4a847");
                path.setAttribute("stroke-width", "3");
                path.setAttribute("marker-end", "url(#arrow-selected)");
            }
        }
    });
}
