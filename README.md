# Actividad2

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Components

### Galería Paginada

El nuevo componente `galeria-paginada` es una versión mejorada del componente original `galeria` que incluye funcionalidad de paginación.

#### Características:

- **Paginación completa**: Navegación por páginas con controles de primera/última página, anterior/siguiente
- **Configuración personalizable**: 6 imágenes por página (configurable)
- **Interfaz intuitiva**: Botones de navegación con estados activo/deshabilitado
- **Información de contexto**: Muestra página actual, total de páginas e imágenes totales
- **Diseño responsivo**: Adaptado para dispositivos móviles y tablets
- **Animaciones suaves**: Efectos hover y transiciones para mejorar la experiencia del usuario

#### Funcionalidades:

- `goToPage(page: number)`: Navega a una página específica
- `goToFirstPage()`: Va a la primera página
- `goToLastPage()`: Va a la última página
- `goToPreviousPage()`: Va a la página anterior
- `goToNextPage()`: Va a la página siguiente

#### Configuración:

```typescript
itemsPerPage: number = 6; // Número de imágenes por página
```

#### Navegación:

El componente está disponible en `/galeria-paginada` y se puede acceder desde el menú de navegación principal.

### Funcionalidad de Navegación Inteligente

Se ha implementado un sistema de navegación inteligente que permite:

#### Botón "Volver" en el componente Photo:

- **Navegación precisa**: Cuando se accede a una foto desde la galería paginada, el botón "Volver" regresa exactamente a la página específica desde donde se vino
- **Información contextual**: El botón muestra "Volver a la galería (Página X)" indicando claramente a qué página regresará
- **Soporte multi-galería**: Funciona con todas las galerías (normal, paginada, aleatoria)

#### Implementación técnica:

- **Query Parameters**: Las galerías pasan `returnUrl` y `page` como parámetros de consulta
- **Estado persistente**: La galería paginada recuerda la página actual al navegar de vuelta
- **Interfaz adaptativa**: El botón "Volver" solo se muestra cuando hay información de origen disponible

#### Ejemplos de uso:

```typescript
// URL cuando se accede desde galería paginada página 3:
/photo/1018/Author?returnUrl=/galeria-paginada&page=3

// El botón "Volver" navegará exactamente a:
/galeria-paginada?page=3
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
