
# Plan: Nueva Imagen con Efecto 3D en la Sección "Sobre Mí"

## Resumen
Voy a reemplazar la imagen actual de la Dra. Cherida en la sección "Sobre Mí" con la nueva foto que subiste y agregarle efectos visuales 3D espectaculares que harán que la imagen se vea increíble y profesional.

## Lo que verás

La imagen tendrá un efecto 3D interactivo que incluye:
- **Rotación 3D al mover el mouse**: La imagen se inclinará sutilmente siguiendo el cursor
- **Efectos de profundidad**: Múltiples capas que crean sensación de profundidad
- **Brillos y reflejos**: Efectos de luz que se mueven con la imagen
- **Marco elegante dorado**: Bordes decorativos que flotan alrededor de la imagen
- **Sombras dinámicas**: Sombras que cambian según la perspectiva

---

## Detalles Técnicos

### Paso 1: Copiar la nueva imagen
Copiaré la imagen que subiste al proyecto como `src/assets/dra-cherida-about.jpeg`

### Paso 2: Actualizar AboutSection.tsx

**Cambios principales:**

1. **Importar la nueva imagen** en lugar de la actual

2. **Crear efecto 3D interactivo con framer-motion:**
   - Usar `useMotionValue` y `useTransform` para rastrear posición del mouse
   - Calcular rotación X/Y basada en la posición del cursor
   - Aplicar `perspective` y `rotateX/rotateY` para el efecto 3D
   - Agregar transiciones suaves para movimiento fluido

3. **Agregar capas decorativas:**
   - Capa de fondo con gradiente dorado difuminado
   - Marco flotante con animación
   - Anillo de brillo animado alrededor de la imagen
   - Reflejo/shimmer que cruza la imagen
   - Partículas decorativas flotando

4. **Estilos CSS adicionales:**
   - `transform-style: preserve-3d` para mantener el efecto 3D
   - Sombras con múltiples capas para profundidad
   - Transiciones suaves al entrar/salir del hover

### Estructura del componente de imagen:

```text
┌─────────────────────────────────────┐
│  Contenedor Principal (perspective) │
│  ┌───────────────────────────────┐  │
│  │   Capa de Brillo Exterior     │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │   Marco Dorado Flotante │  │  │
│  │  │  ┌───────────────────┐  │  │  │
│  │  │  │                   │  │  │  │
│  │  │  │   IMAGEN 3D       │  │  │  │
│  │  │  │   (rotación)      │  │  │  │
│  │  │  │                   │  │  │  │
│  │  │  └───────────────────┘  │  │  │
│  │  │   Shimmer Effect        │  │  │
│  │  └─────────────────────────┘  │  │
│  │   Partículas Flotantes        │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

## Resultado Final

La imagen de la Dra. Cherida se verá con un efecto 3D elegante y profesional que:
- Responde al movimiento del mouse de forma suave
- Tiene profundidad y dimensión visual
- Incluye brillos y efectos de luz sutiles
- Mantiene la estética elegante del sitio
- Crea un "wow factor" al interactuar con ella
