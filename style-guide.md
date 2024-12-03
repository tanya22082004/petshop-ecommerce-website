# Style Guide

## Colors

``` css
/* Primary Colors */
--primary-orange: hsl(15, 84%, 57%);     /* Portland Orange - Main brand color */
--primary-yellow: hsl(36, 94%, 57%);     /* Bright Yellow Crayola - Accent color */
--primary-red: hsl(9, 96%, 69%);         /* Bittersweet - Call to action */

/* Neutral Colors */
--neutral-black: hsl(210, 3%, 13%);      /* Eerie Black - Text color */
--neutral-dark: hsl(228, 6%, 17%);       /* Raisin Black - Dark backgrounds */
--neutral-gray: hsl(208, 7%, 46%);       /* Sonic Silver - Secondary text */
--neutral-light: hsl(0, 0%, 91%);        /* Platinum - Light backgrounds */

/* UI Colors */
--ui-white: hsl(0, 0%, 100%);            /* White - Background */
--ui-black: hsl(0, 0%, 0%);              /* Black - Text */
--ui-gray: hsl(0, 0%, 53%);              /* Battleship Gray - Borders */
--ui-light: hsl(0, 0%, 80%);             /* Light Gray - Disabled states */

/* Accent Colors */
--accent-amber: hsl(45, 100%, 51%);      /* Amber - Highlights */
--accent-silver: hsl(0, 0%, 70%);        /* Silver Chalice - Subtle accents */
```

## Typography

``` css
/* Font Families */
--ff-primary: 'Nunito Sans', sans-serif;    /* Main text */
--ff-display: 'Bangers', cursive;           /* Headlines */
--ff-accent: 'Carter One', cursive;         /* Special text */

/* Font Sizes */
--fs-display: 6.5rem;    /* 104px - Hero headlines */
--fs-h1: 3.2rem;         /* 51.2px - Main headlines */
--fs-h2: 2.4rem;         /* 38.4px - Section headlines */
--fs-h3: 2rem;           /* 32px - Subsection headlines */
--fs-h4: 1.8rem;         /* 28.8px - Card headlines */
--fs-body-lg: 1.5rem;    /* 24px - Large body text */
--fs-body: 1.4rem;       /* 22.4px - Regular body text */
--fs-small: 1rem;        /* 16px - Small text */

/* Font Weights */
--fw-regular: 400;
--fw-bold: 700;
```

## Spacing & Layout

``` css
/* Spacing */
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 40px;
--space-3xl: 64px;

/* Container Widths */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
```

## Effects

``` css
/* Shadows */
--shadow-sm: 0 2px 4px hsla(0, 0%, 0%, 0.1);
--shadow-md: 0 8px 16px hsla(0, 0%, 0%, 0.15);
--shadow-lg: 0 8px 8px hsla(0, 0%, 0%, 0.2);

/* Border Radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 10px;
--radius-full: 9999px;

/* Transitions */
--transition-fast: 0.25s ease;
--transition-normal: 0.5s ease;
--transition-slow: 0.75s ease;
--cubic-in: cubic-bezier(0.51, 0.03, 0.64, 0.28);
--cubic-out: cubic-bezier(0.33, 0.85, 0.4, 0.96);
```

## Breakpoints

``` css
/* Media Query Breakpoints */
--mobile: 375px;
--tablet: 768px;
--laptop: 1024px;
--desktop: 1280px;
--widescreen: 1440px;
```

## Grid System

``` css
/* Grid Columns */
--grid-1: 8.333333%;
--grid-2: 16.666667%;
--grid-3: 25%;
--grid-4: 33.333333%;
--grid-6: 50%;
--grid-8: 66.666667%;
--grid-9: 75%;
--grid-12: 100%;

/* Grid Gaps */
--gap-sm: 16px;
--gap-md: 24px;
--gap-lg: 32px;
```

## Common Components

``` css
/* Buttons */
.btn {
    padding: var(--space-sm) var(--space-xl);
    border-radius: var(--radius-full);
    font-weight: var(--fw-bold);
    transition: var(--transition-fast);
}

/* Cards */
.card {
    background: var(--ui-white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    padding: var(--space-lg);
}

/* Forms */
.input {
    border: 2px solid var(--ui-gray);
    border-radius: var(--radius-sm);
    padding: var(--space-sm) var(--space-md);
    font-family: var(--ff-primary);
}
```
